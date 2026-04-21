import { createContext, useContext } from 'react'
import { Keyword } from '../components/ui'

// 是否打码。默认 true（给 weibo 公开图加码），官网查询时传 false。
const CensorContext = createContext(true)

function Redacted({ children }) {
  const censored = useContext(CensorContext)
  if (!censored) return <>{children}</>
  return <span className="blur-[4px] select-none">{children}</span>
}

// 荣德心理咨询所 · 李梦和的咨询记录。
// 记录先按时间顺序；ReportList 会倒序显示。
export const RONGDE_REPORTS = [
  {
    id: '2008-03',
    date: '2008-03-22',
    age: '8 岁',
    title: '初诊 · 躯体化障碍',
    summary: '练钢琴受训后反复呕吐、腹痛',
    body: (
      <>
        <p>来访者 8 岁，女，二年级。母亲陪同来诊。</p>
        <p>主诉：近两周在家练琴被父亲严厉批评后，出现反复呕吐、腹痛、拒绝上学。多家三甲医院门诊排除消化系统器质性病因。母亲提及学校反馈近两月注意力涣散、同学关系紧张。</p>
        <p>评估：学龄期躯体化障碍，父母高期待 + 严苛家教诱发。</p>
        <p>建议：<Keyword>暂时休学调整</Keyword>，降低练琴强度；父母学习共情式沟通；如症状反复，建议返诊评估焦虑谱系。</p>
      </>
    ),
  },
  {
    id: '2012-04',
    date: '2012-04-08',
    age: '12 岁',
    title: '再诊 · 焦虑障碍（分离焦虑为主）',
    summary: '来访者拒绝面诊，由母亲代述',
    body: (
      <>
        <p>来访者 12 岁，女，四年级。本次来访者拒绝进诊室，由母亲代为陈述：</p>
        <ul className="list-disc pl-5 space-y-1 text-[13px]">
          <li>入睡困难，需母亲陪同至 24:00 后方可入睡；睡中手脚不适、反复搓动（疑<Keyword>不安腿综合征</Keyword>）。</li>
          <li>母亲陪睡期间多次听到其说梦话，内容反复围绕同一句："你们不要不跟我玩好不好"。</li>
          <li>上学前反复反胃、呕吐，近一个月内发生 6 次以上。</li>
        </ul>
        <p>诊断：<Keyword>焦虑障碍（分离焦虑为主）</Keyword>。</p>
        <p>建议：（1）认知行为治疗；（2）轻度 SSRI 辅助；（3）<Keyword>改变环境，减少持续焦虑源</Keyword>——以温和方式逐步引导，不建议家长代替来访者处理人际关系。家长反复追问"改变环境"的具体操作。</p>
      </>
    ),
  },
  {
    id: '2014-03',
    date: '2014-03-18',
    age: '14 岁',
    title: '复诊 · 焦虑缓解，抑郁性反刍',
    summary: '因持续内疚情绪来访',
    body: (
      <>
        <p>来访者 14 岁，女，六年级。本次主动要求面诊，未携家长。</p>
        <p>主诉（引用原话）：「我爸爸去年没问过我，就把我最好朋友的爸妈工作调走了，她们全家都搬了。另一个朋友因为这件事到现在都不是很开心。我知道这件事和我有关，但我一直没告诉她。我每天都做同一个梦，梦见她们站在一起不跟我说话。」</p>
        <p>评估：分离焦虑症状较 2012 年显著缓解（已无躯体化、睡眠恢复），但出现<Keyword>持续性内疚</Keyword>与抑郁性反刍；对父母（尤其父亲）产生明显疏离。近期以写作、编剧方式反复演绎"被原谅"结局，具备<Keyword>代偿性自我和解</Keyword>特征。</p>
        <p>建议：继续 CBT，重点处理内疚归因；家庭治疗（家长未配合）。</p>
      </>
    ),
  },
  {
    id: '2018-03',
    date: '2018-03-05',
    age: '18 岁',
    title: '急诊 · 重度焦虑急性发作',
    summary: '好友决裂导致急性焦虑 + 抑郁',
    body: (
      <>
        <p>来访者 18 岁（成人礼刚结束），女，高三。急诊来访。</p>
        <p>主诉：一周前的生日宴上，儿时另一位好友（在场者）得知其父亲当年的行为，当场决裂。此后连续失眠 6 日，拒食，反复撕扯自己手臂，自述"我这辈子都不会被原谅"。</p>
        <p>评估：重度广泛性焦虑急性发作 + 中度抑郁发作；2012 年以来首次躯体化复发；存在自伤倾向。</p>
        <p>建议：立刻抗焦虑 + 抗抑郁联合用药；<Keyword>强烈建议更换长期生活环境，脱离当前人际刺激源</Keyword>；建议在国外系统治疗 2 年以上。</p>
      </>
    ),
  },
  {
    id: '2022-02',
    date: '2022-02-01',
    age: '21 岁',
    title: '远程复查 · 预后良好',
    summary: '墨尔本规律治疗两年，复查好转',
    body: (
      <>
        <p><Redacted>来访者 21 岁，女，墨尔本大学本科在读。远程视频复查。</Redacted></p>
        <p>过去两年规律服药（舍曲林 50mg/d）+ 每周 CBT 一次。自评量表显示：</p>
        <ul className="list-disc pl-5 space-y-1 text-[13px]">
          <li>GAD-7：16 → 6（轻度）</li>
          <li>PHQ-9：18 → 5（最低程度）</li>
          <li>睡眠质量、食欲、躯体化症状均有显著改善</li>
        </ul>
        <p>评估：<Keyword>预后良好</Keyword>。社交回避特质仍存在但较过去显著缓解。<Redacted>来访者自述"敢在中国的社交平台上匿名活动了，虽然还是不敢主动联系旧朋友"。</Redacted></p>
        <p>建议：继续维持治疗 1 年；鼓励其在低风险下尝试重建部分社交联系。</p>
      </>
    ),
  },
]

