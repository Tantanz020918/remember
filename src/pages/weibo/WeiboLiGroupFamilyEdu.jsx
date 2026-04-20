import { WeiboPostPage } from '../../browser/WeiboFrame'

const COMMENTS = [
  {
    author: '路人甲', time: '2013-04-18 10:22', authorFrom: '#ffd1dc', authorTo: '#ff9aa2',
    content: '哇这么强，别人家的孩子。',
  },
  {
    author: '心理学小蓝', time: '2013-04-18 11:05', authorFrom: '#c1e8ff', authorTo: '#6ec4f7',
    content: '这样心理真的不会出问题吗？？高压教育要慎重。',
    subComments: [
      { author: '有钱任性', content: '这么多钱花，哪里还有什么烦恼，酸了就说酸了。' },
      { author: '心理学小蓝', content: '不是酸，是见过太多这种家庭出事。祝孩子本人一切安好。' },
    ],
  },
  {
    author: '围观群众', time: '2013-04-18 14:37', authorFrom: '#d4f0c2', authorTo: '#8cd07d',
    content: '希望孩子本人是真的喜欢吧。',
  },
  {
    author: '邻居阿姨', time: '2013-04-19 09:12', authorFrom: '#ffe7b3', authorTo: '#ffb86b',
    content: '我见过这个小姑娘，挺乖的，就是不太爱笑。',
  },
]

export function WeiboLiGroupFamilyEdu() {
  return (
    <WeiboPostPage
      author="璧山日报·教育"
      time="2013-04-18 09:30"
      authorFrom="#fecaca"
      authorTo="#fca5a5"
      content={
        <div className="space-y-2">
          <p className="font-semibold">「家规严格」的千金教育 —— 走近李氏集团总裁的教女之道</p>
          <p>
            提起李氏集团，璧山人没有不知道的。而提起总裁的女儿，坊间流传的一句话是：「别人家的孩子，活生生的模板。」
          </p>
          <p>
            据悉，这位千金三岁识千字、五岁开始学琴、七岁拿下钢琴九级，从一年级起稳居年级前三。总裁坚持「严父出才女」的教育理念——作息严格、零食禁令、社交半径由家中司机把控、课外时间全部排满。
          </p>
          <p>
            总裁在接受采访时说：「孩子的未来，不能被任何外界杂质干扰。我们做父母的，能替她挡下多少，就挡多少。她现在不理解，长大就理解了。」
          </p>
          <p>
            在如今「快乐教育」盛行的年代，这样近乎古典的严父形象引发了广泛讨论。编辑部也注意到，这位千金本人从未出现在任何镜头前。
          </p>
          <p className="text-neutral-400 text-xs">—— 璧山日报 · 教育观察</p>
        </div>
      }
      likes={{ repost: 12, comment: 47, like: 89 }}
      commentsData={COMMENTS}
    />
  )
}
