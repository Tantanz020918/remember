import { useState } from 'react';
import Window from '../components/Window';
import { contacts, monologues } from '../data/gameData';
import useGameStore from '../store/gameStore';

export default function ContactsApp() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const addClue = useGameStore((s) => s.addClue);
  const showMonologue = useGameStore((s) => s.showMonologue);
  const markSeen = useGameStore((s) => s.markSeen);
  const hasSeen = useGameStore((s) => s.hasSeen);

  const handleSelect = (idx) => {
    setSelectedIdx(idx);
    const contact = contacts[idx];
    if (contact.clue && !hasSeen(`contact_${contact.name}`)) {
      markSeen(`contact_${contact.name}`);
      addClue(contact.clue);
      if (contact.clue.id === 'orphanage_contact') {
        showMonologue(monologues.orphanage_contact);
      } else if (contact.clue.id === 'youyou_contact' && !hasSeen('first_youyou')) {
        markSeen('first_youyou');
        showMonologue(monologues.first_youyou);
      }
    }
  };

  const selected = contacts[selectedIdx];

  return (
    <Window appId="contacts" title="通讯录" icon="👤">
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* List */}
        <div style={{
          width: 200, borderRight: '1px solid var(--divider)',
          background: 'var(--sidebar-bg)', overflow: 'auto',
        }}>
          <div style={{ padding: '12px 16px', fontSize: 18, fontWeight: 700 }}>通讯录</div>
          {contacts.map((c, i) => (
            <div
              key={i}
              onClick={() => handleSelect(i)}
              style={{
                padding: '8px 16px',
                background: selectedIdx === i ? 'var(--accent)' : 'transparent',
                cursor: 'pointer',
                fontSize: 13,
                borderRadius: 6,
                margin: '0 8px 2px',
              }}
            >
              {c.name}
            </div>
          ))}
        </div>

        {/* Detail */}
        <div style={{ flex: 1, padding: 24, overflow: 'auto' }}>
          <div style={{ textAlign: 'center', marginBottom: 24 }}>
            <div style={{
              width: 80, height: 80, borderRadius: '50%',
              background: 'rgba(255,255,255,0.1)',
              margin: '0 auto 12px',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
              fontSize: 32,
            }}>
              {selected.group === '家人' ? '👤' : '📇'}
            </div>
            <div style={{ fontSize: 20, fontWeight: 600 }}>{selected.fullName}</div>
            {selected.name !== selected.fullName && (
              <div style={{ fontSize: 13, opacity: 0.5 }}>{selected.name}</div>
            )}
          </div>

          <div style={{
            background: 'rgba(255,255,255,0.05)',
            borderRadius: 10,
            overflow: 'hidden',
          }}>
            <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--divider)' }}>
              <div style={{ fontSize: 11, opacity: 0.4 }}>电话</div>
              <div style={{ fontSize: 14, color: 'var(--accent)' }}>{selected.phone}</div>
            </div>
            {selected.note && (
              <div style={{ padding: '12px 16px', borderBottom: '1px solid var(--divider)' }}>
                <div style={{ fontSize: 11, opacity: 0.4 }}>备注</div>
                <div style={{ fontSize: 14 }}>{selected.note}</div>
              </div>
            )}
            <div style={{ padding: '12px 16px' }}>
              <div style={{ fontSize: 11, opacity: 0.4 }}>分组</div>
              <div style={{ fontSize: 14 }}>{selected.group}</div>
            </div>
          </div>
        </div>
      </div>
    </Window>
  );
}
