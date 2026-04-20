import { Keyword, ImagePlaceholder } from '../components/ui'
import { Message } from '../apps/Wechat/Message'

export const WECHAT_CHAT_LIST = [
  { key: 'qing', name: '青青', preview: '蛮可惜的~~', time: '14:22', unread: 0 },
  { key: 'zhou', name: '设计-周雪', preview: '好，收到。', time: '昨天', unread: 0 },
  { key: 'mom', name: '妈妈', preview: '爱你老妈', time: '16:48', unread: 0 },
  { key: 'nail', name: '沁心美甲美睫', preview: '行', time: '4.13', unread: 0 },
]

// Each item is either { date } or { mine?, name, text }
// `text` may be a string, ReactNode, or (ctx) => ReactNode
const CHATS = {
  qing: [
    { date: '一周前' },
    { mine: true, name: '姚如月', text: '下周搬家完准备去做个美甲，指甲又长长了' },
    { name: '青青', text: '还是去上次那家吗？' },
    { mine: true, name: '姚如月', text: <>对，<Keyword>上次做的生日款</Keyword>很好看，就是款式复杂差点没赶上生日宴</> },
    { name: '青青', text: '确实，难免的' },
    { name: '青青', text: <>你这次运气不错，生日就在<Keyword>周末</Keyword></> },
    { mine: true, name: '姚如月', text: <>确实，不用请假了</> },
    { date: '昨天' },
    {
      name: '青青',
      text: (
        <>
          <ImagePlaceholder name="分享视频" width={160} height={100} from="#c1d3ff" to="#e4d4ff" />
          <div className="mt-1">这剧好看，推～</div>
        </>
      ),
    },
    { mine: true, name: '姚如月', text: '在修 ux 问题，晚上看' },
    { date: '今天 14:06' },
    { mine: true, name: '姚如月', text: '搬家真的好累' },
    {
      mine: true,
      name: '姚如月',
      text: (ctx) => (
        <>
          翻出小学的<Keyword>同学录</Keyword>了
          <div className="mt-1.5">
            <ImagePlaceholder
              name={<>同学录<br></br><Keyword>（点击查看大图）</Keyword></>}
              width={180}
              height={120}
              from="#fff3b0"
              to="#ffd6a5"
              onClick={ctx.onOpenTongxuelu}
            />
          </div>
        </>
      ),
    },
    { mine: true, name: '姚如月', text: '这俩是我当时最好的姐妹，好想念她们呜呜呜' },
    { name: '青青', text: <>这个 ao比鸟 是什么意思啊？看不懂</> },
    { mine: true, name: '姚如月', text: '应该是写错了，可能是什么游戏吧，当时比较流行的' },
    { name: '青青', text: <>笑死，一堆错字</> },
    { name: '青青', text: <>你是在<Keyword>璧山</Keyword>读的小学吗？</> },
    { mine: true, name: '姚如月', text: '是的，但我快升六年级的时候就转学走了。' },
    { name: '青青', text: '蛮可惜的~~' },
  ],
  mom: [
    { date: '1.13' },
    { name: '妈妈', text: '降温了，多穿点。' },
    { mine: true, name: '姚如月', text: '好，你们也注意保暖' },
    { date: '2.10' },
    { name: '妈妈', text: '闺女，票买了没？' },
    { mine: true, name: '姚如月', text: '买好了，16号下午2点到' },
    { name: '妈妈', text: '知道了' },
    { date: '3.2' },
    { name: '妈妈', text: <>今年你是<Keyword>本命年</Keyword>啊，记得穿点红色，妈妈给你寄了袜子。</> },
    { mine: true, name: '姚如月', text: '收到啦～爱你妈妈' },
    { name: '妈妈', text: '你爸爸前两天血压又高了，我让他少喝酒。' },
    { mine: true, name: '姚如月', text: '爸是老毛病了，让他注意点，我晚点打电话给他念叨。' },
    { date: '16:39' },
    { name: '妈妈', text: '闺女，新家安顿好了吗？' },
    { mine: true, name: '姚如月', text: '安顿得差不多啦，就是东西还没归位。' },
    { name: '妈妈', text: '要不要妈妈周末过去帮你收拾？' },
    { mine: true, name: '姚如月', text: '不用啦，我自己慢慢弄就好啦～' },
    { name: '妈妈', text: '记得按时吃饭，别老点外卖。' },
    { mine: true, name: '姚如月', text: '嗯嗯，我今天煮了粥～' },
    { name: '妈妈', text: '那就好，吃好才有精神上班。' },
    { name: '妈妈', text: '傻孩子😊 五一回来吗？' },
    { mine: true, name: '姚如月', text: '看情况，如果不加班就回' },
    { name: '妈妈', text: '哎好，妈妈给你炖排骨汤🥘' },
    { mine: true, name: '姚如月', text: '爱你老妈' },
  ],
  zhou: [
    { date: '昨天' },
    { mine: true, name: '姚如月', text: '雪姐，我明天要搬家，今天帮我走查完哈，晚上我修一波。' },
    { name: '设计-周雪', text: 'ok，马上开始走查' },
    {
      name: '设计-周雪',
      text: (
        <>
          首页 hero 区间距再大 8px，标题字重换成 medium。详情页卡片阴影偏硬。
          <div className="mt-1">
            <ImagePlaceholder name="设计走查截图" width={160} height={100} from="#e4d4ff" to="#c1d3ff" />
          </div>
        </>
      ),
    },
    { mine: true, name: '姚如月', text: '好，收到。' },
  ],
  nail: [
    { date: '3.5' },
    { mine: true, name: '姚如月', text: '预约周六的美甲～' },
    { name: '沁心美甲美睫', text: '好的亲，下午四点钟可以吗？' },
    { mine: true, name: '姚如月', text: '早点吧，1点行不行' },
    { name: '沁心美甲美睫', text: '可以的宝子，帮你约上啦' },
    { date: '4.13' },
    { mine: true, name: '姚如月', text: '我要预约这周六的美甲' },
    { name: '沁心美甲美睫', text: '亲，只能提前三天内预约哦。' },
    { mine: true, name: '姚如月', text: '行' },
  ],
}

function DateLine({ children }) {
  return <div className="text-center text-neutral-400 text-[11px] my-3">{children}</div>
}

export function WechatChat({ chatKey, ctx }) {
  const items = CHATS[chatKey]
  if (!items) return null
  return (
    <>
      {items.map((it, i) => {
        if (it.date) return <DateLine key={i}>{it.date}</DateLine>
        const content = typeof it.text === 'function' ? it.text(ctx || {}) : it.text
        return (
          <Message key={i} mine={it.mine} name={it.name}>{content}</Message>
        )
      })}
    </>
  )
}
