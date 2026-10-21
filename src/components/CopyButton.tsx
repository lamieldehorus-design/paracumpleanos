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
  copiedLabel = 'Copiado',
  className = 'share-button',
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
      // Fallback
    }
  };

  return (
    <button
      type="button"
      className={className}
      onClick={handleCopy}
      title={copied ? copiedLabel : defaultLabel}
    >
      {copied ? copiedLabel : defaultLabel}
    </button>
  );
}
