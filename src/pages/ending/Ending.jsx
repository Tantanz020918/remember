import { useEffect, useRef, useState } from 'react'
import { useStore } from '../../store'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { Toast, useToast } from '../../components/ui'
import { PageId } from '../pageIds'
import { Ending1Timeline } from './Ending1Timeline'

export function EndingForgive() {
  const navigate = useGameNavigate()
  const { setFlag, highlightMode, hintMode } = useStore()
  const [showTimeline, setShowTimeline] = useState(false)
  const toast = useToast()
  const toastShownRef = useRef(false)

  // 进入结局一即永久解锁隐藏朋友圈
  useEffect(() => {
    setFlag('ending1Reached', true)
  }, [setFlag])

  // 全程未开任何提示 → 高难度成就 toast（只触发一次）
  useEffect(() => {
    if (toastShownRef.current) return
    if (highlightMode === 'off' && hintMode === 'off') {
      toastShownRef.current = true
      toast.show('成就解锁：高难度通关 · 全程未开任何提示')
    }
  }, [highlightMode, hintMode, toast])

  const onBack = () => navigate(PageId.WECHAT_MOMENTS)

  return (
    <div className="min-h-full flex flex-col items-center justify-center bg-linear-to-b from-neutral-900 to-neutral-800 text-white p-10">
      <Toast
        message={toast.message}
        visible={toast.visible}
        icon="🏆"
        className="bg-linear-to-r! from-amber-500! to-yellow-400! text-amber-950! border border-amber-200"
      />
      <div className="max-w-lg text-center space-y-6">
        <div className="text-5xl mb-4">🌕</div>
        <h1 className="text-2xl font-bold">结局一：我们原谅你</h1>
        <p className="text-neutral-300 leading-loose">
          你以如月和采晴的名义写下了回复：「我们原谅你。」
        </p>
        <p className="text-neutral-300 leading-loose">
          屏幕那头，一个女孩多年的心结终于被解开。
        </p>
        <p className="text-neutral-400 text-sm leading-loose">
          有些伤痕不会消失，但原谅是给彼此的一个机会——不是说「没关系」，而是说「我愿意往前走」。
        </p>
        <div className="pt-6 flex gap-3 justify-center">
          <button
            onClick={() => setShowTimeline(true)}
            className="px-6 py-2 bg-amber-500/20 border border-amber-400/40 rounded-full text-sm cursor-pointer hover:bg-amber-500/30 text-amber-100"
          >
            📜 回顾时间线
          </button>
          <button
            onClick={onBack}
            className="px-6 py-2 bg-[#07c160] border border-[#07c160] rounded-full text-sm font-medium cursor-pointer hover:bg-[#06ad56] text-white"
          >
            💬 打开朋友圈
          </button>
        </div>
      </div>

      {showTimeline && <Ending1Timeline onClose={() => setShowTimeline(false)} />}
    </div>
  )
}

export function EndingForgiveAlone() {
  const navigate = useGameNavigate()
  return (
    <div className="min-h-full flex flex-col items-center justify-center bg-linear-to-b from-neutral-900 to-neutral-800 text-white p-10">
      <div className="max-w-lg text-center space-y-6">
        <div className="text-5xl mb-4">🌘</div>
        <h1 className="text-2xl font-bold">结局二：我原谅你</h1>
        <p className="text-neutral-300 leading-loose">
          你写下了一句简短的回复：「我原谅你。」
        </p>
        <p className="text-neutral-300 leading-loose">
          只有你的名字，没有采晴。你还没能再联系上她，不知道她是否也愿意。
        </p>
        <p className="text-neutral-300 leading-loose">
          墨尔本的清晨，女孩看到这条评论，潸然泪下。
        </p>
        <p className="text-neutral-400 text-sm leading-loose">
          原谅是一个人的决定，但和解需要所有人。故事，也许还没完。
        </p>
        <div className="pt-6">
          <button
            onClick={() => navigate(PageId.DESKTOP)}
            className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-sm cursor-pointer hover:bg-white/20"
          >
            回到桌面
          </button>
        </div>
      </div>
    </div>
  )
}

export function EndingSilence() {
  const navigate = useGameNavigate()
  return (
    <div className="min-h-full flex flex-col items-center justify-center bg-linear-to-b from-neutral-900 to-neutral-800 text-white p-10">
      <div className="max-w-lg text-center space-y-6">
        <div className="text-5xl mb-4">🌑</div>
        <h1 className="text-2xl font-bold">结局三：沉默</h1>
        <p className="text-neutral-300 leading-loose">
          你关闭了页面，没有留下任何文字。
        </p>
        <p className="text-neutral-300 leading-loose">
          有些问题没有标准答案。原谅与否，都是一种选择。沉默，也是一种回答。
        </p>
        <p className="text-neutral-400 text-sm leading-loose">
          也许有一天，三个人会在某个意想不到的地方重逢。也许不会。
        </p>
        <div className="pt-6">
          <button
            onClick={() => navigate(PageId.DESKTOP)}
            className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-sm cursor-pointer hover:bg-white/20"
          >
            回到桌面
          </button>
        </div>
      </div>
    </div>
  )
}
