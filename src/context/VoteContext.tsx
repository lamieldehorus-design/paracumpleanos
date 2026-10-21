import { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import relationshipData from '../../data/relationship_messages.json';

export interface VoteData {
  likes: number;
  dislikes: number;
  userVote: 'like' | 'dislike' | null;
  title: string;
  text?: string;
  url?: string;
}

interface RankedItem {
  id: string;
  title: string;
  text?: string;
  url?: string;
  likes: number;
  dislikes: number;
  score: number;
}

interface VoteContextType {
  getVote: (id: string, defaultTitle?: string) => VoteData;
  vote: (id: string, type: 'like' | 'dislike', info?: { title: string; text?: string; url?: string }) => void;
  getTop10: () => RankedItem[];
}

const STORAGE_KEY = 'paracumpleanos_votes_v1';

// Simple deterministic hash for consistent initial seed counts
function hashString(str: string): number {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = (hash << 5) - hash + str.charCodeAt(i);
    hash |= 0;
  }
  return Math.abs(hash);
}

// Generate base seed votes so the website has vibrant top 10 rankings right away
function generateInitialVotes(): Record<string, VoteData> {
  const votes: Record<string, VoteData> = {};

  // Top featured highlights with high seed votes
  const featuredSeeds: Array<{ id: string; title: string; url: string; likes: number; dislikes: number }> = [
    {
      id: 'mensajes-de-cumpleanos-para-mama-mensaje-1',
      title: 'Mamá: El amor más puro y verdadero',
      url: '/mensajes-de-cumpleanos-para-mama/#mensaje-1',
      likes: 342,
      dislikes: 4
    },
    {
      id: 'mensajes-de-cumpleanos-para-mi-pareja-mensaje-1',
      title: 'Mi pareja: Gracias por caminar a mi lado',
      url: '/mensajes-de-cumpleanos-para-mi-pareja/#mensaje-1',
      likes: 318,
      dislikes: 6
    },
    {
      id: 'frase-emotiva-1',
      title: 'Que este nuevo año te acerque a lo que te hace bien',
      url: '/frases-de-cumpleanos/',
      likes: 295,
      dislikes: 3
    },
    {
      id: 'mensajes-de-cumpleanos-para-papa-mensaje-1',
      title: 'Papá: Gracias por tu ejemplo y fortaleza',
      url: '/mensajes-de-cumpleanos-para-papa/#mensaje-1',
      likes: 284,
      dislikes: 5
    },
    {
      id: 'mensajes-de-cumpleanos-para-una-hija-mensaje-1',
      title: 'Para mi hija: Verte crecer es mi mayor orgullo',
      url: '/mensajes-de-cumpleanos-para-una-hija/#mensaje-1',
      likes: 271,
      dislikes: 2
    },
    {
      id: 'mensajes-de-cumpleanos-para-un-hijo-mensaje-1',
      title: 'Para mi hijo: Confianza, amor y alas para volar',
      url: '/mensajes-de-cumpleanos-para-un-hijo/#mensaje-1',
      likes: 260,
      dislikes: 4
    },
    {
      id: 'mensajes-de-cumpleanos-para-alguien-lejos-mensaje-1',
      title: 'Alguien que está lejos: Un abrazo que cruza la distancia',
      url: '/mensajes-de-cumpleanos-para-alguien-lejos/#mensaje-1',
      likes: 248,
      dislikes: 7
    },
    {
      id: 'mensajes-de-cumpleanos-para-un-hermano-mensaje-1',
      title: 'Para un hermano: Cómplice de toda una vida',
      url: '/mensajes-de-cumpleanos-para-un-hermano/#mensaje-1',
      likes: 235,
      dislikes: 3
    },
    {
      id: 'mensajes-de-cumpleanos-para-un-abuelo-mensaje-1',
      title: 'Para el abuelo: Historias y cariño inolvidable',
      url: '/mensajes-de-cumpleanos-para-un-abuelo/#mensaje-1',
      likes: 228,
      dislikes: 2
    },
    {
      id: 'frase-emotiva-3',
      title: 'Hoy celebro tu vida y la alegría de tenerte cerca',
      url: '/frases-de-cumpleanos/',
      likes: 219,
      dislikes: 3
    },
    {
      id: 'mensajes-de-cumpleanos-para-una-abuela-mensaje-1',
      title: 'Para la abuela: La ternura hecha persona',
      url: '/mensajes-de-cumpleanos-para-una-abuela/#mensaje-1',
      likes: 212,
      dislikes: 1
    },
    {
      id: 'mensajes-de-cumpleanos-para-amigos-1',
      title: 'Para un gran amigo: Por las risas y la lealtad',
      url: '/posts/frases-de-cumpleanos-para-amigos/',
      likes: 204,
      dislikes: 5
    }
  ];

  featuredSeeds.forEach((item) => {
    votes[item.id] = {
      likes: item.likes,
      dislikes: item.dislikes,
      userVote: null,
      title: item.title,
      url: item.url,
    };
  });

  // Seed sample messages from relationshipData
  const rels = relationshipData as Record<string, { name: string; messages: Array<{ id: string; title: string; text: string }> }>;
  Object.entries(rels).forEach(([slug, col]) => {
    col.messages.forEach((msg) => {
      const id = `${slug}-${msg.id}`;
      if (!votes[id]) {
        const seedHash = hashString(id);
        const baseLikes = 25 + (seedHash % 140);
        const baseDislikes = seedHash % 8;
        votes[id] = {
          likes: baseLikes,
          dislikes: baseDislikes,
          userVote: null,
          title: `${col.name}: ${msg.title}`,
          text: msg.text,
          url: `/${slug}/#${msg.id}`,
        };
      }
    });
  });

  return votes;
}

