import { useState, useEffect } from 'react'
import { useStore } from '../../store'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { useCurrentPage } from '../../hooks/useCurrentPage'
import { useIsMobile } from '../../hooks/useIsMobile'
import { Avatar, ImagePlaceholder, Toast, useToast } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { RUYUE_CHATS, CAIQING_CHATS, FANQUAN_CHAT } from '../../data/qqData'
import { PageId } from '../../pages/pageIds'
import { QQAddDialog } from './QQAddDialog'
import { QQSwitchAccountDialog } from './QQSwitchAccountDialog'
import { QQChatBody } from './QQChatBody'
import { QQAnnouncementBanner } from './QQAnnouncementBanner'

function QQChatList({ chatList, selectedChat, onSelectChat, onAdd }) {
  return (
    <>
      <div className="flex gap-1.5 px-2.5 py-2.5 border-b border-sky-100 shrink-0">
        <input placeholder="搜索" className="flex-1 px-2.5 py-1.5 border border-sky-100 rounded-full bg-sky-50/60 text-xs outline-none" />
        <button onClick={onAdd} className="w-7 h-7 rounded-full bg-sky-100 border-none text-sky-700 text-sm cursor-pointer">＋</button>
      </div>
      <div className="flex-1 overflow-y-auto">
        {chatList.map((c) => (
          <div
            key={c.key}
            onClick={() => onSelectChat(c)}
            className={`flex gap-2.5 px-3 py-2.5 cursor-pointer border-b border-neutral-100 ${selectedChat === c.key ? 'bg-sky-100/70' : 'hover:bg-sky-50/60'}`}
          >
            <Avatar name={c.name} size={42} />
            <div className="flex-1 min-w-0">
              <div className="flex justify-between"><span className="font-semibold truncate">{c.name}</span><span className="text-neutral-400 text-[11px] shrink-0 ml-2">{c.time}</span></div>
              <div className="text-neutral-500 text-[11px] mt-0.5 truncate">{c.preview}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  )
}

export function QQ() {
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showSwitchDialog, setShowSwitchDialog] = useState(false)
  const [selectedChat, setSelectedChat] = useState(null)
  const toast = useToast()
  const { qqGroupJoined, qqAccountSwitched, qqAccounts, setFlag } = useStore()
  const navigate = useGameNavigate()
  const currentPage = useCurrentPage()
  const isMobile = useIsMobile()

  const isCaiqing = qqAccountSwitched

  useEffect(() => {
    if (currentPage === PageId.QQ_FANQUAN_GROUP && qqGroupJoined && !isCaiqing) {
      setSelectedChat('fanquan')
    }
  }, [currentPage, qqGroupJoined, isCaiqing])

  const onSwitchToAccount = (account) => {
    setFlag('qqAccountSwitched', account === 'caiqing')
    setShowSwitchDialog(false)
    setSelectedChat(null)
    if (account === 'caiqing') navigate(PageId.QQ_CAIQING_CHAT)
    else navigate(PageId.QQ)
  }

  const onLoginCaiqing = () => {
    if (!qqAccounts.includes('caiqing')) setFlag('qqAccounts', [...qqAccounts, 'caiqing'])
    onSwitchToAccount('caiqing')
  }

  const onJoinGroup = () => {
    setFlag('qqGroupJoined', true)
    setShowAddDialog(false)
    toast.show('加群成功')
  }

  const chatList = isCaiqing ? CAIQING_CHATS : [
    ...(qqGroupJoined ? [FANQUAN_CHAT] : []),
    ...RUYUE_CHATS,
  ]

  useEffect(() => {
    if (!isMobile && selectedChat === null && chatList[0]) {
      setSelectedChat(chatList[0].key)
    }
  }, [chatList, selectedChat, isMobile])

  const currentChat = chatList.find((c) => c.key === selectedChat)
  const showAnnouncementBanner = selectedChat === 'fanquan' && qqGroupJoined && !isCaiqing

  const onSelectChat = (c) => {
    setSelectedChat(c.key)
    if (c.key === 'fanquan') navigate(PageId.QQ_FANQUAN_GROUP)
    else if (currentPage === PageId.QQ_FANQUAN_GROUP) navigate(PageId.QQ)
  }

  if (isMobile) {
    const showChat = selectedChat && currentChat
    return (
      <div className="flex flex-col h-full text-[13px] bg-sky-50/50">
        {/* Top account bar (visible when on chat list) */}
        {!showChat && (
          <div className="flex items-center px-3 py-2 bg-linear-to-b from-sky-600 to-sky-800 shrink-0 gap-3">
            <ImagePlaceholder sprite={spriteForUser(isCaiqing ? '雨季' : '姚如月')} width={30} height={30} round label={false} />
            <div className="flex-1 text-xs text-white truncate">{isCaiqing ? '雨季' : '姚如月'}</div>
            <button
              onClick={() => isCaiqing && navigate(PageId.CAIQING_QZONE)}
              className="w-8 h-8 flex items-center justify-center rounded-md text-base text-white/90 bg-transparent border-none cursor-pointer"
              title="QQ空间"
            >
              ⭐
            </button>
            <button
              onClick={() => setShowSwitchDialog(true)}
              className="w-8 h-8 flex items-center justify-center rounded-md text-sm text-white/90 bg-transparent border-none cursor-pointer"
              title="切换账号"
            >
              🔄
            </button>
          </div>
        )}

        <div className="flex-1 flex flex-col min-h-0 overflow-hidden">
          {!showChat && (
            <div className="flex-1 flex flex-col bg-white min-h-0">
              <QQChatList
                chatList={chatList}
                selectedChat={selectedChat}
                onSelectChat={onSelectChat}
                onAdd={() => setShowAddDialog(true)}
              />
            </div>
          )}
          {showChat && (
            <div className="flex-1 flex flex-col bg-sky-50/40 min-h-0">
              <div className="flex justify-between items-center px-3 py-2.5 border-b border-sky-100 bg-white shrink-0 gap-2">
                <button
                  onClick={() => {
                    setSelectedChat(null)
                    if (currentPage === PageId.QQ_FANQUAN_GROUP) navigate(PageId.QQ)
                  }}
                  className="text-neutral-600 text-base bg-transparent border-none cursor-pointer px-1"
                >
                  ‹
                </button>
                <div className="flex-1 font-bold truncate">{currentChat?.name}</div>
                <div className="text-neutral-500 flex gap-2 shrink-0"><span>🔍</span><span>⋯</span></div>
              </div>
              {showAnnouncementBanner && (
                <QQAnnouncementBanner onViewDetails={() => navigate(PageId.POST_SCRIPT)} />
              )}
              <div className="flex-1 px-3 py-3 overflow-y-auto min-h-0">
                <QQChatBody selectedChat={selectedChat} qqGroupJoined={qqGroupJoined} isCaiqing={isCaiqing} />
              </div>
              <div className="border-t border-sky-100 px-3 pt-1 pb-2 bg-white shrink-0">
                <div className="flex gap-3 text-neutral-600 text-base py-1 overflow-x-auto whitespace-nowrap">
                  <span>😀</span><span>🖼</span><span>✂</span><span>📁</span><span>🎤</span>
                </div>
                <textarea className="w-full border-none outline-none resize-none font-sans text-[13px] min-h-[32px] max-h-20 py-0.5" />
              </div>
            </div>
          )}
        </div>

        {showAddDialog && (
          <QQAddDialog
            isCaiqing={isCaiqing}
            onClose={() => setShowAddDialog(false)}
            onJoinGroup={onJoinGroup}
            onVisitCaiqingSpace={() => { setShowAddDialog(false); navigate(PageId.CAIQING_QZONE) }}
            onVisitRumengling={() => { setShowAddDialog(false); navigate(PageId.RUMENGLING_QZONE) }}
          />
        )}
        {showSwitchDialog && (
          <QQSwitchAccountDialog
            isCaiqing={isCaiqing}
            qqAccounts={qqAccounts}
            onClose={() => setShowSwitchDialog(false)}
            onSwitchToAccount={onSwitchToAccount}
            onLoginCaiqing={onLoginCaiqing}
          />
        )}
        <Toast message={toast.message} visible={toast.visible} />
      </div>
    )
  }

  return (
    <div className="flex h-full text-[13px] bg-sky-50/50">
      {/* Rail */}
      <div className="w-14 flex flex-col items-center py-3.5 gap-2 bg-linear-to-b from-sky-600 to-sky-800">
        <div className="mb-2">
          <ImagePlaceholder sprite={spriteForUser(isCaiqing ? '雨季' : '姚如月')} width={36} height={36} round label={false} />
        </div>
        <div className="w-9 h-9 flex items-center justify-center rounded-md cursor-pointer text-lg bg-white/15 text-white">💬</div>
        <div className="w-9 h-9 flex items-center justify-center rounded-md cursor-pointer text-lg  hover:bg-white/10" title="QQ空间" onClick={() => isCaiqing && navigate(PageId.CAIQING_QZONE)}>⭐</div>
        <div className="flex-1" />
        <div className="w-9 h-9 flex items-center justify-center  cursor-pointer hover:bg-white/10 rounded-md text-xs" title="切换账号" onClick={() => setShowSwitchDialog(true)}>🔄</div>
        <div className="w-9 h-9 flex items-center justify-center ">⚙</div>
      </div>

      {/* List */}
      <div className="w-[280px] bg-white border-r border-sky-100 flex flex-col">
        <QQChatList
          chatList={chatList}
          selectedChat={selectedChat}
          onSelectChat={onSelectChat}
          onAdd={() => setShowAddDialog(true)}
        />
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col bg-sky-50/40 min-w-0">
        <div className="flex justify-between items-center px-4 py-3 border-b border-sky-100 bg-white">
          <div className="font-bold">{currentChat?.name || (isCaiqing ? '雨季' : '姚如月')}</div>
          <div className="text-neutral-500 flex gap-3"><span>🔍</span><span>⋯</span></div>
        </div>
        {showAnnouncementBanner && (
          <QQAnnouncementBanner onViewDetails={() => navigate(PageId.POST_SCRIPT)} />
        )}
        <div className="flex-1 flex flex-col min-w-0 overflow-hidden min-h-0">
          <div className="flex-1 px-5 py-4 overflow-y-auto">
            <QQChatBody selectedChat={selectedChat} qqGroupJoined={qqGroupJoined} isCaiqing={isCaiqing} />
          </div>
          <div className="border-t border-sky-100 px-4 pt-1.5 pb-2.5 bg-white min-h-[100px]">
            <div className="flex gap-3.5 text-neutral-600 text-base py-1.5">
              <span>😀</span><span>🖼</span><span>✂</span><span>📁</span><span>🎤</span>
            </div>
            <textarea className="w-full border-none outline-none resize-none font-sans text-[13px] min-h-[40px]" />
          </div>
        </div>
      </div>

      {showAddDialog && (
        <QQAddDialog
          isCaiqing={isCaiqing}
          onClose={() => setShowAddDialog(false)}
          onJoinGroup={onJoinGroup}
          onVisitCaiqingSpace={() => { setShowAddDialog(false); navigate(PageId.CAIQING_QZONE) }}
          onVisitRumengling={() => { setShowAddDialog(false); navigate(PageId.RUMENGLING_QZONE) }}
        />
      )}

      {showSwitchDialog && (
        <QQSwitchAccountDialog
          isCaiqing={isCaiqing}
          qqAccounts={qqAccounts}
          onClose={() => setShowSwitchDialog(false)}
          onSwitchToAccount={onSwitchToAccount}
          onLoginCaiqing={onLoginCaiqing}
        />
      )}

      <Toast message={toast.message} visible={toast.visible} />
    </div>
  )
}
