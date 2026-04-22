import { ImagePlaceholder } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { PageId } from '../pageIds'

// Baitian 用户名 → 对应用户主页。命中时名字会变成可点击链接。
const USER_PAGE = {
  '沐季千柠': PageId.EXTRA_MUJIQIANLING_USER,
  '采晴0826': PageId.AOBI_USER_CAIQING,
}

function UserName({ name, className = '' }) {
  const navigate = useGameNavigate()
  if (typeof name !== 'string') {
    return <span className={className}>{name}</span>
  }
  const target = USER_PAGE[name]
  if (!target) return <span className={className}>{name}</span>
  return (
    <span
      role="button"
      tabIndex={0}
      onClick={() => navigate(target)}
      className={`cursor-pointer hover:underline ${className}`}
    >
      {name}
    </span>
  )
}

export function ForumFloor({
  owner,
  avatarName,
  avatarSrc,
  avatarFrom,
  avatarTo,
  userName,
  userLv,
  userSign,
  meta,
  children,
  subReplies,
}) {
  const isCharacter = avatarName && avatarName.includes('闺蜜头像')
  const sprite = !isCharacter && !avatarSrc ? spriteForUser(userName) : null

  return (
    <div className={`flex px-3 md:px-5 py-3 md:py-4 border-b border-dashed border-pink-100 ${owner ? 'bg-pink-50/40' : ''}`}>
      <div className="w-[64px] md:w-[100px] text-center shrink-0 flex flex-col items-center">
        <ImagePlaceholder
          name={avatarName}
          src={avatarSrc}
          sprite={sprite}
          width={48}
          height={48}
          round
          from={avatarFrom}
          to={avatarTo}
          label={false}
        />
        <div className="font-bold text-[#d16b8a] mt-1.5 text-xs break-all">
          <UserName name={userName} />
        </div>
        {userLv && (
          <div className="inline-block bg-[#e891b0] text-white text-[10px] px-1.5 py-px rounded mt-1">
            {userLv}
          </div>
        )}
        {userSign && <div className="text-[10px] text-neutral-400 mt-1">{userSign}</div>}
      </div>
      <div className="flex-1 pl-3 md:pl-4 border-l border-dashed border-pink-100 min-w-0">
        <div className="text-neutral-400 text-[11px] mb-2">{meta}</div>
        <div className="text-[13px] leading-loose">{children}</div>
        {subReplies && subReplies.length > 0 && (
          <div className="mt-3 bg-pink-50/60 rounded border border-pink-100">
            {subReplies.map((reply, idx) => (
              <div key={idx} className={`px-3 py-2 text-[12px] ${idx > 0 ? 'border-t border-dashed border-pink-100' : ''}`}>
                <UserName name={reply.userName} className="font-bold text-[#d16b8a]" />
                {reply.replyTo && (
                  <span className="text-neutral-400">
                    {' 回复 '}
                    <UserName name={reply.replyTo} className="font-bold text-[#d16b8a]" />
                  </span>
                )}
                <span className="text-neutral-400">：</span>
                <span className="text-neutral-700">{reply.content}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}
