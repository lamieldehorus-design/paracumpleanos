interface WhatsAppButtonProps {
  textToShare: string;
  label?: string;
  className?: string;
}

export function WhatsAppButton({
  textToShare,
  label = 'WhatsApp',
  className = 'whatsapp-button',
}: WhatsAppButtonProps) {
  const shareUrl = `https://api.whatsapp.com/send?text=${encodeURIComponent(textToShare)}`;

  return (
    <a
      href={shareUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={className}
      aria-label={`Compartir por WhatsApp: ${textToShare.slice(0, 40)}...`}
      title="Compartir por WhatsApp"
      onClick={(e) => e.stopPropagation()}
    >
      <svg
        className="whatsapp-icon"
        viewBox="0 0 24 24"
        width="17"
        height="17"
        fill="currentColor"
        aria-hidden="true"
      >
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.93.55 3.73 1.5 5.27L2 22l4.98-1.59c1.47.85 3.19 1.34 5.06 1.34 5.46 0 9.91-4.45 9.91-9.91 0-5.46-4.45-9.91-9.91-9.91zm5.82 14.07c-.24.68-1.4 1.25-1.92 1.3-.5.06-1.12.1-3.23-.78-2.69-1.12-4.4-3.87-4.53-4.05-.14-.17-1.07-1.43-1.07-2.73 0-1.3.68-1.94.92-2.2.24-.26.53-.33.7-.33.18 0 .36 0 .52.01.17.01.39-.06.61.47.24.57.81 1.98.88 2.12.07.15.12.32.02.52-.1.2-.15.32-.3.49-.15.17-.31.38-.45.51-.15.15-.3.32-.13.62.17.3.77 1.27 1.66 2.06 1.15 1.02 2.11 1.34 2.41 1.49.3.15.48.13.66-.08.18-.21.78-.91.99-1.22.21-.31.42-.26.7-.15.28.1.1.78 1.98.91 2.12.13.14.22.21.25.26.04.06.04.34-.2.98z" />
      </svg>
      <span>{label}</span>
    </a>
  );
}
