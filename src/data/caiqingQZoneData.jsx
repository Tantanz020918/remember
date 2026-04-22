import { Keyword, ImagePlaceholder, StoryLink } from '../components/ui'
import { THEME_PARK } from '../assets/imageUrls'
import { PageId } from '../pages/pageIds'

function Comment({ author, authorTo, children }) {
  const authorNode = authorTo ? (
    <StoryLink to={authorTo} className="text-amber-400! hover:underline">{author}</StoryLink>
  ) : (
    <span className="text-amber-400">{author}</span>
  )
  return (
    <div className="flex gap-2 py-1.5 text-xs">
      <span className="font-medium shrink-0">{authorNode}：</span>
      <span className="text-neutral-400">{children}</span>
    </div>
  )
}

export function parseQZoneTime(s) {
  if (!s) return 0
  const [y, m, d] = s.split('.').map(Number)
  return y * 10000 + (m || 0) * 100 + (d || 0)
}

// 未登录采晴账号（即"姚如月"访客）只能看到这个时间之后的说说。
export const VISITOR_VISIBLE_AFTER = parseQZoneTime('2015.5.10')

export const TIMELINE_POSTS = [
  {
    time: '2018.3.15',
    content: (
      <>
        五年前的一箭，终于一箭穿心
        <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="小花">怎么了？</Comment>
          <Comment author="阳光">发生什么事了？</Comment>
        </div>
      </>
    ),
  },
  {
    time: '2018.1.3',
    selfOnly: true,
    content: (
      <>
        <div>谁要抢我的女人 😤</div>
        <div className="mt-2 p-2.5 bg-neutral-900/60 rounded border-l-2 border-neutral-600">
          <div className="text-[11px] mb-1">
            <StoryLink to={PageId.BISHAN_CONFESSION_WALL}>@璧山中学表白墙</StoryLink>
          </div>
          <div className="text-sm text-neutral-400">
            #墙墙匿名表白# 表白高一(1)班李梦和，谁有她的 QQ 啊在线等。
          </div>
        </div>
         <div className="mt-2 bg-neutral-900/50 rounded p-2">
        </div>
      </>
    ),
  },
  {
    time: '2015.11.2',
    content: (
      <>
        最近学了一些新东西，给自己建了一个小网站，就用<Keyword>我最喜欢的那首歌</Keyword>当网站名吧~~
        <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="路人">是什么东东？</Comment>
          <Comment author="雨季">看来你还不够了解我~多看看我的个人资料吧</Comment>
          <Comment author="张条子">🐂🍺</Comment>
        </div>
      </>
    ),
  },
  { time: '2015.9.1', content: '开学了，新学期加油💪' },
  {
    time: '2014.8.26',
    content: (
      <>
        过生日，和<Keyword>梦和</Keyword>出去玩，好开心！就是太热了
        <div className="mt-2">
          <ImagePlaceholder name="游乐园" src={THEME_PARK.src} fallbackSrc={THEME_PARK.fallbackSrc} width={240} height={160} />
        </div>
         <div className="mt-2 bg-neutral-900/50 rounded p-2">
        <Comment author="如梦令" authorTo={PageId.RUMENGLING_QZONE}>真的很开心~~~~~</Comment>
      </div>
      </>
    ),
  },
  { time: '2014.8.20', content: (
    <>
      暑假快结束了，不想开学不想开学
      <div className="mt-2 bg-neutral-900/50 rounded p-2">
        <Comment author="如梦令" authorTo={PageId.RUMENGLING_QZONE}>马上就出去玩了！</Comment>
        <Comment author="雨季 回复 如梦令">期待期待</Comment>
      </div>
    </>
  ) },
  { time: '2014.6.21', content:  <>
        毕业了，再见朋友们！璧中见！
         <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="Immer">要想我哦晴</Comment>
          <Comment author="雨季 回复 Immer">好的么么</Comment>
          <Comment author="张条子">没考上怎么办</Comment>
          <Comment author="雨季 回复 张条子">再也不见</Comment>
        </div>
      </> },
  { time: '2014.6.20', content: '成绩出来了，语文依旧不高哈哈哈哈哈' },
  { time: '2013.7.12', content: <>好想如月啊啊啊啊啊。。。梦和今天又要练琴，没人和我玩！
        <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="抹茶子">那你过来找我玩呗</Comment>
          <Comment author="雨季 回复 抹茶子">太热了，不想出门</Comment>
          <Comment author="抹茶子 回复 雨季">晕</Comment>
        </div></> },
  { time: '2013.5.31', content: '如月走了以后，放学回家的路好安静。一个人买辣条都不香了。在家打奥比岛。' },
  {
    time: '2012.10.5',
    content: (
      <>
        梦和今天又买新绝版了，羡慕死本晴了💦 网上居然有人传她是去电话亭偷充值卡……拜托人家就是很有实力好吗！
        <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="氢气球">那种帖子别去看了，气到的是自己</Comment>
          <Comment author="抹茶子">谁呀？点名让我骂</Comment>
          <Comment author="如梦令" authorTo={PageId.RUMENGLING_QZONE}>呜呜呜，抱~~</Comment>
        </div>
      </>
    ),
  },
  {
    time: '2011.11.12',
    content: (
      <>
        三人组今天又更新了一集偶像剧！如月画好了图，梦和把主题曲词都写出来了，我来负责唱……虽然跑调但我觉得还挺好听的哼！
         <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="如梦令" authorTo={PageId.RUMENGLING_QZONE}>明明很好听哇</Comment>
          <Comment author="雨季 回复 如梦令">哈哈哈别闹</Comment>
        </div>
      </>
    ),
  },
  {
    time: '2010.12.15',
    content: (
      <>
        今天梦和她爸出差，她走到校门口小卖部居然买了一整包辣条吃！！我和如月都快哭了😭 这是她这辈子第一次啊！！！之前她偷吃一根就被打了，特别可怜我们的梦和
          <Comment author="初音未来">我靠，这么恨……</Comment>
      </>
    ),
  },
  {
    time: '2010.10.9',
    content: (
      <>
        我们的偶像故事有漫画了，在班里卖3块钱一本😎
        <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="抹茶子">我也要一本！</Comment>
          <Comment author="雨季 回复 抹茶子">姐你别闹</Comment>
          <Comment author="张条子">你俩不是已经够闹腾了再加一个</Comment>
          <Comment author="雨季 回复 张条子">小心我把你删了</Comment>
        </div>
      </>
    ),
  },
  {
    time: '2010.9.1',
    content: (
      <>
       怎么这个学期又来了一个转学生，哈哈
      </>
    ),
  },
  { time: '2010.4.15', content: '跟小姐妹一起喝奶茶~~~梦和说她爸不让她喝，所以我们是偷偷喝的' },
  {
    time: '2010.4.2',
    content: (
      <>
        梦和家里超级大！！！！！！！！！！！！
      </>
    ),
  },{
    time: '2010.4.1',
    content: (
      <>
        给梦和安利了守护甜心，她说她妈不让她看动画片……结果她借我家电脑一晚上追了 10 集，笑死我了🤣
        <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="张条子">尽教别人些不好的东西</Comment>
          <Comment author="雨季 回复 张条子">关你p事</Comment>
        </div>
      </>
    ),
  },{
    time: '2010.3.2',
    content: (
      <>
        升上二年级了！！！！！班上新来了一个好漂亮的女生，而且她长得很高
         <div className="mt-2 bg-neutral-900/50 rounded p-2">
          <Comment author="玫瑰">你才二年级就上网？</Comment>
        </div>
      </>
    ),
  },{
    time: '2009.11.2',
    content: (
      <>
       我是森林精灵，人类你们好
      </>
    ),
  },
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
