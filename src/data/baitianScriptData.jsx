import { Keyword } from '../components/ui'

export const SCRIPT_FLOORS = [
  {
    owner: true,
    avatarName: '闺蜜头像2',
    avatarFrom: '#c8f0b8',
    avatarTo: '#8ed687',
    userName: '梦の伤',
    userLv: 'Lv.6',
    userSign: '编剧+女主',
    meta: '发布于 2013-06-01 21:05',
    content: (
      <>
        <p className="text-[12px] text-neutral-500 mb-3">
          📢 先发人物介绍，剧情还在打磨中～想给大家一个更完整的故事，大家可以先认识认识主角们，投票最想看哪对 CP 的番外！
        </p>

        <h4 className="mt-3 mb-2 text-[#d16b8a] text-sm font-bold border-b border-pink-100 pb-1">女主团</h4>
        <div className="py-1.5 leading-loose text-[13px]">
          <b><Keyword>慕容梦和</Keyword></b>（女主）：温柔善良、重感情，<Keyword>四年才过一次生日</Keyword>。家境殷实，心底柔软，总把朋友放在比自己更重要的位置。
        </div>
        <div className="py-1.5 leading-loose text-[13px]">
          <b>李采殇</b>：活泼开朗，和慕容梦和从小一起长大，喜欢画画。会把最大一颗糖留给朋友的女孩。
        </div>
        <div className="py-1.5 leading-loose text-[13px]">
          <b>姚月儿</b>：新转来的女孩。眉眼清淡，不张扬，却总是很容易被大家记住。喜欢一个人躲在图书馆角落里看小说。
        </div>

        <h4 className="mt-4 mb-2 text-[#d16b8a] text-sm font-bold border-b border-pink-100 pb-1">校草三人组</h4>
        <div className="py-1.5 leading-loose text-[13px]">
          <b>顾景深</b>（配慕容梦和）· 温柔系：钢琴社社长，永远温声细语。总能一眼看穿梦和眼底的阴影，却从不戳破，只是把她的手心轻轻握住——「没事的，我都在。」
        </div>
        <div className="py-1.5 leading-loose text-[13px]">
          <b>沈亦舟</b>（配李采殇）· 霸道系：校篮球队队长，对所有人冷脸，唯独看见采殇会抢她的奶茶喝。他不会说喜欢，只会在她被欺负的那天，把人堵在走廊。
        </div>
        <div className="py-1.5 leading-loose text-[13px]">
          <b>陆远</b>（配姚月儿）· 冷酷系：全校最神秘的转学生，成绩第一，话很少。只有姚月儿递给他一颗糖的那次，他破天荒笑了一下。
        </div>

        <h4 className="mt-4 mb-2 text-[#d16b8a] text-sm font-bold border-b border-pink-100 pb-1">反派</h4>
        <div className="py-1.5 leading-loose text-[13px] text-neutral-600">
          <b>暗夜女巫·薇拉</b>：隐藏在奥比岛深处的邪恶女巫，嫉恨所有纯洁的友谊。她的咒语可以潜入人的梦里，把最柔软的心变得尖锐。
        </div>

        <h4 className="mt-4 mb-2 text-[#d16b8a] text-sm font-bold border-b border-pink-100 pb-1">打酱油的</h4>
        <div className="py-1.5 leading-loose text-[13px] text-neutral-500">
          <b>花痴 A / B / C</b>：班上一群爱起哄的女生，负责把三对 CP 一次次推上热搜。
        </div>

        <div className="mt-4 text-center text-neutral-400 text-[11px]">
          —— 剧本第一幕敬请期待 ——
        </div>
      </>
    ),
  },
  {
    avatarFrom: '#c1e8ff', avatarTo: '#6ec4f7', userName: '糖糖不吃糖', meta: '2 楼',
    content: <p>啊啊啊校草三人组我可以！！顾景深带我走🥺</p>,
  },
  {
    avatarFrom: '#ffe7b3', avatarTo: '#ffb86b', userName: '奥比小王子', meta: '3 楼',
    content: (
      <>
        <p>冷酷系陆远我可以来演！！😤</p>
        <div className="mt-1.5 pl-3 border-l-2 border-pink-200 text-xs text-neutral-500">
          <span className="text-[#d16b8a] font-medium">梦の伤</span> 回复：已经有人啦，下部戏优先考虑你～
        </div>
      </>
    ),
  },
  {
    avatarFrom: '#e4d4ff', avatarTo: '#a97bf5', userName: '清风', meta: '4 楼',
    content: <p>温柔系+霸道系+冷酷系齐全，姐妹你太懂了🍜</p>,
  },
  {
    avatarFrom: '#fff4b3', avatarTo: '#f5c542', userName: '小鱼干', meta: '5 楼',
    content: <p>花痴 ABC 就是我本人😂 求加戏</p>,
  },
  {
    avatarFrom: '#ffd1dc', avatarTo: '#ff9aa2', userName: '云朵软糖', meta: '6 楼',
    content: (
      <>
        <p>薇拉这个反派设定好有意思，期待看到她搞事情！</p>
        <div className="mt-1.5 pl-3 border-l-2 border-pink-200 text-xs text-neutral-500">
          <span className="text-[#d16b8a] font-medium">梦の伤</span> 回复：嘿嘿正在憋大招～ 🌸
        </div>
      </>
    ),
  },
]
