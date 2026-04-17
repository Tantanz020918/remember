import { useState } from 'react';
import Window from '../components/Window';
import { messages } from '../data/gameData';
import { monologues } from '../data/gameData';
import useGameStore from '../store/gameStore';

export default function MessagesApp() {
  const [selectedChat, setSelectedChat] = useState('mom');
  const addClue = useGameStore((s) => s.addClue);
  const showMonologue = useGameStore((s) => s.showMonologue);
  const markSeen = useGameStore((s) => s.markSeen);
  const hasSeen = useGameStore((s) => s.hasSeen);
  const timedMomMessages = useGameStore((s) => s.timedMomMessages);

  const chats = [
    { id: 'mom', name: '妈妈', avatar: '👩', preview: messages.mom.messages[0].text.slice(0, 20) + '…' },
    { id: 'dad', name: '爸爸（电脑端）', avatar: '👨', preview: messages.dad.messages[messages.dad.messages.length - 1].text.slice(0, 20) + '…' },
  ];

  const currentChat = messages[selectedChat];
  const allMessages = selectedChat === 'mom'
    ? [...currentChat.messages, ...timedMomMessages.map(m => ({ ...m, from: 'them' }))]
    : currentChat.messages;

  const handleChatSelect = (chatId) => {
    setSelectedChat(chatId);
    if (chatId === 'dad' && !hasSeen('dad_chat')) {
      markSeen('dad_chat');
      addClue({ id: 'dad_chat', text: '爸妈的聊天记录：提到"红绳""香烛"和"补偿安安"' });
      showMonologue('补偿？补偿什么？他们在说什么？');
    }
  };

  return (
    <Window appId="messages" title="信息" icon="💬">
      <div style={{ display: 'flex', flex: 1, overflow: 'hidden' }}>
        {/* Sidebar */}
        <div style={{
          width: 220, borderRight: '1px solid var(--divider)',
          background: 'var(--sidebar-bg)', overflow: 'auto',
        }}>
          <div style={{ padding: '12px 16px', fontSize: 18, fontWeight: 700 }}>信息</div>
          {chats.map((c) => (
            <div
              key={c.id}
              onClick={() => handleChatSelect(c.id)}
              style={{
                padding: '10px 16px',
                background: selectedChat === c.id ? 'var(--accent)' : 'transparent',
                borderRadius: 8,
                margin: '0 8px',
                cursor: 'pointer',
                display: 'flex', alignItems: 'center', gap: 10,
              }}
            >
              <span style={{ fontSize: 28 }}>{c.avatar}</span>
              <div>
                <div style={{ fontSize: 13, fontWeight: 600 }}>{c.name}</div>
                <div style={{ fontSize: 11, opacity: 0.5, overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap', maxWidth: 130 }}>
                  {c.preview}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Chat area */}
        <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          <div style={{
            padding: '10px 16px', borderBottom: '1px solid var(--divider)',
            textAlign: 'center', fontSize: 14, fontWeight: 600,
          }}>
            {currentChat.name}
          </div>
          <div style={{ flex: 1, overflow: 'auto', padding: 16, display: 'flex', flexDirection: 'column', gap: 8 }}>
            {allMessages.map((msg, i) => (
              <div key={i} style={{
                alignSelf: msg.from === 'me' ? 'flex-end' : 'flex-start',
                maxWidth: '75%',
              }}>
                {msg.senderName && (
                  <div style={{ fontSize: 11, opacity: 0.4, marginBottom: 2, textAlign: msg.from === 'me' ? 'right' : 'left' }}>
                    {msg.senderName}
                  </div>
                )}
                <div style={{
                  padding: '8px 12px',
                  borderRadius: 16,
                  background: msg.from === 'me' ? '#007AFF' : 'rgba(255,255,255,0.1)',
                  fontSize: 14,
                  lineHeight: 1.5,
                }}>
                  {msg.text}
                </div>
                <div style={{ fontSize: 10, opacity: 0.3, marginTop: 2, textAlign: msg.from === 'me' ? 'right' : 'left' }}>
                  {msg.time}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Window>
  );
}
