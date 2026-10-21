import React, { useState } from 'react';
import { PostalCardData } from '../types';
import { downloadPostalImage, sharePostal } from '../utils/postalCanvas';

interface PostalCardProps {
  postal: PostalCardData;
}

export function PostalCard({ postal }: PostalCardProps) {
  const [copied, setCopied] = useState(false);
  const [shared, setShared] = useState(false);

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(postal.message);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // ignore
    }
  };

  const handleShare = async () => {
    const success = await sharePostal(postal);
    if (success) {
      setShared(true);
      setTimeout(() => setShared(false), 2000);
    }
  };

  return (
    <article
      className="postal-card"
      style={
        {
          '--postal-a': postal.colorA,
          '--postal-b': postal.colorB,
          '--postal-accent': postal.accent,
        } as React.CSSProperties
      }
    >
      <div className="postal-art">
        <span className="postal-spark">✦ ✧ ✦</span>
        <strong>{postal.title}</strong>
        <p>{postal.message}</p>
        <small>PARA CUMPLEAÑOS · {postal.categoryLabel.toUpperCase()}</small>
      </div>
      <div className="postal-card-info">
        <span>{postal.categoryLabel}</span>
        <h3>{postal.title}</h3>
        <p>{postal.message}</p>
        <div className="postal-actions">
          <button
            className="share-button"
            type="button"
            onClick={() => downloadPostalImage(postal)}
          >
            Descargar PNG
          </button>
          <button className="share-button" type="button" onClick={handleCopy}>
            {copied ? 'Copiado' : 'Copiar mensaje'}
          </button>
          <button className="share-button" type="button" onClick={handleShare}>
            {shared ? 'Texto copiado' : 'Compartir'}
          </button>
        </div>
      </div>
    </article>
  );
}
