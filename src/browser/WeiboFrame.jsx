import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { ImagePlaceholder } from '../components/ui'
import { spriteForUser } from '../assets/imageUrls'
import { BrowserFrame } from './BrowserFrame'

// Probe a primary image URL; fall back to local on error. For CSS background-image
// since onError doesn't fire on background-image, use Image() preloading.
function useImageFallback(imageObj) {
  const primary = typeof imageObj === 'object' ? imageObj?.src : imageObj
  const fallback = typeof imageObj === 'object' ? imageObj?.fallbackSrc : null
  const [url, setUrl] = useState(primary)
  useEffect(() => {
    setUrl(primary)
    if (!primary || !fallback) return
    const probe = new Image()
    probe.onerror = () => setUrl(fallback)
    probe.src = primary
  }, [primary, fallback])
  return url
}

export function WeiboFrame({ children }) {
  return (
    <div className="min-h-full bg-neutral-50">
      <div className="max-w-[720px] mx-auto px-4 py-4">{children}</div>
    </div>
  )
}

export function WeiboProfileHeader({
  name,
  bio,
  stats,
  bgFrom = '#ff9a9e',
  bgTo = '#fad0c4',
  bgImage,
  avatarSrc,
  followCount,
  fansCount,
  postCount,
  verified,
  children,
}) {
  const resolvedBg = useImageFallback(bgImage)
  const bannerStyle = resolvedBg
    ? { backgroundImage: `url(${resolvedBg})`, backgroundSize: 'cover', backgroundPosition: 'center 25%' }
    : { background: `linear-gradient(135deg, ${bgFrom}, ${bgTo})` }

  const sprite = !avatarSrc && !name?.includes('闺蜜头像') ? spriteForUser(name) : null

  return (
    <div className="bg-white mb-2">
      <div className="h-36 relative" style={bannerStyle}>
        <div className="absolute -bottom-10 left-6">
          <ImagePlaceholder name={name} src={avatarSrc} sprite={sprite} width={80} height={80} round from={bgFrom} to={bgTo} label={false} className="border-3 border-white shadow-md" />
        </div>
      </div>
      <div className="pt-2 pr-6 flex justify-end gap-2">{children}</div>
      <div className="px-6 pt-4 pb-4">
        <div className="flex items-center gap-2">
          <h2 className="text-lg font-bold">{name}</h2>
          {verified && <span className="text-orange-500 text-sm">⚡</span>}
        </div>
        {bio && <div className="text-neutral-500 text-sm mt-1">{bio}</div>}
        <div className="flex gap-5 mt-3 text-sm">
          <div><b className="text-neutral-800">{followCount || '—'}</b> <span className="text-neutral-400">关注</span></div>
          <div><b className="text-neutral-800">{fansCount || '—'}</b> <span className="text-neutral-400">粉丝</span></div>
          <div><b className="text-neutral-800">{postCount || '—'}</b> <span className="text-neutral-400">微博</span></div>
        </div>
      </div>
      <div className="flex border-t border-neutral-100 px-6 text-sm">
        <span className="py-2.5 px-4 text-orange-500 font-bold border-b-2 border-orange-500 cursor-pointer">微博</span>
        <span className="py-2.5 px-4 text-neutral-500 cursor-pointer">视频</span>
        <span className="py-2.5 px-4 text-neutral-500 cursor-pointer">话题</span>
        <span className="py-2.5 px-4 text-neutral-500 cursor-pointer">音乐</span>
        <span className="py-2.5 px-4 text-neutral-500 cursor-pointer">相册</span>
      </div>
    </div>
  )
}

function userAvatar(name, overrideSrc) {
  if (overrideSrc) return { src: overrideSrc, sprite: null }
  if (name?.includes('闺蜜头像')) return { src: null, sprite: null }
  return { src: null, sprite: spriteForUser(name) }
}

export function WeiboPost({ author, time, authorSrc, authorFrom, authorTo, children, comments, likes, onClick }) {
  const { src, sprite } = userAvatar(author, authorSrc)
  return (
    <div className="bg-white p-4 mb-2">
      <div className="flex items-center gap-3 mb-3">
        <ImagePlaceholder name={author} src={src} sprite={sprite} width={44} height={44} round label={false} from={authorFrom || '#ffd1dc'} to={authorTo || '#c5e1ff'} />
        <div className="flex-1">
          <div className="font-bold text-sm text-orange-600">{author}</div>
          <div className="text-neutral-400 text-xs mt-0.5">{time}</div>
        </div>
      </div>
      <div className="text-sm leading-relaxed text-neutral-700 mb-3">{children}</div>
      {onClick && (
        <div className="mb-3 text-orange-500 text-sm cursor-pointer hover:underline" onClick={onClick}>
          查看全文 &gt;
        </div>
      )}
      <div className="flex items-center gap-8 text-neutral-400 text-xs pt-2 border-t border-neutral-100">
        <span className="cursor-pointer hover:text-neutral-600">💬 {comments ? '评论' : ''}</span>
        <span className="cursor-pointer hover:text-neutral-600">🔄 转发</span>
        <span className="cursor-pointer hover:text-neutral-600">❤️ {likes || '赞'}</span>
      </div>
    </div>
  )
}

function renderSubComments(subs) {
  if (!subs) return null
  if (Array.isArray(subs)) {
    return subs.map((s, i) => <WeiboSubComment key={i} author={s.author}>{s.content}</WeiboSubComment>)
  }
  return subs
}

