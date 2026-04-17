import { Keyword, ImagePlaceholder } from '../components/ui'
import { THEME_PARK } from '../assets/imageUrls'

function Comment({ author, children }) {
  return (
    <div className="flex gap-2 py-1.5 text-xs">
      <span className="text-amber-400 font-medium shrink-0">{author}：</span>
      <span className="text-neutral-400">{children}</span>
    </div>
  )
}

export const TIMELINE_POSTS = [
  {
    time: '2018.3.15',
    content: (
      <>
        七年前的一箭，终于一箭穿心。
        <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="小花">怎么了？</Comment>
          <Comment author="阳光">发生什么事了？</Comment>
        </div>
      </>
    ),
  },
  {
    time: '2017.11.2',
    content: (
      <>
        最近学了一些新东西，给自己建了一个小网站，就用<Keyword>我最喜欢的那首歌</Keyword>当网站名吧~~
        <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="路人">是什么东东？</Comment>
          <Comment author="雨季">看来你还不够了解我~多看看我的个人资料吧</Comment>
        </div>
      </>
    ),
  },
  { time: '2015.9.1', content: '开学了，新学期加油💪' },
  {
    time: '2014.6.18',
    content: (
      <>
        今天和梦和出去玩，好开心！
        <div className="mt-2">
          <ImagePlaceholder name="游乐园" src={THEME_PARK.src} fallbackSrc={THEME_PARK.fallbackSrc} width={240} height={160} />
        </div>
      </>
    ),
  },
  { time: '2013.8.20', content: '暑假快结束了，不想开学不想开学' },
  { time: '2012.6.20', content: '毕业了。我会很想你的，如月。' },
  { time: '2011.7.5', content: '如月走了以后，放学回家的路好安静。一个人买辣条都不香了。在家打奥比岛。' },
]

export const GUESTBOOK = [
  { from: '#c1e8ff', to: '#6ec4f7', name: '小花', text: '采晴生日快乐呀～🎂', time: '2017.8.26' },
  { from: '#ffe7b3', to: '#ffb86b', name: '阳光', text: '踩踩你的空间~~', time: '2016.5.12' },
  { from: '#e4d4ff', to: '#a97bf5', name: '梦幻泡泡', text: '来交换空间啦，互踩互踩！', time: '2015.3.8' },
  { from: '#d4f0c2', to: '#8cd07d', name: '路人甲', text: '你空间好好看！背景音乐是什么歌呀', time: '2014.11.20' },
]

export const ALBUM_COLORS = [
  { from: '#ffd1dc', to: '#ff9aa2' },
  { from: '#c1e8ff', to: '#6ec4f7' },
  { from: '#d4f0c2', to: '#8cd07d' },
  { from: '#ffe7b3', to: '#ffb86b' },
  { from: '#e4d4ff', to: '#a97bf5' },
  { from: '#fff4b3', to: '#f5c542' },
  { from: '#ffd6e7', to: '#f58ec2' },
  { from: '#b3e5fc', to: '#4fc3f7' },
]

export const RECENT_VISITORS = [
  { from: '#c1e8ff', to: '#6ec4f7' },
  { from: '#ffe7b3', to: '#ffb86b' },
  { from: '#d4f0c2', to: '#8cd07d' },
]

export const SIDEBAR_ALBUM = [
  { from: '#ffd1dc', to: '#ff9aa2' },
  { from: '#c1e8ff', to: '#6ec4f7' },
  { from: '#d4f0c2', to: '#8cd07d' },
]
