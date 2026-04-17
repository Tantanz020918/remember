import { useState, useEffect } from 'react';
import useGameStore from '../store/gameStore';
import { endings } from '../data/gameData';

export default function EndingScreen() {
  const endingId = useGameStore((s) => s.endingId);
  const [visible, setVisible] = useState(false);
  const [scrolled, setScrolled] = useState(0);
  const ending = endings[endingId];

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 500);
    return () => clearTimeout(t);
  }, []);

  if (!ending) return null;

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: '#000',
      display: 'flex', flexDirection: 'column', alignItems: 'center',
      opacity: visible ? 1 : 0,
      transition: 'opacity 1s ease',
      overflow: 'auto',
    }}>
      <div style={{ maxWidth: 580, padding: '80px 24px', textAlign: 'center' }}>
        <h1 style={{
          fontSize: 28, fontWeight: 300, marginBottom: 8,
          color: '#fff', letterSpacing: 2,
        }}>
          {ending.title}
        </h1>
        <p style={{
          fontSize: 14, opacity: 0.4, marginBottom: 48,
          fontStyle: 'italic',
        }}>
          {ending.subtitle}
        </p>
        <div style={{
          fontSize: 15, lineHeight: 2, color: 'rgba(255,255,255,0.8)',
          textAlign: 'left', whiteSpace: 'pre-wrap',
        }}>
          {ending.text}
        </div>
        <div style={{ marginTop: 60, paddingBottom: 40 }}>
          <button
            onClick={() => window.location.reload()}
            style={{
              padding: '12px 32px',
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: 8,
              color: '#fff',
              fontSize: 14,
              cursor: 'pointer',
            }}
          >
            重新开始
          </button>
        </div>
      </div>
    </div>
  );
}
