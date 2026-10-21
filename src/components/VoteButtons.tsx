import React from 'react';
import { useVotes } from '../context/VoteContext';

interface VoteButtonsProps {
  itemId: string;
  title: string;
  text?: string;
  url?: string;
  className?: string;
}

export function VoteButtons({ itemId, title, text, url, className = '' }: VoteButtonsProps) {
  const { getVote, vote } = useVotes();
  const voteData = getVote(itemId, title);

  const handleVote = (e: React.MouseEvent, type: 'like' | 'dislike') => {
    e.stopPropagation();
    e.preventDefault();
    vote(itemId, type, { title, text, url });
  };

  return (
    <div className={`vote-group ${className}`} aria-label="Calificar frase o mensaje">
      <button
        type="button"
        className={`vote-button ${voteData.userVote === 'like' ? 'active-like' : ''}`}
        onClick={(e) => handleVote(e, 'like')}
        title="Me gusta"
        aria-label={`Me gusta (${voteData.likes})`}
      >
        <span className="vote-icon">👍</span>
        <span className="vote-count">{voteData.likes}</span>
      </button>

      <button
        type="button"
        className={`vote-button ${voteData.userVote === 'dislike' ? 'active-dislike' : ''}`}
        onClick={(e) => handleVote(e, 'dislike')}
        title="No me gusta"
        aria-label={`No me gusta (${voteData.dislikes})`}
      >
        <span className="vote-icon">👎</span>
        <span className="vote-count">{voteData.dislikes}</span>
      </button>
    </div>
  );
}
