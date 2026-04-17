import { FanquanMessages } from '../../data/qqFanquanMessages'
import { MiniChatView, MINI_CHAT_KEYS } from '../../data/qqMiniChats'
import { JuniorChat } from '../../data/qqJuniorChat'

export function QQChatBody({ selectedChat, qqGroupJoined, isCaiqing }) {
  if (selectedChat === 'fanquan' && qqGroupJoined && !isCaiqing) {
    return <FanquanMessages />
  }
  if (selectedChat === 'junior' && isCaiqing) {
    return <JuniorChat />
  }
  if (selectedChat && MINI_CHAT_KEYS.includes(selectedChat)) {
    return <MiniChatView chatKey={selectedChat} />
  }
  return (
    <div className="text-neutral-400 text-center py-10 text-sm">
      选择左侧会话开始聊天
    </div>
  )
}
