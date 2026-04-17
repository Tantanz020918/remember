import { useState } from 'react'
import { Keyword, Avatar, ImagePlaceholder } from '../components/ui'
import { spriteForUser } from '../assets/imageUrls'

export function CaiqingQQChat() {
  const [tab, setTab] = useState('chats')
  const [selectedChat, setSelectedChat] = useState('junior')

  return (
    <div className="flex h-full text-[13px] bg-sky-50/50">
      <div className="w-14 flex flex-col items-center py-3.5 gap-2 bg-linear-to-b from-sky-600 to-sky-800">
        <div className="mb-2">
          <ImagePlaceholder sprite={spriteForUser('雨季')} width={36} height={36} round label={false} />
        </div>
        <div className="w-9 h-9 flex items-center justify-center rounded-md cursor-pointer text-lg bg-white/15 text-white">💬</div>
        <div className="flex-1" />
      </div>
      <div className="w-[280px] bg-white border-r border-sky-100 flex flex-col">
        <div className="flex border-b border-sky-100 text-xs">
          <div className={`flex-1 text-center py-2.5 cursor-pointer ${tab === 'chats' ? 'bg-sky-50 font-bold text-sky-600' : 'text-neutral-500'}`} onClick={() => setTab('chats')}>消息</div>
          <div className={`flex-1 text-center py-2.5 cursor-pointer ${tab === 'requests' ? 'bg-sky-50 font-bold text-sky-600' : 'text-neutral-500'}`} onClick={() => setTab('requests')}>好友申请</div>
        </div>
        {tab === 'chats' && (
          <div className="flex-1 overflow-y-auto">
            <div className={`flex gap-2.5 px-3 py-2.5 cursor-pointer border-b border-neutral-100 ${selectedChat === 'junior' ? 'bg-sky-100/70' : ''}`} onClick={() => setSelectedChat('junior')}>
              <Avatar name="学妹" size={42} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between"><span className="font-semibold">化学小白</span><span className="text-neutral-400 text-[11px]">2020.9</span></div>
                <div className="text-neutral-500 text-[11px] mt-0.5 truncate">学姐，你的化学笔记可以借给我吗？</div>
              </div>
            </div>
          </div>
        )}
        {tab === 'requests' && (
          <div className="flex-1 overflow-y-auto p-3 space-y-3 text-xs">
            <div className="bg-red-50 border border-red-100 rounded-lg p-3">
              <div className="flex justify-between"><span className="font-bold">薄荷夏天（梦和）</span><span className="text-neutral-400">2015.3</span></div>
              <div className="text-neutral-600 mt-1">申请理由：我真的没想到会这样，听我解释采晴。</div>
              <div className="text-red-500 mt-1">✕ 已拒绝</div>
            </div>
            <div className="bg-red-50 border border-red-100 rounded-lg p-3">
              <div className="flex justify-between"><span className="font-bold">薄荷夏天（梦和）</span><span className="text-neutral-400">2015.3</span></div>
              <div className="text-neutral-600 mt-1">申请理由：求求你了采晴，我不能没有你。</div>
              <div className="text-red-500 mt-1">✕ 已拒绝</div>
            </div>
            <div className="bg-sky-50 border border-sky-100 rounded-lg p-3">
              <div className="flex justify-between"><span className="font-bold">采晴 → 梦和</span><span className="text-neutral-400">2017.10</span></div>
              <div className="text-neutral-600 mt-1">申请理由：梦和，或许我们可以聊一下。</div>
              <div className="text-amber-500 mt-1">⏳ 对方未处理</div>
            </div>
            <div className="bg-sky-50 border border-sky-100 rounded-lg p-3">
              <div className="flex justify-between"><span className="font-bold">采晴 → 梦和</span><span className="text-neutral-400">2018.1</span></div>
              <div className="text-neutral-600 mt-1">申请理由：梦和，我想跟你谈谈。</div>
              <div className="text-amber-500 mt-1">⏳ 对方未处理</div>
            </div>
          </div>
        )}
      </div>
      <div className="flex-1 flex flex-col bg-sky-50/40 min-w-0">
        {tab === 'chats' && selectedChat === 'junior' && (
          <>
            <div className="px-4 py-3 border-b border-sky-100 bg-white font-bold">化学小白</div>
            <div className="flex-1 px-5 py-4 overflow-y-auto">
              <div className="text-center text-neutral-400 text-[11px] my-2.5">2020/09/15</div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="学妹" size={36} />
                <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">学姐，你的化学笔记可以借给我吗？</div>
              </div>
              <div className="flex gap-2.5 my-2.5 flex-row-reverse">
                <ImagePlaceholder sprite={spriteForUser('雨季')} width={36} height={36} round label={false} />
                <div className="bg-sky-100 px-3 py-2 rounded text-sm">微信聊，现在不用qq了，我的微信是：<Keyword>CcqQ3927</Keyword></div>
              </div>
            </div>
          </>
        )}
        {tab === 'requests' && (
          <div className="flex-1 flex items-center justify-center text-neutral-400">
            ← 选择左侧查看详情
          </div>
        )}
      </div>
    </div>
  )
}
