import useGameStore from '../store/gameStore';

export default function EndingChoice() {
  const show = useGameStore((s) => s.showEndingChoice);
  const clues = useGameStore((s) => s.discoveredClues);
  const hasSearchedRitualFailure = useGameStore((s) => s.hasSearchedRitualFailure);
  const setEnding = useGameStore((s) => s.setEnding);
  const setShowEndingChoice = useGameStore((s) => s.setShowEndingChoice);

  if (!show) return null;

  const choices = [
    { id: 'A', label: '拨打报警电话', desc: '把发现的一切告诉警察', available: clues.length >= 5 },
    { id: 'B', label: '假装什么都不知道', desc: '关掉电脑，等爸妈回来', available: true },
    { id: 'C', label: '当面和父母对质', desc: '等他们回来，把一切摊开说', available: clues.length >= 8 },
    { id: 'D', label: '故意让仪式失败', desc: '假装不知道，去仪式现场说出真相', available: hasSearchedRitualFailure },
  ];

  return (
    <div style={{
      position: 'fixed', inset: 0, zIndex: 99999,
      background: 'rgba(0,0,0,0.8)',
      backdropFilter: 'blur(10px)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      padding: 12,
      overflowY: 'auto',
      animation: 'fadeIn 0.5s ease',
    }}>
      <div className="max-h-full overflow-auto" style={{
        maxWidth: 500, width: '100%',
        background: 'rgba(40,40,40,0.95)',
        borderRadius: 16,
        border: '1px solid rgba(255,255,255,0.1)',
        padding: 'clamp(20px, 5vw, 32px)',
        boxShadow: '0 20px 60px rgba(0,0,0,0.5)',
      }}>
        <h2 style={{ fontSize: 20, marginBottom: 8, fontWeight: 600, textAlign: 'center' }}>
          你已经知道了真相。
        </h2>
        <p style={{ fontSize: 14, opacity: 0.6, textAlign: 'center', marginBottom: 24 }}>
          现在，你要怎么做？
        </p>
        <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
          {choices.map((c) => (
            <button
              key={c.id}
              disabled={!c.available}
              onClick={() => {
                setShowEndingChoice(false);
                setEnding(c.id);
              }}
              style={{
                padding: '14px 20px',
                background: c.available ? 'rgba(255,255,255,0.08)' : 'rgba(255,255,255,0.02)',
                border: c.available ? '1px solid rgba(255,255,255,0.15)' : '1px solid rgba(255,255,255,0.05)',
                borderRadius: 10,
                color: c.available ? '#fff' : 'rgba(255,255,255,0.25)',
                textAlign: 'left',
                cursor: c.available ? 'pointer' : 'not-allowed',
                transition: 'all 0.2s',
                fontSize: 14,
              }}
              onMouseEnter={(e) => {
                if (c.available) e.currentTarget.style.background = 'rgba(255,255,255,0.12)';
              }}
              onMouseLeave={(e) => {
                if (c.available) e.currentTarget.style.background = 'rgba(255,255,255,0.08)';
              }}
            >
              <div style={{ fontWeight: 600, marginBottom: 4 }}>{c.label}</div>
              <div style={{ fontSize: 12, opacity: 0.6 }}>
                {c.desc}
                {!c.available && (
                  <span style={{ marginLeft: 8, fontStyle: 'italic' }}>
                    {c.id === 'C' ? '（需要8条以上线索）' : c.id === 'D' ? '（需要搜索过"仪式失败"）' : ''}
                  </span>
                )}
              </div>
            </button>
          ))}
        </div>
        <button
          onClick={() => setShowEndingChoice(false)}
          style={{
            marginTop: 16, width: '100%', padding: '10px',
            background: 'transparent', border: '1px solid rgba(255,255,255,0.1)',
            borderRadius: 8, color: 'rgba(255,255,255,0.4)', fontSize: 13, cursor: 'pointer',
          }}
        >
          还没准备好，继续调查
        </button>
      </div>
    </div>
  );
}
