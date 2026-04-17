import useGameStore from '../store/gameStore';

export default function SkyBackground() {
  const elapsed = useGameStore((s) => s.elapsedSeconds);

  // Progress from 0 (afternoon) to 1 (night) over 60 min of game time
  const progress = Math.min(elapsed / 3600, 1);

  // Interpolate sky colors
  const colors = [
    { stop: 0, top: '#1a1a2e', bottom: '#2d2d5e' },      // afternoon - already slightly dark indoors
    { stop: 0.3, top: '#1a1a2e', bottom: '#2d1a3e' },     // late afternoon
    { stop: 0.6, top: '#0d0d1a', bottom: '#1a0d2e' },     // dusk
    { stop: 1, top: '#050510', bottom: '#0a0a1a' },        // night
  ];

  let top, bottom;
  for (let i = 0; i < colors.length - 1; i++) {
    if (progress >= colors[i].stop && progress <= colors[i + 1].stop) {
      const t = (progress - colors[i].stop) / (colors[i + 1].stop - colors[i].stop);
      top = lerpColor(colors[i].top, colors[i + 1].top, t);
      bottom = lerpColor(colors[i].bottom, colors[i + 1].bottom, t);
      break;
    }
  }
  if (!top) { top = colors[colors.length - 1].top; bottom = colors[colors.length - 1].bottom; }

  return (
    <div style={{
      position: 'fixed',
      inset: 0,
      background: `linear-gradient(180deg, ${top} 0%, ${bottom} 100%)`,
      zIndex: 0,
      transition: 'background 2s ease',
    }} />
  );
}

function lerpColor(a, b, t) {
  const pa = parseInt(a.slice(1), 16);
  const pb = parseInt(b.slice(1), 16);
  const r = Math.round(((pa >> 16) & 0xFF) * (1 - t) + ((pb >> 16) & 0xFF) * t);
  const g = Math.round(((pa >> 8) & 0xFF) * (1 - t) + ((pb >> 8) & 0xFF) * t);
  const bl = Math.round((pa & 0xFF) * (1 - t) + (pb & 0xFF) * t);
  return `#${((r << 16) | (g << 8) | bl).toString(16).padStart(6, '0')}`;
}
