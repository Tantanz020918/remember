import { useState, useEffect } from 'react';
import { prologueLines } from '../data/gameData';
import useGameStore from '../store/gameStore';

export default function Prologue() {
  const [visibleLines, setVisibleLines] = useState(0);
  const [fadeOut, setFadeOut] = useState(false);
  const setPhase = useGameStore((s) => s.setPhase);
  const startTimer = useGameStore((s) => s.startTimer);

  useEffect(() => {
    const timers = [];
    prologueLines.forEach((_, i) => {
      timers.push(setTimeout(() => setVisibleLines(i + 1), (i + 1) * 1800));
    });
    timers.push(setTimeout(() => setFadeOut(true), prologueLines.length * 1800 + 2000));
    timers.push(setTimeout(() => {
      setPhase('desktop');
      startTimer();
    }, prologueLines.length * 1800 + 3000));
    return () => timers.forEach(clearTimeout);
  }, [setPhase, startTimer]);

  return (
    <div
      style={{
        position: 'fixed', inset: 0, background: '#000',
        display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center',
        zIndex: 99999,
        opacity: fadeOut ? 0 : 1,
        transition: 'opacity 1s ease',
      }}
    >
      <div style={{ maxWidth: 500, textAlign: 'center' }}>
        {prologueLines.map((line, i) => (
          <p
            key={i}
            style={{
              fontSize: 18,
              lineHeight: 2.2,
              color: '#fff',
              opacity: i < visibleLines ? 1 : 0,
              transform: i < visibleLines ? 'translateY(0)' : 'translateY(10px)',
              transition: 'all 0.8s ease',
            }}
          >
            {line}
          </p>
        ))}
      </div>
    </div>
  );
}
