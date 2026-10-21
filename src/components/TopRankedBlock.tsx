import { useVotes } from '../context/VoteContext';
import { useRouter } from '../router';

export function TopRankedBlock() {
  const { getTop10 } = useVotes();
  const { navigate } = useRouter();
  const topItems = getTop10();

  if (!topItems || topItems.length === 0) return null;

  const handleItemClick = (url?: string) => {
    if (url) {
      navigate(url);
    }
  };

  return (
    <section id="ranking-top-10" className="section top-ranked-section" aria-label="Las 10 mejores frases y mensajes">
      <div className="wrap">
        <div className="top-ranked-card">
          <div className="top-ranked-header">
            <div className="top-ranked-badge">
              <span>🏆 RANKING DE LA COMUNIDAD</span>
            </div>
            <h2>Las 10 mejores frases y mensajes</h2>
            <p>Las dedicatorias y saludos más votados por nuestros lectores:</p>
          </div>

          <ol className="top-ranked-list">
            {topItems.map((item, index) => {
              const rank = index + 1;
              const medal = rank === 1 ? '🥇' : rank === 2 ? '🥈' : rank === 3 ? '🥉' : null;

              return (
                <li
                  key={item.id}
                  className={`top-ranked-item ${item.url ? 'clickable' : ''}`}
                  onClick={() => handleItemClick(item.url)}
                  title={item.url ? 'Ir a esta frase o mensaje' : undefined}
                >
                  <div className="top-ranked-position">
                    {medal ? (
                      <span className="medal-icon">{medal}</span>
                    ) : (
                      <span className="rank-number">{rank}</span>
                    )}
                  </div>
                  <div className="top-ranked-content">
                    <span className="top-ranked-title">{item.title}</span>
                  </div>
                  <div className="top-ranked-votes">
                    <span className="votes-pill">👍 {item.likes}</span>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
