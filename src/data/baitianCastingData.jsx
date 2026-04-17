import { Keyword, ImagePlaceholder } from '../components/ui'

const OWNER = {
  owner: true,
  avatarName: '楼主头像',
  avatarFrom: '#ffd6e7',
  avatarTo: '#ff99cc',
  userName: '沐季千柠',
}

export const CASTING_FLOORS_PAGE_1 = [
  {
    ...OWNER,
    userLv: 'Lv.15',
    userSign: '【楼主】追剧狂魔',
    meta: '1 楼 · 2012-08-20 14:32',
    content: (
      <>
        <p>大家好！我是沐季千柠工作室的，想拍一部奥比岛言情短剧，需要招：</p>
        <p>编剧 1 位、女主 1 位、男主 1 位、配角若干。有意者楼下回复～</p>
        <div className="my-2">
          <ImagePlaceholder name="剧照预告" width={320} height={180} from="#ffe0a3" to="#ffb3d9" />
        </div>
        <p className="mt-2">⚠️ 要求：</p>
        <p>1. 必须有绝版衣服（越多越好，拍剧需要换装）</p>
        <p>2. 必须有红宝石（需要改名字）</p>
        <p>3. 有拍摄经验的优先～</p>
        <p className="mt-2">校园纯爱向，欢迎热爱言情的小伙伴加入！</p>
      </>
    ),
  },
  {
    avatarFrom: '#c1e8ff', avatarTo: '#6ec4f7', userName: '糖糖不吃糖', meta: '2 楼',
    content: <p>我想当女主！！我超会演的！</p>,
    subReplies: [
      { userName: '沐季千柠', replyTo: '糖糖不吃糖', content: '你有绝版衣服吗？截个图看看～' },
      { userName: '糖糖不吃糖', replyTo: '沐季千柠', content: '有的有的！我有星空长裙和樱花套装！' },
    ],
  },
  {
    avatarFrom: '#d4f0c2', avatarTo: '#8cd07d', userName: '奥比小王子', meta: '3 楼',
    content: <p>男主+1，我有所有男装，绝版都有</p>,
  },
  {
    avatarFrom: '#ffe7b3', avatarTo: '#ffb86b', userName: '清风', meta: '4 楼',
    content: <p>配角报名～我有好多绝版衣服，虽然不多但是拍配角应该够了吧</p>,
  },
  {
    avatarFrom: '#e4d4ff', avatarTo: '#a97bf5', userName: '小鱼干', meta: '5 楼',
    content: <p>楼主加油！期待成品～</p>,
    subReplies: [
      { userName: '云朵软糖', replyTo: '小鱼干', content: '同期待！楼主之前拍的那个也很好看' },
    ],
  },
  {
    avatarFrom: '#ffd1dc', avatarTo: '#ff9aa2', userName: '梦幻泡泡', meta: '6 楼',
    content: <p>我想当女配！我有超多红宝石，场景布置交给我也行～</p>,
  },
  {
    avatarFrom: '#c8f0b8', avatarTo: '#8ed687', userName: '星星点灯', meta: '7 楼',
    content: <p>剧名叫什么呀？好期待！</p>,
  },
  {
    ...OWNER, meta: '8 楼 · 楼主',
    content: <p>剧名暂时保密哦～等正式开拍了会公布的！大家先准备好衣服和红宝石～</p>,
    subReplies: [
      { userName: '星星点灯', replyTo: '沐季千柠', content: '好好好！等你开拍我去围观！' },
    ],
  },
]

export const CASTING_FLOORS_PAGE_2 = [
  {
    avatarFrom: '#fff4b3', avatarTo: '#f5c542', userName: '甜甜圈', meta: '9 楼 · 2012-08-25 10:22',
    content: <p>楼主楼主，我可以当路人甲吗？我没有绝版衣服但是我有热情！</p>,
    subReplies: [
      { userName: '沐季千柠', replyTo: '甜甜圈', content: '路人甲也需要的哈哈，欢迎欢迎～' },
    ],
  },
  {
    avatarFrom: '#d4f0c2', avatarTo: '#8cd07d', userName: '奥比小王子', meta: '10 楼 · 2012-09-01 16:44',
    content: <p>楼主我朋友也想来</p>,
    subReplies: [
      { userName: '沐季千柠', replyTo: '奥比小王子', content: '可以可以，你直接来群里吧！' },
    ],
  },
  {
    avatarName: '闺蜜头像 2', avatarFrom: '#c8f0b8', avatarTo: '#8ed687',
    userName: '薄荷夏天', userLv: 'Lv.4', meta: '11 楼 · 2012-09-03 20:11',
    content: <p>我会写剧本，我想当编剧。</p>,
    subReplies: [
      {
        userName: '沐季千柠', replyTo: '薄荷夏天',
        content: <>好呀好呀～有兴趣的都来加 QQ 群：<Keyword>2932818921</Keyword>，群里细聊！</>,
      },
    ],
  },
  {
    avatarFrom: '#ffd1dc', avatarTo: '#ff9aa2', userName: '路人甲', meta: '12 楼',
    content: <p>蹲一个后续！</p>,
  },
  {
    avatarFrom: '#e4d4ff', avatarTo: '#a97bf5', userName: '紫色泡泡', meta: '13 楼',
    content: <p>所以什么时候开拍呀？等不及了！</p>,
    subReplies: [
      { userName: '路人甲', replyTo: '紫色泡泡', content: '同想知道！' },
      { userName: '沐季千柠', replyTo: '紫色泡泡', content: '快了快了，剧本快写完了！' },
    ],
  },
]

export const CASTING_PAGES = [CASTING_FLOORS_PAGE_1, CASTING_FLOORS_PAGE_2]
