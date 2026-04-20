import { Avatar, ImagePlaceholder } from '../components/ui'

function ChatMessage({ avatar, name, content, bubbleClass = '' }) {
  return (
    <div className="flex gap-2.5 my-2.5">
      <Avatar name={avatar} size={32} />
      <div>
        <div className="text-[11px] text-neutral-400 mb-0.5">{name}</div>
        <div className={`bg-white px-3 py-2 rounded border border-sky-100 text-sm ${bubbleClass}`}>{content}</div>
      </div>
    </div>
  )
}

// 每个聊天在一处定义：列表元数据（name/time）+ header + messages。
// 预览优先读 `previewOverride`（JSX 内容必须用），否则自动取最后一条 content 字符串。
const CHATS = {
  jizhou: {
    name: '计粥人机群🤖',
    time: '18:03',
    header: '今天',
    messages: [
      { avatar: '我要锻炼', name: '我要锻炼', content: '脑壳痛' },
      { avatar: 'cecea', name: 'cecea', content: '那你还上号不' },
      { avatar: '我要锻炼', name: '我要锻炼', content: '不来了，我睡一下' },
      { avatar: '娃哈哈', name: '娃哈哈', content: '你们觉得豆狗怎么样，要抽吗' },
      { avatar: '超级小鼠妇', name: '超级小鼠妇', content: '喜欢豆狗' },
      { avatar: '豆', name: '豆人', content: '确实很可爱，而且强度在线' },
    ],
  },
  erciyuan1: {
    name: '二次元交流大本营',
    time: '17:12',
    header: '今天',
    messages: [
      { avatar: '宅宅酱', name: '宅宅酱', content: '这季新番谁看了？' },
      { avatar: '二阶堂', name: '二阶堂', content: '制作组这次真的用心了，画面炸裂' },
      { avatar: '月咏', name: '月咏', content: '今天新番更新 GET！' },
    ],
  },
  erciyuan2: {
    name: '漫画推荐分享群',
    time: '16:48',
    header: '今天',
    previewOverride: '[图片]',
    messages: [
      { avatar: '漫迷小张', name: '漫迷小张', content: '求推荐治愈系短篇～' },
      { avatar: '阿喵', name: '阿喵', content: '《夜巡猫》强推！' },
      {
        avatar: '书虫',
        name: '书虫',
        content: <ImagePlaceholder name="漫画推荐" width={160} height={120} from="#c1d3ff" to="#ffd6e7" />,
      },
    ],
  },
  mail: {
    name: 'QQ 邮箱提醒',
    time: '11:03',
    header: '今天 11:03',
    previewOverride: '招聘专员给你发了新邮件',
    messages: [
      {
        avatar: 'QQ邮箱',
        name: 'QQ 邮箱提醒',
        bubbleClass: 'max-w-[300px]',
        content: (
          <>
            <div className="font-bold mb-1">您有 1 封新邮件</div>
            <div className="text-xs text-neutral-500">发件人：某某科技 HR</div>
            <div className="text-xs text-neutral-500 mt-0.5">主题：招聘专员给你发了新邮件</div>
          </>
        ),
      },
    ],
  },
  qzoneVisitor: {
    name: 'QQ 空间',
    time: '刚刚',
    header: '今天',
    previewOverride: '你有一位新访客！开通黄钻查看身份',
    messages: [
      {
        avatar: 'QQ空间',
        name: 'QQ 空间',
        bubbleClass: 'max-w-[300px]',
        content: (
          <>
            <div className="font-bold mb-1">你有一位新访客！</div>
            <div className="text-xs text-neutral-500">开通 <span className="text-amber-500 font-semibold">黄钻</span> 即可查看来访者身份 →</div>
          </>
        ),
      },
    ],
  },
}

function derivePreview(chat) {
  if (chat.previewOverride) return chat.previewOverride
  const last = chat.messages[chat.messages.length - 1]
  const content = last?.content
  return typeof content === 'string' ? content : '[消息]'
}

// 聊天列表元数据（按 key 访问），qqData.js 从这里取，不再单独维护 preview。
export const MINI_CHAT_LIST = Object.fromEntries(
  Object.entries(CHATS).map(([key, c]) => [
    key,
    { key, name: c.name, time: c.time, preview: derivePreview(c) },
  ]),
)

export function MiniChatView({ chatKey }) {
  const chat = CHATS[chatKey]
  if (!chat) return null
  return (
    <>
      <div className="text-center text-neutral-400 text-[11px] my-2.5">{chat.header}</div>
      {chat.messages.map((m, i) => <ChatMessage key={i} {...m} />)}
    </>
  )
}

export const MINI_CHAT_KEYS = Object.keys(CHATS)
