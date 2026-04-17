import useGameStore from '../store/gameStore';

export default function Monologue() {
  const text = useGameStore((s) => s.currentMonologue);

  if (!text) return null;

  return (
    <div style={{
      position: 'fixed',
      bottom: 90,
      left: '50%',
      transform: 'translateX(-50%)',
      maxWidth: 600,
      padding: '12px 24px',
      background: 'rgba(0,0,0,0.7)',
      backdropFilter: 'blur(10px)',
      borderRadius: 20,
      fontSize: 15,
      color: 'rgba(255,255,255,0.85)',
      fontStyle: 'italic',
      textAlign: 'center',
      zIndex: 9992,
      animation: 'slideUp 0.5s ease',
      lineHeight: 1.6,
      pointerEvents: 'none',
    }}>
      {text}
    </div>
  );
}
