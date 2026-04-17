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

const CHATS = {
  jizhou: {
    header: '今天',
    messages: [
      { avatar: '我要锻炼', name: '我要锻炼', content: '脑壳痛' },
      { avatar: 'cecea', name: 'cecea', content: '那你还上号不' },
      { avatar: '我要锻炼', name: '我要锻炼', content: '不来了，我睡一下' },
      { avatar: '超级小鼠妇）', name: '超级小鼠妇', content: '喜欢豆狗' },
    ],
  },
  erciyuan1: {
    header: '今天',
    messages: [
      { avatar: '宅宅酱', name: '宅宅酱', content: '这季新番谁看了？' },
      { avatar: '二阶堂', name: '二阶堂', content: '制作组这次真的用心了，画面炸裂' },
      { avatar: '月咏', name: '月咏', content: '今天新番更新 GET！' },
    ],
  },
  erciyuan2: {
    header: '今天',
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
    header: '今天 11:03',
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
}

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
