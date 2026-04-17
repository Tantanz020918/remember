import { useState } from 'react';
import Window from '../components/Window';
import { emails, monologues } from '../data/gameData';
import useGameStore from '../store/gameStore';

export default function MailApp() {
  const [folder, setFolder] = useState('inbox');
  const [selectedEmail, setSelectedEmail] = useState(null);
  const addClue = useGameStore((s) => s.addClue);
  const showMonologue = useGameStore((s) => s.showMonologue);
  const markSeen = useGameStore((s) => s.markSeen);
  const hasSeen = useGameStore((s) => s.hasSeen);

  const currentEmails = folder === 'inbox' ? emails.inbox : emails.archived;

  const handleEmailClick = (email) => {
    setSelectedEmail(email);
    if (email.clue && !hasSeen(email.id)) {
      markSeen(email.id);
      addClue(email.clue);
      if (email.id === 'e3') showMonologue(monologues.mom_email);
      if (email.id === 'e5') showMonologue(monologues.grandma_email);
      if (email.id === 'e7') showMonologue(monologues.adoption_found);
    }
  };

  return (
    <Window appId="mail" title="邮件" icon="📮">
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div style={{
          width: 180, borderRight: '1px solid var(--divider)',
          background: 'var(--sidebar-bg)', padding: '12px 0',
        }}>
          <div style={{ padding: '0 16px 12px', fontSize: 18, fontWeight: 700 }}>邮件</div>
          {[
            { id: 'inbox', name: '收件箱', icon: '📥', count: emails.inbox.length },
            { id: 'archived', name: '已归档', icon: '📦', count: emails.archived.length },
          ].map((f) => (
            <div
              key={f.id}
              onClick={() => { setFolder(f.id); setSelectedEmail(null); }}
              style={{
                padding: '8px 16px',
                background: folder === f.id ? 'var(--accent)' : 'transparent',
                cursor: 'pointer',
                fontSize: 13,
                display: 'flex', alignItems: 'center', gap: 8,
                margin: '0 8px',
                borderRadius: 6,
              }}
            >
              <span>{f.icon}</span>
              <span>{f.name}</span>
              <span style={{ marginLeft: 'auto', fontSize: 11, opacity: 0.5 }}>{f.count}</span>
            </div>
          ))}
        </div>

        {/* Email list */}
        <div style={{
          width: 240, borderRight: '1px solid var(--divider)',
          overflow: 'auto',
        }}>
          {currentEmails.map((email) => (
            <div
              key={email.id}
              onClick={() => handleEmailClick(email)}
              style={{
                padding: '10px 12px',
                borderBottom: '1px solid var(--divider)',
                cursor: 'pointer',
                background: selectedEmail?.id === email.id ? 'rgba(0,122,255,0.15)' : 'transparent',
              }}
            >
              <div style={{ fontSize: 13, fontWeight: 600, marginBottom: 2 }}>{email.from}</div>
              <div style={{ fontSize: 12, opacity: 0.8 }}>{email.subject}</div>
              <div style={{ fontSize: 10, opacity: 0.4, marginTop: 2 }}>{email.date}</div>
            </div>
          ))}
        </div>

        {/* Email content */}
        <div style={{ flex: 1, overflow: 'auto', padding: 20 }}>
          {selectedEmail ? (
            <>
              <h3 style={{ fontSize: 18, fontWeight: 600, marginBottom: 8 }}>{selectedEmail.subject}</h3>
              <div style={{ fontSize: 12, opacity: 0.5, marginBottom: 4 }}>
                发件人：{selectedEmail.from}
              </div>
              <div style={{ fontSize: 12, opacity: 0.4, marginBottom: 16 }}>
                日期：{selectedEmail.date}
              </div>
              <div style={{
                fontSize: 14, lineHeight: 1.8, whiteSpace: 'pre-wrap',
                opacity: 0.85,
              }}>
                {selectedEmail.body}
              </div>
            </>
          ) : (
            <div style={{ textAlign: 'center', paddingTop: 80, opacity: 0.3, fontSize: 14 }}>
              选择一封邮件查看
            </div>
          )}
        </div>
      </div>
    </Window>
  );
}