const VoteContext = createContext<VoteContextType>({
  getVote: () => ({ likes: 0, dislikes: 0, userVote: null, title: '' }),
  vote: () => {},
  getTop10: () => [],
});

export function VoteProvider({ children }: { children: ReactNode }) {
  const [votes, setVotes] = useState<Record<string, VoteData>>(() => {
    const initial = generateInitialVotes();
    try {
      const saved = localStorage.getItem(STORAGE_KEY);
      if (saved) {
        const parsed = JSON.parse(saved);
        // Merge user vote preferences into initial
        return { ...initial, ...parsed };
      }
    } catch {
      // Local storage unavailable or failed
    }
    return initial;
  });

  useEffect(() => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(votes));
    } catch {
      // ignore
    }
  }, [votes]);

  const getVote = (id: string, defaultTitle?: string): VoteData => {
    if (votes[id]) {
      return votes[id];
    }
    const seedHash = hashString(id);
    const baseLikes = 15 + (seedHash % 80);
    const baseDislikes = seedHash % 5;
    return {
      likes: baseLikes,
      dislikes: baseDislikes,
      userVote: null,
      title: defaultTitle || id,
    };
  };

  const vote = (
    id: string,
    type: 'like' | 'dislike',
    info?: { title: string; text?: string; url?: string }
  ) => {
    setVotes((prev) => {
      const current = prev[id] || {
        likes: 15 + (hashString(id) % 80),
        dislikes: hashString(id) % 5,
        userVote: null,
        title: info?.title || id,
        text: info?.text,
        url: info?.url,
      };

      let newLikes = current.likes;
      let newDislikes = current.dislikes;
      let newUserVote: 'like' | 'dislike' | null = null;

      if (current.userVote === type) {
        // Toggle off
        if (type === 'like') newLikes = Math.max(0, newLikes - 1);
        if (type === 'dislike') newDislikes = Math.max(0, newDislikes - 1);
        newUserVote = null;
      } else {
        // Switching or new vote
        if (current.userVote === 'like') {
          newLikes = Math.max(0, newLikes - 1);
        } else if (current.userVote === 'dislike') {
          newDislikes = Math.max(0, newDislikes - 1);
        }

        if (type === 'like') {
          newLikes += 1;
          newUserVote = 'like';
        } else {
          newDislikes += 1;
          newUserVote = 'dislike';
        }
      }

      return {
        ...prev,
        [id]: {
          ...current,
          likes: newLikes,
          dislikes: newDislikes,
          userVote: newUserVote,
          title: info?.title || current.title,
          text: info?.text || current.text,
          url: info?.url || current.url,
        },
      };
    });
  };

  const getTop10 = (): RankedItem[] => {
    const list: RankedItem[] = Object.entries(votes).map(([id, data]) => {
      const score = data.likes - data.dislikes;
      return {
        id,
        title: data.title,
        text: data.text,
        url: data.url,
        likes: data.likes,
        dislikes: data.dislikes,
        score,
      };
    });

    // Sort descending by score, then likes
    list.sort((a, b) => {
      if (b.score !== a.score) return b.score - a.score;
      return b.likes - a.likes;
    });

    return list.slice(0, 10);
  };

  return (
    <VoteContext.Provider value={{ getVote, vote, getTop10 }}>
      {children}
    </VoteContext.Provider>
  );
}

export function useVotes() {
  return useContext(VoteContext);
}
