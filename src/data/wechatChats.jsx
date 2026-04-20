import { Keyword, ImagePlaceholder } from '../components/ui'
import { Message } from '../apps/Wechat/Message'

export const WECHAT_CHAT_LIST = [
  { key: 'qing', name: '青青', preview: '蛮可惜的~~', time: '14:22', unread: 0 },
  { key: 'zhou', name: '设计-周雪', preview: '好，收到。', time: '昨天', unread: 0 },
  { key: 'mom', name: '妈妈', preview: '爱你老妈', time: '16:48', unread: 0 },
  { key: 'nail', name: '沁心美甲美睫', preview: '行', time: '4.13', unread: 0 },
]

// Added to the chat list only after 采晴 is added via "添加朋友" tab.
export const CAIQING_CHAT = { key: 'caiqing', name: '采晴', preview: '如果你能找到她，一定告诉我。', time: '刚刚', unread: 0 }

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
  caiqing: [
    { date: '今天' },
    { mine: true, name: '姚如月', text: '采晴！！真的是你吗？没想到这么多年了还能找到你 T^T' }, { name: '采晴', text: '呜呜呜如月！我也超想你！这么多年你都跑哪去了啊' },
    { mine: true, name: '姚如月', text: '当年走得太匆忙，也没跟你们留联系方式。最近搬家翻到了小学的同学录才看到你留的 QQ 号，一路找过来的……' },
    { name: '采晴', text: '我也是……你现在在哪里过得怎么样？' },
    { mine: true, name: '姚如月', text: '在上班哈哈，上周刚搬了新家。你呢？' },
    { name: '采晴', text: '哈哈我也是打工人一枚，你还记得我们当年一起写的那个公主精灵小说吗 😂' },
    { mine: true, name: '姚如月', text: '记得记得，画得丑得要命……' },
    { mine: true, name: '姚如月', text: '对了，梦和呢？你有她的联系方式吗？' },
    { name: '采晴', text: '她啊……现在联系不上了。' },
    { name: '采晴', text: '她本来就不是很经常用社交网络，后来也没留其他联系方式。我发 QQ 好友申请，她也一直不回复。' },
    { mine: true, name: '姚如月', text: '你们……怎么就断联了？' },
    { name: '采晴', text: '高三那年我们吵了一架，之后就没再说过话了。' },
    { name: '采晴', text: '她当时一直在跟我道歉，说没想到她爸爸会直接把你爸妈调走，自己一直觉得很内疚。' },
    { name: '采晴', text: '但我当时气在头上，根本没听她解释，就把她拉黑了。' },
    { name: '采晴', text: '其实……这些年我一直都想跟她和好。' },
    { mine: true, name: '姚如月', text: '原来是这样……' },
    { name: '采晴', text: '如果你能找到她，一定告诉我。' },
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
