import { useState } from 'react'
import { useStore } from '../../store'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { WeiboPostPage } from '../../browser/WeiboFrame'
import { PasswordLock } from '../../components/ui'


const POEM = `月亮，你看我，我也看你。
你依旧皎洁，可我已满身污浊。
因为我作恶太多，你的光照不进我荒芜的余生。
月亮，你为何不语？
是你看穿了我的贪婪，还是你在悲悯我的一无所有？
在这冷寂的夜，我拥抱不到任何人，只能在你的注视下，守着我那洗不净的悲伤。`

function PostContent() {
  const navigate = useGameNavigate()
  const [showChoice, setShowChoice] = useState(false)

  const content = (
    <div>
      <div className="text-sm leading-loose text-neutral-700 space-y-3">
        <p>在我18岁那年，我最重要的女孩离开了我，而我不求她的原谅，因为我伤她太深。</p>
        <p>4年过去了，我已经习惯在墨尔本的生活，但再也无法和新的朋友深交，害怕再次伤害他人。</p>
        <p>我很迷茫，不知道她们是否愿意给我机会让我解开这个心结。</p>
        <p className="font-semibold">如月，采晴，你们会原谅我吗？我一直很恐惧知道答案。</p>
      </div>
      <div className="mt-6 border-t border-neutral-100 pt-4">
        {!showChoice ? (
          <button
            onClick={() => setShowChoice(true)}
            className="px-4 py-2 bg-neutral-100 rounded text-sm cursor-pointer hover:bg-neutral-200 border-none"
          >
            💬 发表评论
          </button>
        ) : (
          <div className="space-y-3">
            <div className="text-sm text-neutral-500 mb-2">选择你的回应：</div>
            <button
              onClick={() => navigate(34)}
              className="block w-full text-left px-4 py-3 rounded-lg text-sm transition-colors border bg-green-50 border-green-200 cursor-pointer hover:bg-green-100"
            >
              「我们原谅你。」
            </button>
            <button
              onClick={() => navigate(35)}
              className="block w-full text-left px-4 py-3 bg-neutral-50 border border-neutral-200 rounded-lg text-sm cursor-pointer hover:bg-neutral-100"
            >
              「不作回应。」
            </button>
          </div>
        )}
      </div>
    </div>
  )

  return (
    <WeiboPostPage
      author="安眠"
      time="2022-01-04 23:15"
      authorFrom="#dfe6e9"
      authorTo="#b2bec3"
      content={content}
      likes={{ repost: 0, comment: 0, like: 0 }}
    />
  )
}

export function LockedPost() {
  const { lockedPostUnlocked, setFlag } = useStore()

  return (
    <BrowserFrame>
      {!lockedPostUnlocked ? (
        <PasswordLock
          prompt={
            <div className="text-left">
              <p className="text-sm font-bold mb-3">🔒 加锁帖子</p>
              <div className="text-sm leading-loose text-neutral-600 whitespace-pre-line mb-4 text-left">
                {POEM}
              </div>
            </div>
          }
          errorHint="月亮+你+我"
          answer={'19'}
          onUnlock={() => setFlag('lockedPostUnlocked', true)}
          className="min-h-[400px]"
        />
      ) : (
        <PostContent />
      )}
    </BrowserFrame>
  )
}