function renderComments(comments, commentsData) {
  if (comments) return comments
  if (commentsData) {
    return commentsData.map((c, i) => (
      <WeiboComment
        key={i}
        author={c.author}
        time={c.time}
        authorFrom={c.authorFrom}
        authorTo={c.authorTo}
        onClick={c.onClick}
        location={c.location}
        replyCount={c.replyCount}
        subComments={renderSubComments(c.subComments)}
      >
        {c.content}
      </WeiboComment>
    ))
  }
  return <div className="py-6 text-center text-neutral-400 text-sm">暂无评论</div>
}

function renderLikes(onLikeTab, likesData) {
  if (onLikeTab) return onLikeTab
  if (likesData) {
    return likesData.map((l, i) => (
      <WeiboLikeItem key={i} name={l.name} time={l.time} avatarSrc={l.avatarSrc} onClick={l.onClick} />
    ))
  }
  return <div className="py-6 text-center text-neutral-400 text-sm">暂无</div>
}

export function WeiboPostDetail({
  author, time, authorSrc, authorFrom, authorTo, content,
  comments, commentsData, likes, onLikeTab, likesData,
}) {
  const [tab, setTab] = useState('hot')
  const navigate = useNavigate()
  const { src, sprite } = userAvatar(author, authorSrc)

  return (
    <div className="bg-white">
      <div className="px-4 py-3 border-b border-neutral-100 flex items-center gap-3">
        <span
          className="text-neutral-500 cursor-pointer hover:text-neutral-700"
          onClick={() => navigate(-1)}
        >
          &lt; 返回
        </span>
      </div>
      <div className="p-4 border-b border-neutral-100">
        <div className="flex items-center gap-3 mb-3">
          <ImagePlaceholder name={author} src={src} sprite={sprite} width={44} height={44} round label={false} from={authorFrom || '#ffd1dc'} to={authorTo || '#c5e1ff'} />
          <div>
            <div className="font-bold text-sm text-orange-600">{author}</div>
            <div className="text-neutral-400 text-xs mt-0.5">{time}</div>
          </div>
        </div>
        <div className="text-sm leading-relaxed text-neutral-700">{content}</div>
      </div>
      <div className="flex items-center gap-6 px-4 py-2.5 text-xs text-neutral-400 border-b border-neutral-100">
        <span>{likes?.repost || 0} 转发</span>
        <span>{likes?.comment || 0} 评论</span>
        <span>{likes?.like || 0} 赞</span>
      </div>
      <div className="flex border-b border-neutral-100 px-4 text-sm">
        <span className={`py-2.5 px-3 cursor-pointer ${tab === 'hot' ? 'text-orange-500 font-bold border-b-2 border-orange-500' : 'text-neutral-500'}`} onClick={() => setTab('hot')}>热度</span>
        <span className={`py-2.5 px-3 cursor-pointer ${tab === 'time' ? 'text-orange-500 font-bold border-b-2 border-orange-500' : 'text-neutral-500'}`} onClick={() => setTab('time')}>按时间</span>
        <span className={`py-2.5 px-3 cursor-pointer ${tab === 'likes' ? 'text-orange-500 font-bold border-b-2 border-orange-500' : 'text-neutral-500'}`} onClick={() => setTab('likes')}>赞</span>
      </div>
      <div className="px-4">
        {(tab === 'hot' || tab === 'time') && renderComments(comments, commentsData)}
        {tab === 'likes' && renderLikes(onLikeTab, likesData)}
      </div>
    </div>
  )
}

// Full page shell: BrowserFrame > WeiboFrame > WeiboPostDetail
export function WeiboPostPage(props) {
  return (
    <BrowserFrame>
      <WeiboFrame>
        <WeiboPostDetail {...props} />
      </WeiboFrame>
    </BrowserFrame>
  )
}

export function WeiboComment({ author, authorSrc, authorFrom, authorTo, time, location, children, replyCount, subComments, onClick }) {
  const { src, sprite } = userAvatar(author, authorSrc)
  return (
    <div className="py-3 border-b border-neutral-100 last:border-b-0">
      <div className="flex gap-3">
        <ImagePlaceholder name={author} src={src} sprite={sprite} width={36} height={36} round label={false} from={authorFrom || '#ffd1dc'} to={authorTo || '#c5e1ff'} />
        <div className="flex-1 min-w-0">
          <div className="flex items-center gap-2">
            <span className={`text-orange-600 text-sm font-medium ${onClick ? 'cursor-pointer hover:underline' : ''}`} onClick={onClick}>
              {author}
            </span>
            {location && <span className="text-neutral-400 text-[11px]">来自{location}</span>}
          </div>
          <div className="text-sm text-neutral-700 mt-1 leading-relaxed">{children}</div>
          <div className="flex items-center gap-4 mt-1.5 text-[11px] text-neutral-400">
            {time && <span>{time}</span>}
            {replyCount !== undefined && <span>共 {replyCount} 条回复</span>}
          </div>
          {subComments && (
            <div className="mt-2 pl-3 border-l-2 border-neutral-100 space-y-2">
              {subComments}
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export function WeiboSubComment({ author, children }) {
  return (
    <div className="text-xs text-neutral-600">
      <span className="text-orange-600 font-medium">{author}</span>：{children}
    </div>
  )
}

export function WeiboLikeItem({ name, avatarSrc, time, onClick }) {
  const { src, sprite } = userAvatar(name, avatarSrc)
  return (
    <div className="flex items-center gap-3 py-2.5 border-b border-neutral-100 last:border-b-0">
      <ImagePlaceholder name={name} src={src} sprite={sprite} width={36} height={36} round label={false} from="#ffd1dc" to="#c5e1ff" />
      <div className="flex-1">
        <span className={`text-orange-600 text-sm font-medium ${onClick ? 'cursor-pointer hover:underline' : ''}`} onClick={onClick}>
          {name}
        </span>
      </div>
      {time && <span className="text-neutral-400 text-xs">{time}</span>}
    </div>
  )
}
