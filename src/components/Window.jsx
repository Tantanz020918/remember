import { useRef, useCallback, useEffect } from 'react';
import useGameStore from '../store/gameStore';

const titleBarStyle = {
  height: 38,
  background: 'rgba(50, 50, 50, 0.95)',
  borderBottom: '1px solid rgba(255,255,255,0.08)',
  display: 'flex',
  alignItems: 'center',
  padding: '0 12px',
  borderRadius: '10px 10px 0 0',
  cursor: 'grab',
  flexShrink: 0,
};

const trafficBtnStyle = (color) => ({
  width: 12,
  height: 12,
  borderRadius: '50%',
  background: color,
  marginRight: 8,
  cursor: 'pointer',
  flexShrink: 0,
  border: 'none',
  padding: 0,
});

export default function Window({ appId, title, icon, children, style = {} }) {
  const windowData = useGameStore((s) => s.openWindows.find((w) => w.appId === appId));
  const closeWindow = useGameStore((s) => s.closeWindow);
  const bringToFront = useGameStore((s) => s.bringToFront);
  const updateWindowPos = useGameStore((s) => s.updateWindowPos);
  const dragRef = useRef(null);
  const offsetRef = useRef({ x: 0, y: 0 });

  const handleMouseDown = useCallback((e) => {
    if (e.target.tagName === 'BUTTON') return;
    bringToFront(appId);
    offsetRef.current = {
      x: e.clientX - (windowData?.x || 0),
      y: e.clientY - (windowData?.y || 0),
    };
    const onMove = (ev) => {
      const nx = ev.clientX - offsetRef.current.x;
      const ny = Math.max(28, ev.clientY - offsetRef.current.y);
      updateWindowPos(appId, nx, ny);
    };
    const onUp = () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseup', onUp);
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseup', onUp);
  }, [appId, windowData?.x, windowData?.y, bringToFront, updateWindowPos]);

  if (!windowData) return null;

  return (
    <div
      ref={dragRef}
      style={{
        position: 'fixed',
        left: windowData.x,
        top: windowData.y,
        width: windowData.width,
        height: windowData.height,
        zIndex: windowData.zIndex,
        borderRadius: 10,
        overflow: 'hidden',
        background: 'rgba(30, 30, 30, 0.88)',
        backdropFilter: 'blur(40px)',
        WebkitBackdropFilter: 'blur(40px)',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 8px 40px rgba(0,0,0,0.5), 0 0 0 0.5px rgba(255,255,255,0.1)',
        display: 'flex',
        flexDirection: 'column',
        animation: 'fadeIn 0.2s ease',
        ...style,
      }}
      onMouseDown={() => bringToFront(appId)}
    >
      <div style={titleBarStyle} onMouseDown={handleMouseDown}>
        <button
          style={trafficBtnStyle('#FF5F57')}
          onClick={(e) => { e.stopPropagation(); closeWindow(appId); }}
          title="关闭"
        />
        <button style={trafficBtnStyle('#FFBD2E')} title="最小化" />
        <button style={trafficBtnStyle('#28CA42')} title="最大化" />
        <span style={{ marginLeft: 12, fontSize: 13, opacity: 0.8, flex: 1, textAlign: 'center', pointerEvents: 'none' }}>
          {icon && <span style={{ marginRight: 6 }}>{icon}</span>}
          {title}
        </span>
      </div>
      <div style={{ flex: 1, overflow: 'hidden', display: 'flex', flexDirection: 'column' }}>
        {children}
      </div>
    </div>
  );
}
