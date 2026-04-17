import { useState, useEffect } from 'react';
import useGameStore from '../store/gameStore';

const menuBarStyle = {
  position: 'fixed',
  top: 0,
  left: 0,
  right: 0,
  height: 28,
  background: 'rgba(30, 30, 30, 0.85)',
  backdropFilter: 'blur(20px)',
  WebkitBackdropFilter: 'blur(20px)',
  borderBottom: '1px solid rgba(255,255,255,0.1)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  padding: '0 12px',
  zIndex: 9999,
  fontSize: 13,
  fontWeight: 500,
};

export default function MenuBar() {
  const [time, setTime] = useState(new Date());
  const elapsedSeconds = useGameStore((s) => s.elapsedSeconds);

  useEffect(() => {
    const id = setInterval(() => setTime(new Date()), 1000);
    return () => clearInterval(id);
  }, []);

  const formatTime = (d) => {
    const days = ['周日','周一','周二','周三','周四','周五','周六'];
    const day = days[d.getDay()];
    const h = d.getHours().toString().padStart(2, '0');
    const m = d.getMinutes().toString().padStart(2, '0');
    return `${day} ${h}:${m}`;
  };

  // Game clock: starts at 15:00 (3 PM), each real second = 1 game minute
  const gameHour = Math.floor(15 + elapsedSeconds / 60);
  const gameMin = elapsedSeconds % 60;
  const gameTimeStr = `${String(Math.min(gameHour, 23)).padStart(2, '0')}:${String(gameMin).padStart(2, '0')}`;

  return (
    <div style={menuBarStyle}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <span style={{ fontSize: 16, opacity: 0.9 }}></span>
        <span style={{ fontWeight: 600 }}>Finder</span>
        <span style={{ opacity: 0.7 }}>文件</span>
        <span style={{ opacity: 0.7 }}>编辑</span>
        <span style={{ opacity: 0.7 }}>显示</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 16, opacity: 0.85 }}>
        <span title="游戏内时间">{gameTimeStr}</span>
        <span style={{ fontSize: 14 }}>
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" style={{verticalAlign:'middle',marginRight:2}}>
            <path d="M1.5 8.5c5.5-5 15.5-5 21 0"/>
            <path d="M5 12c3.5-3.5 10.5-3.5 14 0"/>
            <path d="M8.5 15.5c2-2 5.5-2 7 0"/>
            <circle cx="12" cy="19" r="1" fill="currentColor"/>
          </svg>
        </span>
        <span style={{ fontSize: 14 }}>
          <svg width="18" height="12" viewBox="0 0 28 14" fill="currentColor" style={{verticalAlign:'middle'}}>
            <rect x="0" y="1" width="24" height="12" rx="2" stroke="currentColor" strokeWidth="1" fill="none"/>
            <rect x="2" y="3" width="18" height="8" rx="1" fill="currentColor" opacity="0.7"/>
            <rect x="25" y="4.5" width="2" height="5" rx="1" fill="currentColor" opacity="0.5"/>
          </svg>
        </span>
        <span>{formatTime(time)}</span>
      </div>
    </div>
  );
}
