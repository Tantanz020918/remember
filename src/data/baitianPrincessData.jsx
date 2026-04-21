import { ImagePlaceholder, Keyword } from '../components/ui'

export const PRINCESS_FLOORS = [
  {
    owner: true,
    avatarName: '闺蜜头像 1',
    avatarFrom: '#ffccee',
    avatarTo: '#ff99cc',
    userName: '采晴0826',
    userLv: 'Lv.3',
    meta: '1 楼 · 2010-04-08 20:12',
    content: (
      <>
        <p>和朋友一起想的偶像组合——两位来自天使国的公主，化身人类偶像，用歌声净化坏人的心灵！</p>
        <div className="my-3 space-y-3">
          <div className="p-3 rounded-lg bg-pink-50 border border-pink-200">
            <p className="font-bold text-[#d16b8a]">🌸 樱花公主「薰」</p>
            <p className="text-sm leading-loose mt-1">
              变身口诀：<b>「樱花飞舞，甜心变身！」</b>
              粉色双马尾，手持樱花麦克风权杖。
              应援色：樱粉 🩷。
              招牌技：一开嗓，整个舞台就飘起樱花雨，听到歌声的人心里的害怕都会变成小小的花瓣散掉。
              代表单曲：《樱之约》。
            </p>
          </div>
          <div className="p-3 rounded-lg bg-sky-50 border border-sky-200">
            <p className="font-bold text-sky-700">⭐ 星辰公主「熠」</p>
            <p className="text-sm leading-loose mt-1">
              变身口诀：<b>「星光闪耀，心愿登台！」</b>
              紫色短发，发梢别着流星发卡。
              应援色：星紫 💜。
              招牌技：跳舞踩出亮晶晶的星星脚印，粉丝挥的荧光棒会自动跟着她节奏一起亮。
              代表单曲：《流星 Step》。
            </p>
          </div>
        </div>
        <p className="mt-3 font-semibold text-[#d16b8a]">主题曲《往前飞》(by 我的朋友)</p>
        <div className="mt-1.5 px-3.5 py-2.5 bg-pink-50/70 border-l-[3px] border-[#e891b0] text-sm leading-loose italic text-neutral-600">
          <p>🎵 牵起你的手 别害怕</p>
          <p>🎵 一起走过风雨找朝霞</p>
          <p>🎵 樱花落进你的头发</p>
          <p>🎵 星光铺满我的脸颊</p>
          <p>🎵</p>
          <p>🎵 啦啦啦 啦啦啦</p>
          <p>🎵 我们就是彼此的家</p>
          <p>🎵 啦啦啦 啦啦啦</p>
          <p>🎵 把温柔的光 洒遍天涯</p>
        </div>
      </>
    ),
  },
  {
    avatarFrom: '#c1e8ff',
    avatarTo: '#6ec4f7',
    userName: '糖糖不吃糖',
    meta: '2 楼 · 2010-04-08 21:30',
    content: <p>没有图吗？光看字好难想象🥺</p>,
    subReplies: [
      {
        userName: '采晴0826',
        replyTo: '糖糖不吃糖',
        content: '呜呜没有……我和朋友都不会画画，等学会了再来补！',
      },
      {
        userName: '采晴0826',
        replyTo: '糖糖不吃糖',
        content: '现在有了！班上新转来的朋友会画画，她给我们画了所有的图，见下面👇',
      },
    ],
  },
  {
    avatarFrom: '#e4d4ff',
    avatarTo: '#a97bf5',
    userName: '路过的',
    meta: '3 楼 · 2010-04-09 12:44',
    content: <p>好玛丽苏……</p>,
    subReplies: [
      { userName: '采晴0826', replyTo: '路过的', content: '你懂什么 🙄' },
    ],
  },
  {
    owner: true,
    avatarName: '闺蜜头像 1',
    avatarFrom: '#ffccee',
    avatarTo: '#ff99cc',
    userName: '采晴0826',
    userLv: 'Lv.4',
    meta: '4 楼 · 2010-11-07 19:56',
    content: (
      <>
        <p>更新！现在三个人了——班上新来了一个很会画画的同学，我们三个人一起出了第三位公主！</p>
        <div className="my-3">
          <div className="p-3 rounded-lg bg-cyan-50 border border-cyan-200">
            <p className="font-bold text-cyan-700">🐚 海螺公主「珣」</p>
            <p className="text-sm leading-loose mt-1">
              变身口诀：<b>「潮汐起舞，海之心动！」</b>
              金色短发点缀珍珠，耳朵上戴着海螺形无线耳机，裙摆像一层层波浪。
              应援色：海蓝 💙。
              招牌技：唱高音时身后会泛起一圈圈水纹光圈，粉丝应援棒会被染成海水色。
              代表单曲：《潮汐 Dance》。
            </p>
          </div>
          <div className="mt-3">
            <ImagePlaceholder name="三位公主的设定图" width={260} height={200} from="#b3e5fc" to="#80deea" />
          </div>
        </div>
      </>
    ),
  },
  {
    avatarFrom: '#ffe7b3',
    avatarTo: '#ffb86b',
    userName: '云朵软糖',
    meta: '5 楼 · 2010-11-07 20:10',
    content: <p>哇好美！！你们好有想象力啊</p>,
  },
  {
    avatarFrom: '#d4f0c2',
    avatarTo: '#8cd07d',
    userName: '糖糖不吃糖',
    meta: '6 楼 · 2010-11-07 21:22',
    content: <p>啊啊啊终于等到图了！珣公主的头发点缀珍珠好戳我！再多画几张啊啊啊</p>,
  },
  {
    owner: true,
    avatarName: '闺蜜头像 1',
    avatarFrom: '#ffccee',
    avatarTo: '#ff99cc',
    userName: '采晴0826',
    userLv: 'Lv.4',
    meta: '7 楼 · 2010-11-20 19:03',
    content: (
      <>
        <p>因为变三个人了，我们重新写了一首合体单曲！这次副歌三位公主的声音要叠在一起唱～</p>
        <p className="mt-3 font-semibold text-[#d16b8a]">合体单曲《三人之约》(by 我的朋友)</p>
        <div className="mt-1.5 px-3.5 py-2.5 bg-pink-50/70 border-l-[3px] border-[#e891b0] text-sm leading-loose italic text-neutral-600">
          <p>🎵 牵紧我 别放手</p>
          <p>🎵 三个人 一起走</p>
          <p>🎵 山再高 云再厚</p>
          <p>🎵 也挡不住 我们往前冲</p>
          <p>🎵</p>
          <p>🎵 啦啦啦 啦啦啦</p>
          <p>🎵 肩并肩 谁也别回头</p>
          <p>🎵 啦啦啦 啦啦啦</p>
          <p>🎵 风雨里 攥紧彼此的手</p>
          <p>🎵</p>
          <p>🎵 樱花落 星光流</p>
          <p>🎵 潮汐起 三心共奏</p>
          <p>🎵 就算世界 再狂再吼</p>
          <p>🎵 我们也要 一起唱到最后</p>
        </div>
      </>
    ),
  },
  {
    avatarFrom: '#fff4b3',
    avatarTo: '#f5c542',
    userName: '星星点灯',
    meta: '8 楼 · 2010-11-20 19:41',
    content: <p>呜呜呜"潮汐起 三心共奏"这句太戳了！！三位公主的要素都写进来了，好牛！</p>,
  },
  {
    avatarName: '闺蜜头像 2',
    avatarFrom: '#c8f0b8',
    avatarTo: '#8ed687',
    userName: '梦の伤',
    userLv: 'Lv.3',
    meta: '9 楼 · 2010-11-20 20:15',
    content: (
      <>
        <p>嘿嘿词是<Keyword>我写的</Keyword>——</p>
        <p>其实最想写的是那句「风雨里 攥紧彼此的手」。希望我们三个人就算以后走得再远，也都不会松开</p>
      </>
    ),
  },
]
