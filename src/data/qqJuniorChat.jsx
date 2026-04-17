import { Avatar, ImagePlaceholder, Keyword } from '../components/ui'
import { spriteForUser } from '../assets/imageUrls'

const MESSAGES = [
  { from: 'student', text: '学姐，你的化学笔记可以借给我吗？' },
  { from: 'caiqing', text: <>微信聊，现在不用qq了，我的微信是：<Keyword>CcqQ3927</Keyword></> },
]

export const JUNIOR_CHAT_DATE = '2020/09/15'

export function JuniorChat() {
  return (
    <>
      <div className="text-center text-neutral-400 text-[11px] my-2.5">{JUNIOR_CHAT_DATE}</div>
      {MESSAGES.map((m, i) => m.from === 'student' ? (
        <div key={i} className="flex gap-2.5 my-2.5">
          <Avatar name="学妹" size={36} />
          <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">{m.text}</div>
        </div>
      ) : (
        <div key={i} className="flex gap-2.5 my-2.5 flex-row-reverse">
          <ImagePlaceholder sprite={spriteForUser('雨季')} width={36} height={36} round label={false} />
          <div className="bg-sky-100 px-3 py-2 rounded text-sm">{m.text}</div>
        </div>
      ))}
    </>
  )
}
