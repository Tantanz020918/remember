import useGameStore from '../store/gameStore';
import { useIsMobile } from '../hooks/useIsMobile';

export default function CluePanel() {
  const clues = useGameStore((s) => s.discoveredClues);
  const open = useGameStore((s) => s.cluePanelOpen);
  const toggle = useGameStore((s) => s.toggleCluePanel);
  const setShowEndingChoice = useGameStore((s) => s.setShowEndingChoice);
  const isMobile = useIsMobile();

  const buttonBottom = isMobile
    ? 'calc(72px + env(safe-area-inset-bottom, 0px))'
    : 80;
  const buttonLeft = isMobile ? 12 : 16;

  return (
    <>
      {/* Toggle button */}
      <div
        onClick={toggle}
        style={{
          position: 'fixed',
          bottom: buttonBottom,
          left: buttonLeft,
          width: isMobile ? 44 : 48,
          height: isMobile ? 44 : 48,
          borderRadius: '50%',
          background: clues.length > 0 ? 'rgba(0,122,255,0.8)' : 'rgba(60,60,60,0.8)',
          backdropFilter: 'blur(10px)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          zIndex: 9991,
          boxShadow: '0 4px 16px rgba(0,0,0,0.3)',
          border: '1px solid rgba(255,255,255,0.15)',
          fontSize: isMobile ? 18 : 20,
          transition: 'all 0.2s',
          color: '#fff',
        }}
        title={`线索板 (${clues.length})`}
      >
        🔍
        {clues.length > 0 && (
          <span style={{
            position: 'absolute', top: -4, right: -4,
            background: '#FF3B30', borderRadius: 10,
            fontSize: 11, fontWeight: 700,
            minWidth: 18, height: 18,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            padding: '0 4px',
            color: '#fff',
          }}>
            {clues.length}
          </span>
        )}
      </div>

      {/* Panel */}
      {open && (
        isMobile ? (
          <>
            <div
              onClick={toggle}
              style={{
                position: 'fixed',
                inset: 0,
                background: 'rgba(0,0,0,0.4)',
                zIndex: 9990,
              }}
            />
            <div style={{
              position: 'fixed',
              left: 0,
              right: 0,
              bottom: 0,
              maxHeight: '75vh',
              paddingBottom: 'env(safe-area-inset-bottom, 0px)',
              background: 'rgba(30,30,30,0.96)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderTop: '1px solid rgba(255,255,255,0.12)',
              borderTopLeftRadius: 16,
              borderTopRightRadius: 16,
              zIndex: 9991,
              boxShadow: '0 -8px 32px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              color: '#fff',
            }}>
              <div style={{
                padding: '12px 16px',
                borderBottom: '1px solid rgba(255,255,255,0.08)',
                fontWeight: 600,
                fontSize: 14,
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
                <span>线索板</span>
                <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, opacity: 0.5 }}>{clues.length} 条线索</span>
                  <span onClick={toggle} style={{ fontSize: 20, opacity: 0.7, cursor: 'pointer', lineHeight: 1 }}>×</span>
                </div>
              </div>
              <div style={{ flex: 1, overflow: 'auto', padding: 8 }}>
                {clues.length === 0 ? (
                  <div style={{ padding: 20, textAlign: 'center', opacity: 0.4, fontSize: 13 }}>
                    还没有发现线索……<br />探索各个应用，寻找真相。
                  </div>
                ) : (
                  clues.map((c, i) => (
                    <div key={c.id} style={{
                      padding: '8px 12px',
                      marginBottom: 4,
                      background: 'rgba(255,255,255,0.05)',
                      borderRadius: 8,
                      fontSize: 13,
                      lineHeight: 1.5,
                      borderLeft: '3px solid var(--accent)',
                    }}>
                      <span style={{ opacity: 0.4, marginRight: 6 }}>#{i + 1}</span>
                      {c.text}
                    </div>
                  ))
                )}
              </div>
              {clues.length >= 5 && (
                <div style={{
                  padding: '10px 16px',
                  borderTop: '1px solid rgba(255,255,255,0.08)',
                }}>
                  <button
                    onClick={() => setShowEndingChoice(true)}
                    style={{
                      width: '100%',
                      padding: '10px 16px',
                      background: 'var(--accent)',
                      border: 'none',
                      borderRadius: 8,
                      color: '#fff',
                      fontSize: 14,
                      fontWeight: 600,
                      cursor: 'pointer',
                    }}
                  >
                    做出选择……
                  </button>
                </div>
              )}
            </div>
          </>
        ) : (
          <div style={{
            position: 'fixed',
            bottom: 80,
            left: 72,
            width: 340,
            maxHeight: 420,
            background: 'rgba(30,30,30,0.92)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.12)',
            borderRadius: 12,
            zIndex: 9991,
            boxShadow: '0 8px 32px rgba(0,0,0,0.5)',
            display: 'flex',
            flexDirection: 'column',
            animation: 'slideUp 0.2s ease',
            color: '#fff',
          }}>
            <div style={{
              padding: '12px 16px',
              borderBottom: '1px solid rgba(255,255,255,0.08)',
              fontWeight: 600,
              fontSize: 14,
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
              <span>线索板</span>
              <span style={{ fontSize: 12, opacity: 0.5 }}>{clues.length} 条线索</span>
            </div>
            <div style={{ flex: 1, overflow: 'auto', padding: 8 }}>
              {clues.length === 0 ? (
                <div style={{ padding: 20, textAlign: 'center', opacity: 0.4, fontSize: 13 }}>
                  还没有发现线索……<br />探索各个应用，寻找真相。
                </div>
              ) : (
                clues.map((c, i) => (
                  <div key={c.id} style={{
                    padding: '8px 12px',
                    marginBottom: 4,
                    background: 'rgba(255,255,255,0.05)',
                    borderRadius: 8,
                    fontSize: 13,
                    lineHeight: 1.5,
                    borderLeft: '3px solid var(--accent)',
                  }}>
                    <span style={{ opacity: 0.4, marginRight: 6 }}>#{i + 1}</span>
                    {c.text}
                  </div>
                ))
              )}
            </div>
            {clues.length >= 5 && (
              <div style={{
                padding: '10px 16px',
                borderTop: '1px solid rgba(255,255,255,0.08)',
              }}>
                <button
                  onClick={() => setShowEndingChoice(true)}
                  style={{
                    width: '100%',
                    padding: '8px 16px',
                    background: 'var(--accent)',
                    border: 'none',
                    borderRadius: 8,
                    color: '#fff',
                    fontSize: 13,
                    fontWeight: 600,
                    cursor: 'pointer',
                  }}
                >
                  做出选择……
                </button>
              </div>
            )}
          </div>
        )
      )}
    </>
  );
}