export function getReport(id) {
  return RONGDE_REPORTS.find((r) => r.id === id)
}

// 报告在图片/模态中的完整视图。
// censored 默认 true（微博贴的外流图）；在官网查询页面传 false，显示清晰原件。
export function ReportCard({ report, censored = true }) {
  return (
    <CensorContext.Provider value={censored}>
      <div className="bg-white text-neutral-800 rounded-md shadow-xl border border-neutral-200 w-[min(560px,calc(100vw-2rem))] max-h-[85vh] overflow-auto">
        <div className="flex items-start justify-between px-6 py-4 border-b border-neutral-200 bg-linear-to-r from-sky-50 to-white">
          <div>
            <div className="text-base font-bold text-sky-700">心理咨询报告</div>
            <div className="text-xs text-neutral-500 mt-0.5">{report.date} · 编号 {report.id}</div>
          </div>
          <div className="text-right">
            <div className="text-sm font-bold text-sky-700"><Keyword>荣德心理咨询所</Keyword></div>
            <div className="mt-1.5 text-[10px] text-neutral-500"><Keyword>身份证号</Keyword></div>
            {censored ? (
              <div className="relative inline-block">
                {/* 全 ID 打码：模糊滤镜 */}
                <div className="text-[11px] font-mono text-neutral-600 blur-[4px] select-none tracking-[2px]">
                  50022720000229782X
                </div>
                {/* 打码没盖严：右下角露出最后四位"782X"的下半部分 */}
                <div
                  aria-hidden
                  className="absolute right-0 bottom-0 text-[11px] font-mono text-neutral-600 tracking-[2px] select-none pointer-events-none"
                  style={{ clipPath: 'polygon(100% 45%, 100% 100%, 25% 100%)' }}
                >
                  50022720000229782X
                </div>
              </div>
            ) : (
              <div className="text-[11px] font-mono text-neutral-600 tracking-[2px]">
                50022720000229782X
              </div>
            )}
          </div>
        </div>
        <div className="px-6 py-5 text-[13px] leading-loose space-y-2.5">
          <div className="text-base font-semibold">{report.title}</div>
          <div className="text-neutral-500 text-xs">{report.summary}</div>
          <hr className="border-neutral-100 my-2" />
          {report.body}
          <hr className="border-neutral-100 my-2" />
          <div className="text-[11px] text-neutral-400 text-right">主诊医师：荣医师  印</div>
        </div>
      </div>
    </CensorContext.Provider>
  )
}
