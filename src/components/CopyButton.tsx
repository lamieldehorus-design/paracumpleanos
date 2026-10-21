import React, { useState } from 'react';

interface CopyButtonProps {
  textToCopy: string;
  defaultLabel?: string;
  copiedLabel?: string;
  className?: string;
  isUrl?: boolean;
}

export function CopyButton({
  textToCopy,
  defaultLabel = 'Copiar mensaje',
  copiedLabel = '¡Copiado!',
  className = 'share-button copy-button',
  isUrl = false,
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  const handleCopy = async (e: React.MouseEvent) => {
    e.stopPropagation();
    try {
      const content = isUrl ? window.location.href : textToCopy;
      await navigator.clipboard.writeText(content);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback for older webviews
      const textArea = document.createElement('textarea');
      textArea.value = isUrl ? window.location.href : textToCopy;
      textArea.style.position = 'fixed';
      textArea.style.opacity = '0';
      document.body.appendChild(textArea);
      textArea.focus();
      textArea.select();
      try {
        document.execCommand('copy');
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
      } catch {
        // Ignored
      }
      document.body.removeChild(textArea);
    }
  };

  return (
    <button
      type="button"
      className={`${className} ${copied ? 'is-copied' : ''}`}
      onClick={handleCopy}
      title={copied ? copiedLabel : defaultLabel}
      aria-label={copied ? copiedLabel : defaultLabel}
      aria-live="polite"
    >
      {copied ? (
        <svg viewBox="0 0 20 20" width="16" height="16" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
          <rect x="9" y="9" width="13" height="13" rx="2" ry="2" />
          <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
        </svg>
      )}
      <span>{copied ? copiedLabel : defaultLabel}</span>
    </button>
  );
}
