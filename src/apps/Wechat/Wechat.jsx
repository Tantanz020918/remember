import { useEffect, useState } from 'react'
import { useStore } from '../../store'
import { ImagePlaceholder, Toast, useToast } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { useIsMobile } from '../../hooks/useIsMobile'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { PageId } from '../../pages/pageIds'
import { ChatFrame } from './ChatFrame'
import { Moments } from './Moments'
import { TongxueluModal } from './TongxueluModal'
import { WECHAT_CHAT_LIST, CAIQING_CHAT, WechatChat } from '../../data/wechatChats'

// Mapping rail views → page routes so the top-right history tracks the switch.
const VIEW_TO_PAGE = {
  chats: PageId.WECHAT,
  moments: PageId.WECHAT_MOMENTS,
}

const RAIL_ICONS = [
  { key: 'chats', icon: '💬', label: '消息' },
  { key: 'moments', icon: '🌐', label: '朋友圈' },
  { key: 'add', icon: '➕', label: '添加' },
]

function AddFriendView({ onAdded }) {
  const [input, setInput] = useState('')
  const [matched, setMatched] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onSearch = () => {
    const q = input.trim()
    if (q === 'hcq12831682861') {
      setMatched(true)
      setErrorMsg('')
    } else {
      setMatched(false)
      setErrorMsg('没有找到该用户。')
    }
  }

  return (
    <div className="flex-1 bg-white p-4 md:p-6 overflow-y-auto">
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
          <div className="flex-1 min-w-0">
            <div className="font-bold text-sm">采晴</div>
            <div className="text-neutral-400 text-xs truncate">微信号：hcq12831682861</div>
          </div>
          <button
            onClick={onAdded}
            className="px-4 py-1.5 bg-[#07c160] text-white border-none rounded text-sm cursor-pointer shrink-0"
          >
            添加
          </button>
        </div>
      )}
    </div>
  )
}

