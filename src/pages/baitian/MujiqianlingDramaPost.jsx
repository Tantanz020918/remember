import { BaitianPostDetail } from './BaitianPostDetail'
import { DRAMA_POST_BY_KEY } from '../../data/mujiqianlingDramaData'

// 如果 content 是字符串，开启 whitespace-pre-line，\n 自动换行。
// 如果是 JSX，原样渲染，不做包裹。
function renderContent(content) {
  if (content == null) return null
  if (typeof content === 'string') {
    return <div className="whitespace-pre-line">{content}</div>
  }
  return content
}

export function MujiqianlingDramaPost({ postKey }) {
  const post = DRAMA_POST_BY_KEY[postKey]
  if (!post) return null

  const floor = {
    owner: true,
    avatarName: '沐季千柠头像',
    avatarFrom: '#ffd6e7',
    avatarTo: '#ff99cc',
    userName: '沐季千柠',
    userLv: 'Lv.15',
    userSign: '【楼主】追剧狂魔',
    meta: post.postMeta,
    content: renderContent(post.content),
  }

  return <BaitianPostDetail title={post.title} floors={[floor]} />
}
