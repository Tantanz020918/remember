import { useEffect, useState } from 'react';
import useGameStore from '../store/gameStore';

function NotificationItem({ notif, onDismiss, onClick }) {
  const [exiting, setExiting] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => {
      setExiting(true);
      setTimeout(() => onDismiss(notif.id), 400);
    }, 5000);
    return () => clearTimeout(t);
  }, [notif.id, onDismiss]);

  return (
    <div
      onClick={() => {
        if (notif.app) {
          onClick(notif.app);
        }
        onDismiss(notif.id);
      }}
      style={{
        background: 'rgba(50, 50, 50, 0.92)',
        backdropFilter: 'blur(20px)',
        WebkitBackdropFilter: 'blur(20px)',
        border: '1px solid rgba(255,255,255,0.15)',
        borderRadius: 12,
        padding: '10px 14px',
        width: 320,
        cursor: 'pointer',
        animation: exiting ? 'slideOutRight 0.4s ease forwards' : 'slideInRight 0.3s ease',
        boxShadow: '0 4px 20px rgba(0,0,0,0.4)',
        marginBottom: 8,
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 4 }}>
        <span style={{ fontSize: 16 }}>💬</span>
        <span style={{ fontSize: 12, fontWeight: 600, opacity: 0.9 }}>{notif.title}</span>
        <span style={{ fontSize: 11, opacity: 0.4, marginLeft: 'auto' }}>现在</span>
      </div>
      <div style={{ fontSize: 13, opacity: 0.8, lineHeight: 1.4, paddingLeft: 24 }}>
        {notif.text}
      </div>
    </div>
  );
}

export default function NotificationCenter() {
  const notifications = useGameStore((s) => s.notifications);
  const dismissNotification = useGameStore((s) => s.dismissNotification);
  const openWindow = useGameStore((s) => s.openWindow);

  // Only show last 3 notifications
  const visible = notifications.slice(-3);

  return (
    <div style={{
      position: 'fixed',
      top: 36,
      right: 12,
      zIndex: 99998,
      display: 'flex',
      flexDirection: 'column',
    }}>
      {visible.map((n) => (
        <NotificationItem
          key={n.id}
          notif={n}
          onDismiss={dismissNotification}
          onClick={openWindow}
        />
      ))}
    </div>
  );
}