function ChatListPanel({ chatList, chatKey, onSelect, onAddClick }) {
  return (
    <>
      <div className="flex gap-1.5 px-2.5 py-2.5 border-b border-neutral-300 shrink-0">
        <input
          disabled
          placeholder="搜索"
          className="flex-1 px-2.5 py-1 border border-neutral-300 bg-white rounded text-xs outline-none"
        />
        <button
          onClick={onAddClick}
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
            onClick={() => onSelect(c.key)}
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
                <span className="font-semibold text-[13px] truncate">{c.name}</span>
                <span className="text-neutral-400 text-[11px] shrink-0 ml-2">{c.time}</span>
              </div>
              <div className="flex justify-between items-center mt-1 gap-2">
                <span className="text-neutral-500 text-[11px] truncate flex-1 min-w-0">
                  {c.preview}
                </span>
                {c.unread > 0 && (
                  <span className="bg-red-500 text-white text-[10px] rounded-lg px-1.5 min-w-4 text-center shrink-0">
                    {c.unread}
                  </span>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export function Wechat({ initialView = 'chats' }) {
  const { caiqingWechatAdded, setFlag } = useStore()
  const [view, setView] = useState(initialView)
  const [chatKey, setChatKey] = useState(/** @type {string|null} */ (null))
  const [showBigImg, setShowBigImg] = useState(false)
  const toast = useToast()
  const isMobile = useIsMobile()
  const gameNavigate = useGameNavigate()

  // Click a rail icon: switch view and keep URL in sync so the visited-pages
  // dropdown tracks whichever panel is currently shown.
  const switchView = (key) => {
    setView(key)
    const pageId = VIEW_TO_PAGE[key]
    if (pageId) gameNavigate(pageId)
  }

  useEffect(() => {
    setView(initialView)
    if (initialView !== 'chats') setChatKey(null)
  }, [initialView])

  const chatList = caiqingWechatAdded ? [CAIQING_CHAT, ...WECHAT_CHAT_LIST] : WECHAT_CHAT_LIST

  useEffect(() => {
    if (!isMobile && chatKey === null && chatList[0]) {
      setChatKey(chatList[0].key)
    }
  }, [chatList, chatKey, isMobile])

  const currentChat = chatList.find((c) => c.key === chatKey)

  const onAddCaiqing = () => {
    setFlag('caiqingWechatAdded', true)
    toast.show('已添加采晴为好友')
    setView('chats')
    setChatKey('caiqing')
  }

  if (isMobile) {
    const showChatBody = view === 'chats' && chatKey && currentChat

    return (
      <div className="flex flex-col h-full text-[13px] bg-neutral-100">
        {/* Content area */}
        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {view === 'chats' && !showChatBody && (
            <div className="flex-1 flex flex-col bg-neutral-200/80 min-h-0">
              <ChatListPanel
                chatList={chatList}
                chatKey={chatKey}
                onSelect={(k) => setChatKey(k)}
                onAddClick={() => setView('add')}
              />
            </div>
          )}
          {showChatBody && (
            <div className="flex-1 flex flex-col bg-neutral-100 min-h-0">
              <div className="flex items-center gap-2 px-3 py-2.5 border-b border-neutral-200 bg-neutral-100 shrink-0">
                <button
                  onClick={() => setChatKey(null)}
                  className="text-neutral-600 text-base bg-transparent border-none cursor-pointer px-1"
                >
                  ‹
                </button>
                <div className="flex-1 font-bold text-sm truncate">{currentChat.name}</div>
                <div className="text-neutral-500 flex gap-3 shrink-0">
                  <span>🔍</span>
                  <span>⋯</span>
                </div>
              </div>
              <div className="flex-1 overflow-y-auto px-3 py-3 min-h-0">
                <WechatChat chatKey={chatKey} ctx={{ onOpenTongxuelu: () => setShowBigImg(true) }} />
              </div>
              <div className="border-t border-neutral-200 bg-white px-3 pt-1 pb-2 shrink-0">
                <div className="flex gap-3 py-1 text-neutral-600 text-base overflow-x-auto whitespace-nowrap">
                  <span>😀</span><span>🖼</span><span>✂</span><span>📁</span><span>🎤</span><span>📹</span>
                </div>
                <div className="flex gap-2 items-end">
                  <textarea
                    disabled
                    className="chat-input flex-1 border-none outline-none resize-none font-sans text-[13px] py-1 min-h-[36px] max-h-20 bg-transparent"
                    placeholder=""
                  />
                  <button className="bg-[#07c160] text-white border-none px-3 py-1 rounded cursor-pointer text-xs shrink-0">
                    发送
                  </button>
                </div>
              </div>
            </div>
          )}
          {view === 'moments' && <Moments />}
          {view === 'add' && <AddFriendView onAdded={onAddCaiqing} />}
        </div>

        {/* Bottom tab bar (hidden when chat body open, to give full space) */}
        {!showChatBody && (
          <div className="flex border-t border-neutral-200 bg-[#2e2e2e] shrink-0">
            {RAIL_ICONS.map((item) => (
              <div
                key={item.key}
                onClick={() => switchView(item.key)}
                className={`flex-1 flex flex-col items-center justify-center py-1.5 cursor-pointer text-[10px] ${
                  view === item.key ? 'text-[#07c160]' : 'text-neutral-400'
                }`}
              >
                <span className="text-lg leading-none">{item.icon}</span>
                <span className="mt-0.5">{item.label}</span>
              </div>
            ))}
          </div>
        )}

        {showBigImg && <TongxueluModal onClose={() => setShowBigImg(false)} />}
        <Toast message={toast.message} visible={toast.visible} />
      </div>
    )
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
            onClick={() => switchView(item.key)}
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
          <ChatListPanel
            chatList={chatList}
            chatKey={chatKey}
            onSelect={(k) => setChatKey(k)}
            onAddClick={() => setView('add')}
          />
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
