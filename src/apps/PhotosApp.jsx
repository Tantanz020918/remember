import { useState } from 'react';
import Window from '../components/Window';
import { photos, monologues } from '../data/gameData';
import useGameStore from '../store/gameStore';

export default function PhotosApp() {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const addClue = useGameStore((s) => s.addClue);
  const showMonologue = useGameStore((s) => s.showMonologue);
  const markSeen = useGameStore((s) => s.markSeen);
  const hasSeen = useGameStore((s) => s.hasSeen);

  const handlePhotoClick = (photo) => {
    setSelectedPhoto(photo);
    if (photo.clue && !hasSeen(photo.id)) {
      markSeen(photo.id);
      addClue(photo.clue);
      if (photo.id === 'p4' && !hasSeen('first_youyou')) {
        markSeen('first_youyou');
        showMonologue(monologues.sick_girl);
      } else if (photo.id === 'p5') {
        showMonologue(monologues.orphanage_photo);
      } else if (photo.id === 'p7') {
        showMonologue('2008年？可是我2010年才出生……这个婴儿是谁？');
      }
    }
  };

  return (
    <Window appId="photos" title="照片" icon="🌈">
      {selectedPhoto ? (
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'auto' }}>
          <div style={{ padding: '8px 16px', borderBottom: '1px solid var(--divider)', display: 'flex', alignItems: 'center' }}>
            <button
              onClick={() => setSelectedPhoto(null)}
              style={{
                background: 'rgba(255,255,255,0.08)', border: 'none',
                borderRadius: 6, color: '#fff', padding: '4px 12px',
                fontSize: 13, cursor: 'pointer',
              }}
            >
              ← 返回
            </button>
            <span style={{ marginLeft: 12, fontSize: 14, fontWeight: 600 }}>{selectedPhoto.title}</span>
            <span style={{ marginLeft: 'auto', fontSize: 12, opacity: 0.4 }}>{selectedPhoto.date}</span>
          </div>
          <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24 }}>
            <div style={{
              width: '100%', maxWidth: 500,
              background: selectedPhoto.color || '#333',
              borderRadius: 8,
              padding: 32,
              minHeight: 280,
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              textAlign: 'center',
            }}>
              <p style={{ fontSize: 15, lineHeight: 1.8, color: 'rgba(0,0,0,0.7)' }}>
                {selectedPhoto.desc}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div style={{ flex: 1, overflow: 'auto', padding: 16 }}>
          <div style={{ fontSize: 18, fontWeight: 700, marginBottom: 16 }}>照片</div>
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, 1fr)',
            gap: 8,
          }}>
            {photos.map((p) => (
              <div
                key={p.id}
                onClick={() => handlePhotoClick(p)}
                style={{
                  aspectRatio: '1',
                  background: p.color || '#333',
                  borderRadius: 8,
                  cursor: 'pointer',
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  padding: 12,
                  transition: 'transform 0.15s',
                  overflow: 'hidden',
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.03)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
              >
                <div style={{ fontSize: 28, marginBottom: 8 }}>📷</div>
                <div style={{ fontSize: 12, fontWeight: 600, color: 'rgba(0,0,0,0.6)' }}>
                  {p.title}
                </div>
                <div style={{ fontSize: 10, color: 'rgba(0,0,0,0.4)', marginTop: 2 }}>
                  {p.date}
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </Window>
  );
}
