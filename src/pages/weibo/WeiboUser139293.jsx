import { BrowserFrame } from '../../browser/BrowserFrame'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { WeiboFrame, WeiboProfileHeader, WeiboPost } from '../../browser/WeiboFrame'

export function WeiboUser139293() {
  const navigate = useGameNavigate()

  return (
    <BrowserFrame>
      <WeiboFrame>
        <WeiboProfileHeader
          name="微博用户139293"
          bio=""
          followCount="3"
          fansCount="0"
          postCount="1"
          bgFrom="#dfe6e9"
          bgTo="#b2bec3"
        >
          <button className="px-5 py-1.5 bg-orange-500 text-white rounded-full text-sm cursor-pointer border-none font-medium">+ 关注</button>
        </WeiboProfileHeader>
        <WeiboPost
          author="微博用户139293"
          time="2022-01-04"
          authorFrom="#dfe6e9"
          authorTo="#b2bec3"
          onClick={() => navigate(34)}
        >
          <div className="flex items-center gap-1 mb-1">
            <span className="text-neutral-400 text-xs">🔒 加锁帖子</span>
          </div>
          [点击查看]
        </WeiboPost>
      </WeiboFrame>
    </BrowserFrame>
  )
}
