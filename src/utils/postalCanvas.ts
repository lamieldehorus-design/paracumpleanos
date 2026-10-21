import { PostalCardData } from '../types';

export function wrapCanvasText(
  ctx: CanvasRenderingContext2D,
  text: string,
  x: number,
  y: number,
  maxWidth: number,
  lineHeight: number
): void {
  const words = text.split(' ');
  let line = '';
  const lines: string[] = [];

  for (let n = 0; n < words.length; n++) {
    const test = line + words[n] + ' ';
    if (ctx.measureText(test).width > maxWidth && n > 0) {
      lines.push(line.trim());
      line = words[n] + ' ';
    } else {
      line = test;
    }
  }
  lines.push(line.trim());

  const start = y - ((lines.length - 1) * lineHeight) / 2;
  lines.forEach((l, i) => {
    ctx.fillText(l, x, start + i * lineHeight);
  });
}

export function downloadPostalImage(postal: PostalCardData): void {
  const c = document.createElement('canvas');
  c.width = 1200;
  c.height = 800;
  const x = c.getContext('2d');
  if (!x) return;

  const g = x.createLinearGradient(0, 0, 1200, 800);
  g.addColorStop(0, postal.colorA);
  g.addColorStop(1, postal.colorB);
  x.fillStyle = g;
  x.fillRect(0, 0, c.width, c.height);

  for (let i = 0; i < 42; i++) {
    const xx = (i * 173 + 67) % 1200;
    const yy = (i * 97 + 43) % 800;
    x.beginPath();
    x.arc(xx, yy, 4 + (i % 5) * 2, 0, Math.PI * 2);
    x.fillStyle = i % 2 ? postal.accent : '#ffffff';
    x.globalAlpha = 0.18 + (i % 4) * 0.08;
    x.fill();
  }

  x.globalAlpha = 1;
  x.fillStyle = postal.accent;
  x.textAlign = 'center';
  x.font = 'bold 28px Georgia, serif';
  x.fillText('✦  PARA CELEBRAR TU DÍA  ✦', 600, 130);

  x.font = 'bold 68px Georgia, serif';
  wrapCanvasText(x, postal.title, 600, 255, 1000, 82);

  x.font = '32px Georgia, serif';
  wrapCanvasText(x, postal.message, 600, 440, 900, 48);

  x.font = 'bold 22px Arial, sans-serif';
  x.fillText('PARA CUMPLEAÑOS', 600, 700);

  const a = document.createElement('a');
  a.download = `postal-${postal.id}.png`;
  a.href = c.toDataURL('image/png');
  a.click();
}

export async function sharePostal(postal: PostalCardData): Promise<boolean> {
  const text = `${postal.title}\n\n"${postal.message}"\n\n— Para Cumpleaños`;
  if (navigator.share) {
    try {
      await navigator.share({
        title: postal.title,
        text: text,
      });
      return true;
    } catch {
      // User cancelled share or unsupported
    }
  }

  // Fallback to clipboard
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch {
    return false;
  }
}
