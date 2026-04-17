import { useState } from 'react';
import Window from '../components/Window';
import { browserHistory, searchDatabase, monologues } from '../data/gameData';
import useGameStore from '../store/gameStore';

export default function SafariApp() {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState(null);
  const [showHistory, setShowHistory] = useState(true);
  const [selectedResult, setSelectedResult] = useState(null);
  const addClue = useGameStore((s) => s.addClue);
  const showMonologue = useGameStore((s) => s.showMonologue);
  const markSeen = useGameStore((s) => s.markSeen);
  const hasSeen = useGameStore((s) => s.hasSeen);
  const setSearchedRitualFailure = useGameStore((s) => s.setSearchedRitualFailure);

  const handleSearch = (term) => {
    const q = (term || query).trim();
    if (!q) return;
    setQuery(q);
    setShowHistory(false);
    setSelectedResult(null);

    // Search through database
    let found = [];
    for (const [key, data] of Object.entries(searchDatabase)) {
      const allTerms = [key, ...(data.aliases || [])];
      if (allTerms.some((t) => q.includes(t) || t.includes(q))) {
        found = [...found, ...data.results];
      }
    }

    if (found.length === 0) {
      setResults([{ title: '无搜索结果', url: '', content: `未找到与"${q}"相关的内容。\n\n请尝试其他关键词。` }]);
    } else {
      setResults(found);
    }

    // Trigger special events
    if (['借命术', '借命', '过命', '替命'].some((t) => q.includes(t))) {
      if (!hasSeen('browser_jiemingshu')) {
        markSeen('browser_jiemingshu');
        showMonologue(monologues.browser_jiemingshu);
      }
    }
    if (['仪式失败', '打断仪式'].some((t) => q.includes(t))) {
      setSearchedRitualFailure();
    }
  };

  const handleResultClick = (result) => {
    setSelectedResult(result);
    if (result.clue && !hasSeen(result.clue.id)) {
      markSeen(result.clue.id);
      addClue(result.clue);
      if (result.clue.id === 'missing_person') {
        showMonologue(monologues.missing_person);
      } else if (result.clue.id === 'bio_mom') {
        showMonologue('周美华……是我的……亲妈妈？她还在找我？');
      }
    }
  };

  return (
    <Window appId="safari" title="Safari" icon="🧭">
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* History sidebar */}
        <div style={{
          width: 200, borderRight: '1px solid var(--divider)',
          background: 'var(--sidebar-bg)', overflow: 'auto',
          flexShrink: 0,
        }}>
          <div style={{ padding: '12px 16px', fontSize: 12, fontWeight: 700, opacity: 0.5 }}>
            历史记录
          </div>
          {browserHistory.map((item, i) => (
            <div
              key={i}
              onClick={() => { setQuery(item); handleSearch(item); }}
              style={{
                padding: '6px 16px',
                fontSize: 12,
                cursor: 'pointer',
                opacity: 0.7,
                borderBottom: '1px solid var(--divider)',
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = 'var(--hover-bg)'}
              onMouseLeave={(e) => e.currentTarget.style.background = 'transparent'}
            >
              🔍 {item}
            </div>
          ))}
        </div>

        {/* Main area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {/* Address bar */}
          <div style={{
            padding: '8px 12px',
            borderBottom: '1px solid var(--divider)',
            display: 'flex', gap: 8,
          }}>
            <input
              type="text"
              value={query}
              onChange={(e) => setQuery(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSearch()}
              placeholder="搜索或输入网址…"
              style={{
                flex: 1,
                padding: '6px 12px',
                background: 'rgba(255,255,255,0.08)',
                border: '1px solid rgba(255,255,255,0.12)',
                borderRadius: 6,
                color: '#fff',
                fontSize: 13,
                outline: 'none',
              }}
            />
            <button
              onClick={() => handleSearch()}
              style={{
                padding: '6px 16px',
                background: 'var(--accent)',
                border: 'none',
                borderRadius: 6,
                color: '#fff',
                fontSize: 13,
                cursor: 'pointer',
              }}
            >
              搜索
            </button>
          </div>

          {/* Content */}
          <div style={{ flex: 1, overflow: 'auto', padding: 16 }}>
            {selectedResult ? (
              <div>
                <button
                  onClick={() => setSelectedResult(null)}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: 'none',
                    borderRadius: 6,
                    color: '#fff',
                    padding: '4px 12px',
                    fontSize: 13,
                    cursor: 'pointer',
                    marginBottom: 16,
                  }}
                >
                  ← 返回搜索结果
                </button>
                <h3 style={{ fontSize: 16, fontWeight: 600, marginBottom: 4 }}>{selectedResult.title}</h3>
                <div style={{ fontSize: 11, color: 'var(--accent)', marginBottom: 16 }}>{selectedResult.url}</div>
                <div style={{
                  fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-wrap',
                  opacity: 0.85,
                }}>
                  {selectedResult.content}
                </div>
              </div>
            ) : results ? (
              <div>
                <div style={{ fontSize: 12, opacity: 0.4, marginBottom: 12 }}>
                  搜索结果：{results.length} 条
                </div>
                {results.map((r, i) => (
                  <div
                    key={i}
                    onClick={() => handleResultClick(r)}
                    style={{
                      padding: 12,
                      marginBottom: 8,
                      background: 'rgba(255,255,255,0.04)',
                      borderRadius: 8,
                      cursor: r.url ? 'pointer' : 'default',
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.08)'}
                    onMouseLeave={(e) => e.currentTarget.style.background = 'rgba(255,255,255,0.04)'}
                  >
                    <div style={{ fontSize: 14, fontWeight: 600, color: 'var(--accent)' }}>{r.title}</div>
                    {r.url && <div style={{ fontSize: 11, opacity: 0.4, marginTop: 2 }}>{r.url}</div>}
                    <div style={{ fontSize: 13, opacity: 0.6, marginTop: 4, lineHeight: 1.4 }}>
                      {r.content.slice(0, 120)}…
                    </div>
                  </div>
                ))}
              </div>
            ) : (
              <div style={{ textAlign: 'center', paddingTop: 80 }}>
                <div style={{ fontSize: 48, marginBottom: 16, opacity: 0.3 }}>🧭</div>
                <div style={{ fontSize: 14, opacity: 0.4 }}>
                  输入关键词搜索，或点击左侧历史记录
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </Window>
  );
}
