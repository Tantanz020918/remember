import { useState } from 'react'
import { useStore } from '../../store'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { WeiboPostPage } from '../../browser/WeiboFrame'
import { Tooltip } from '../../components/ui'
import { PageId } from '../pageIds'

export function LockedPost() {
  const navigate = useGameNavigate()
  const { caiqingWechatAdded, reportsQueried } = useStore()
  const baseUnlocked = reportsQueried
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

            {/* 我们原谅你 —— 需看心理报告 + 添加采晴微信 */}
            {baseUnlocked && caiqingWechatAdded ? (
              <button
                onClick={() => navigate(PageId.ENDING_FORGIVE)}
                className="block w-full text-left px-4 py-3 rounded-lg text-sm transition-colors border bg-green-50 border-green-200 cursor-pointer hover:bg-green-100"
              >
                「我们原谅你。」
              </button>
            ) : (
              <Tooltip
                text={!reportsQueried
                  ? '先去了解她这些年经历过什么'
                  : '需要知道采晴的态度，才能代表她回应'}
                wrapperClassName="block"
              >
                <button
                  disabled
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm border bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed"
                >
                  🔒 「我们原谅你。」
                </button>
              </Tooltip>
            )}

            {/* 我原谅你 —— 需看心理报告 */}
            {baseUnlocked ? (
              <button
                onClick={() => navigate(PageId.ENDING_FORGIVE_ALONE)}
                className="block w-full text-left px-4 py-3 rounded-lg text-sm transition-colors border bg-amber-50 border-amber-200 cursor-pointer hover:bg-amber-100"
              >
                「我原谅你。」
              </button>
            ) : (
              <Tooltip
                text="先去了解她这些年经历过什么"
                wrapperClassName="block"
              >
                <button
                  disabled
                  className="block w-full text-left px-4 py-3 rounded-lg text-sm border bg-neutral-100 border-neutral-200 text-neutral-400 cursor-not-allowed"
                >
                  🔒 「我原谅你。」
                </button>
              </Tooltip>
            )}

            {/* 不作回应 —— 始终可选 */}
            <button
              onClick={() => navigate(PageId.ENDING_SILENCE)}
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
