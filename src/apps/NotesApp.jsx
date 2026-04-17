import { useState } from 'react';
import Window from '../components/Window';
import { notes, monologues } from '../data/gameData';
import useGameStore from '../store/gameStore';

export default function NotesApp() {
  const [selectedId, setSelectedId] = useState('shopping');
  const [passwordInput, setPasswordInput] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const unlockedNotes = useGameStore((s) => s.unlockedNotes);
  const unlockNote = useGameStore((s) => s.unlockNote);
  const addClue = useGameStore((s) => s.addClue);
  const showMonologue = useGameStore((s) => s.showMonologue);
  const markSeen = useGameStore((s) => s.markSeen);
  const hasSeen = useGameStore((s) => s.hasSeen);
  const passwordAttempts = useGameStore((s) => s.passwordAttempts);
  const incrementPasswordAttempts = useGameStore((s) => s.incrementPasswordAttempts);

  const selectedNote = notes.find((n) => n.id === selectedId);
  const isLocked = selectedNote?.locked && !unlockedNotes.includes(selectedId);

  const handleNoteSelect = (note) => {
    setSelectedId(note.id);
    setPasswordInput('');
    setPasswordError('');
    if (!note.locked && note.clue && !hasSeen(note.id)) {
      markSeen(note.id);
      addClue(note.clue);
      if (note.id === 'shopping') {
        showMonologue(monologues.shopping_list);
      }
    }
  };

  const handlePasswordSubmit = () => {
    if (passwordInput === selectedNote.password) {
      unlockNote(selectedId);
      setPasswordError('');
      if (selectedNote.clue && !hasSeen(selectedId)) {
        markSeen(selectedId);
        addClue(selectedNote.clue);
        showMonologue(monologues.encrypted_note);
      }
    } else {
      incrementPasswordAttempts();
      if (passwordAttempts >= 2) {
        setPasswordError('密码错误。提示：看看日历？');
      } else {
        setPasswordError('密码错误');
      }
    }
    setPasswordInput('');
  };

  return (
    <Window appId="notes" title="备忘录" icon="📝">
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div style={{
          width: 220, borderRight: '1px solid var(--divider)',
          background: 'var(--sidebar-bg)', overflow: 'auto',
        }}>
          <div style={{ padding: '12px 16px', fontSize: 18, fontWeight: 700 }}>备忘录</div>
          {notes.map((note) => (
            <div
              key={note.id}
              onClick={() => handleNoteSelect(note)}
              style={{
                padding: '10px 16px',
                background: selectedId === note.id ? 'var(--accent)' : 'transparent',
                borderRadius: 8,
                margin: '0 8px 2px',
                cursor: 'pointer',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, display: 'flex', alignItems: 'center', gap: 6 }}>
                {note.locked && !unlockedNotes.includes(note.id) && <span>🔒</span>}
                {note.title}
              </div>
              <div style={{ fontSize: 11, opacity: 0.4, marginTop: 2 }}>
                {note.locked && !unlockedNotes.includes(note.id)
                  ? '需要密码'
                  : note.content.slice(0, 30) + '…'}
              </div>
            </div>
          ))}
        </div>

        {/* Content */}
        <div style={{ flex: 1, padding: 20, overflow: 'auto' }}>
          <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 16 }}>
            {selectedNote?.title}
          </h3>
          {isLocked ? (
            <div style={{ textAlign: 'center', paddingTop: 60 }}>
              <div style={{ fontSize: 40, marginBottom: 16 }}>🔒</div>
              <p style={{ fontSize: 14, opacity: 0.6, marginBottom: 8 }}>
                这条笔记已加密
              </p>
              <p style={{ fontSize: 12, opacity: 0.4, marginBottom: 20 }}>
                提示语："{selectedNote.hint}"
              </p>
              <div style={{ display: 'flex', justifyContent: 'center', gap: 8 }}>
                <input
                  type="password"
                  value={passwordInput}
                  onChange={(e) => setPasswordInput(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && handlePasswordSubmit()}
                  placeholder="输入密码"
                  style={{
                    padding: '8px 12px',
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.15)',
                    borderRadius: 6,
                    color: '#fff',
                    fontSize: 14,
                    outline: 'none',
                    width: 160,
                  }}
                />
                <button
                  onClick={handlePasswordSubmit}
                  style={{
                    padding: '8px 16px',
                    background: 'var(--accent)',
                    border: 'none',
                    borderRadius: 6,
                    color: '#fff',
                    fontSize: 14,
                    cursor: 'pointer',
                  }}
                >
                  解锁
                </button>
              </div>
              {passwordError && (
                <p style={{ color: '#FF3B30', fontSize: 12, marginTop: 8 }}>{passwordError}</p>
              )}
            </div>
          ) : (
            <div style={{
              fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-wrap',
              opacity: 0.85,
            }}>
              {selectedNote?.content}
            </div>
          )}
        </div>
      </div>
    </Window>
  );
}
