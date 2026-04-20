import { useState } from 'react'
import { useStore } from '../../store'
import { ImagePlaceholder, Toast, useToast } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { ChatFrame } from './ChatFrame'
import { Moments } from './Moments'
import { TongxueluModal } from './TongxueluModal'
import { WECHAT_CHAT_LIST, CAIQING_CHAT, WechatChat } from '../../data/wechatChats'

const RAIL_ICONS = [
  { key: 'chats', icon: '💬' },
  { key: 'moments', icon: '🌐' },
  { key: 'add', icon: '➕' },
]

function AddFriendView({ onAdded }) {
  const [input, setInput] = useState('')
  const [matched, setMatched] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onSearch = () => {
    const q = input.trim()
    if (q === 'hucaiqing0826') {
      setMatched(true)
      setErrorMsg('')
    } else {
      setMatched(false)
      setErrorMsg('没有找到该用户。')
    }
  }

  return (
    <div className="flex-1 bg-white p-6 overflow-y-auto">
      <h3 className="font-bold mb-3 text-[15px]">添加朋友</h3>
      <div className="flex gap-2">
        <input
          className="flex-1 px-3 py-2 border border-neutral-300 rounded text-sm outline-none focus:border-[#07c160]"
          placeholder="微信号"
          value={input}
          onChange={(e) => { setInput(e.target.value); setErrorMsg('') }}
          onKeyDown={(e) => e.key === 'Enter' && onSearch()}
        />
        <button
          onClick={onSearch}
          className="px-4 py-2 bg-[#07c160] text-white border-none rounded cursor-pointer text-sm"
        >
          搜索
        </button>
      </div>
      {errorMsg && <div className="mt-3 text-red-500 text-sm">{errorMsg}</div>}

      {matched && (
        <div className="mt-4 p-4 bg-neutral-50 border border-neutral-200 rounded-lg flex gap-3 items-center">
          <ImagePlaceholder
            sprite={spriteForUser('采晴')}
            width={48}
            height={48}
            label={false}
            style={{ borderRadius: 6 }}
          />
          <div className="flex-1">
            <div className="font-bold text-sm">采晴</div>
            <div className="text-neutral-400 text-xs">微信号：hucaiqing0826</div>
          </div>
          <button
            onClick={onAdded}
            className="px-4 py-1.5 bg-[#07c160] text-white border-none rounded text-sm cursor-pointer"
          >
            添加
          </button>
        </div>
      )}
    </div>
  )
}

export function Wechat() {
  const { caiqingWechatAdded, setFlag } = useStore()
  const [view, setView] = useState('chats')
  const [chatKey, setChatKey] = useState(/** @type {string|null} */ ('qing'))
  const [showBigImg, setShowBigImg] = useState(false)
  const toast = useToast()

  const chatList = caiqingWechatAdded ? [CAIQING_CHAT, ...WECHAT_CHAT_LIST] : WECHAT_CHAT_LIST
  const currentChat = chatList.find((c) => c.key === chatKey)

  const onAddCaiqing = () => {
    setFlag('caiqingWechatAdded', true)
    toast.show('已添加采晴为好友')
    setView('chats')
    setChatKey('caiqing')
  }

  return (
    <div className="flex h-full text-[13px] bg-neutral-100">
      {/* Left icon rail */}
      <div className="w-[60px] bg-[#2e2e2e] flex flex-col items-center py-3.5 gap-1.5">
        <div className="mb-2">
          <ImagePlaceholder sprite={spriteForUser('姚如月')} width={36} height={36} label={false} style={{ borderRadius: 6 }} />
        </div>
        {RAIL_ICONS.map((item) => (
          <div
            key={item.key}
            onClick={() => setView(item.key)}
            className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer text-xl ${
              view === item.key
                ? 'bg-white/10 text-[#07c160]'
                : 'text-neutral-400 hover:bg-white/5'
            }`}
          >
            {item.icon}
          </div>
        ))}
        <div className="flex-1" />
        <div className="w-10 h-10 flex items-center justify-center text-neutral-400">⚙</div>
      </div>

      {/* Conversation list (chats view) */}
      {view === 'chats' && (
        <div className="w-[280px] bg-neutral-200/80 border-r border-neutral-300 flex flex-col">
          <div className="flex gap-1.5 px-2.5 py-2.5 border-b border-neutral-300">
            <input
              placeholder="搜索"
              className="flex-1 px-2.5 py-1 border border-neutral-300 bg-white rounded text-xs outline-none"
            />
            <button
              onClick={() => setView('add')}
              className="w-6 h-6 bg-white border border-neutral-300 rounded cursor-pointer text-sm"
              title="添加朋友"
            >
              ＋
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {chatList.map((c) => (
              <div
                key={c.key}
                onClick={() => setChatKey(c.key)}
                className={`flex gap-2.5 px-3 py-2.5 cursor-pointer border-b border-neutral-300/60 ${
                  chatKey === c.key ? 'bg-neutral-300' : 'hover:bg-neutral-300/60'
                }`}
              >
                <ImagePlaceholder
                  sprite={spriteForUser(c.name)}
                  width={44}
                  height={44}
                  label={false}
                  style={{ borderRadius: 6 }}
                />
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[13px]">{c.name}</span>
                    <span className="text-neutral-400 text-[11px]">{c.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-neutral-500 text-[11px] truncate max-w-[180px]">
                      {c.preview}
                    </span>
                    {c.unread > 0 && (
                      <span className="bg-red-500 text-white text-[10px] rounded-lg px-1.5 min-w-4 text-center">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col bg-neutral-100 min-w-0 min-h-0 overflow-hidden">
        {view === 'chats' && currentChat && (
          <ChatFrame name={currentChat.name}>
            <WechatChat chatKey={chatKey} ctx={{ onOpenTongxuelu: () => setShowBigImg(true) }} />
          </ChatFrame>
        )}

        {view === 'moments' && <Moments />}

        {view === 'add' && <AddFriendView onAdded={onAddCaiqing} />}
      </div>

      {showBigImg && <TongxueluModal onClose={() => setShowBigImg(false)} />}
      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
