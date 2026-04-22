const PAST_EVENTS = [
  { date: '2008', text: '梦和二年级，因家中严苛管教罹患儿童焦虑症，被迫休学两年。' },
  { date: '2010', text: '梦和复学，和采晴在璧山金花小学同班，两小无猜。' },
  { date: '2010 · 秋', text: '如月从重庆市区转学加入，三人结成最好的朋友。' },
  { date: '2012', text: '父亲长期缺席、"两人小团体"的隐形排挤，让梦和的被抛弃焦虑发展为重度焦虑障碍，每夜梦话「你们不要不跟我玩好不好」。' },
  { date: '2012 · 末', text: '梦和父亲动用李氏集团关系，调走如月父亲——他以为拔掉「威胁」就能治好女儿。' },
  { date: '2013.4.29', text: '如月一家搬迁，同学录上只留下「采晴0826」。梦和在得知真相的瞬间崩溃，开始长期的自我谴责。' },
  { date: '2013 - 2014', text: '梦和用剧本《永远的姐妹》反复重演"被原谅"。' },
  { date: '2014 - 2017', text: '采晴与梦和在璧山中学同窗。外部环境稳定 + 学业繁忙，梦和的症状进入相对缓解期。' },
  { date: '2018.2.28', text: '梦和的成人礼。采晴终于识破多年前的真相。' },
  { date: '2018.3', text: '两人决裂。童年的焦虑一次性被激活到极限，多年维持的防线瞬间击碎。' },
  { date: '2018.3', text: '临床诊断：重度广泛性焦虑 + 中度抑郁 + 回避型人格。她不再敢与任何人深交。' },
  { date: '2018.3 末', text: '梦和随家人前往墨尔本，微博化名「安眠」。' },
  { date: '2022', text: '症状好转。' },
  { date: '2026.4.15', text: '如月搬家时翻出同学录。线索一条条接上，十三年的距离终于走完最后一步。' },
  { date: '2026.4.19', text: '三姐妹在璧山再度相聚。' },
]

const FUTURE_EVENTS = [
  { date: '2026.5', text: '梦和回国接受系统性心理治疗。', highlight: true },
  { date: '2027.8', text: '在如月和采晴陪伴下，梦和临床治愈出院。焦虑与抑郁维持长期缓解。', highlight: true },
  { date: '2028.3.10', text: '梦和在璧山创办青少年心理公益工作室。', highlight: true },
  { date: '2028.6', text: '采晴和如月辞去原公司工作，全职加入工作室，负责艺术疗愈与社群运营。', highlight: true },
  { date: '2029.1', text: '梦和完成心理咨询师资格培训，以亲历者身份带领青少年焦虑干预小组。', highlight: true },
  { date: '2032', text: '工作室累计帮助 **3,872** 位青少年走出焦虑、抑郁、校园人际创伤。', highlight: true },
  { date: '未完待续……', text: '她们还在认真长大。', highlight: true, small: true },
]

function TimelineItem({ date, text, highlight, small }) {
  return (
    <div className="flex gap-4 relative">
      <div className="flex flex-col items-center shrink-0">
        <div className={`w-3 h-3 rounded-full mt-1.5 ${highlight ? 'bg-amber-300 shadow-[0_0_12px_rgba(252,211,77,0.8)]' : 'bg-neutral-500'}`} />
        <div className="w-px flex-1 bg-neutral-700 min-h-4" />
      </div>
      <div className={`pb-5 flex-1 ${small ? 'text-sm italic' : ''}`}>
        <div className={`text-xs mb-1 ${highlight ? 'text-amber-300 font-bold' : 'text-neutral-400'}`}>
          {date}
        </div>
        <div className={`leading-relaxed ${highlight ? 'text-amber-100' : 'text-neutral-300'}`}>
          {text}
        </div>
      </div>
    </div>
  )
}

export function Ending1Timeline({ onClose }) {
  return (
    <div className="fixed inset-0 bg-black z-[3000] overflow-y-auto animate-[fadeIn_0.6s_ease-out]">
      <style>{`@keyframes fadeIn { from { opacity: 0 } to { opacity: 1 } }`}</style>

      <button
        onClick={onClose}
        className="fixed top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/15 border border-white/20 text-white text-xl cursor-pointer transition-colors z-10"
        title="关闭"
      >
        ×
      </button>

      <div className="max-w-2xl mx-auto px-8 py-20 text-white">
        <div className="text-center mb-14">
          <div className="text-6xl mb-4">🌕</div>
          <h1 className="text-3xl font-bold mb-3 tracking-wider">时光尽头</h1>
          <div className="text-neutral-400 text-sm">—— 十三年的距离</div>
        </div>

        <div className="mb-10">
          <div className="uppercase text-[11px] tracking-widest text-neutral-500 mb-5">
            — 你一路走过的 —
          </div>
          {PAST_EVENTS.map((e, i) => <TimelineItem key={i} {...e} />)}
        </div>

        <div className="mb-10">
          <div className="uppercase text-[11px] tracking-widest text-amber-400/70 mb-5 mt-12">
            — 此后的日子 —
          </div>
          {FUTURE_EVENTS.map((e, i) => <TimelineItem key={i} {...e} />)}
        </div>

        <div className="text-center mt-20 pt-10 border-t border-neutral-800">
          <p className="text-neutral-400 leading-loose text-sm">
            故事到这里就结束了。
            <br />
            但对她们三个，才刚刚开始。
          </p>
          <button
            onClick={onClose}
            className="mt-8 px-8 py-2.5 border border-white/30 rounded-full text-sm cursor-pointer hover:bg-white/10 transition-colors"
          >
            关闭
          </button>
        </div>
      </div>
    </div>
  )
}
