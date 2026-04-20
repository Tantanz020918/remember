import { Keyword } from '../components/ui'

// 荣德心理咨询所 · 李梦和的咨询记录。
// 记录先按时间顺序；ReportList 会倒序显示。
export const RONGDE_REPORTS = [
  {
    id: '2008-03',
    date: '2008-03-22',
    age: '7 岁',
    title: '初诊 · 躯体化障碍',
    summary: '练钢琴受训后反复呕吐、腹痛',
    body: (
      <>
        <p>来访者 7 岁，女，一年级。母亲陪同来诊。</p>
        <p>主诉：近两周在家练琴被父亲严厉批评后，出现反复呕吐、腹痛、拒绝上学。多家三甲医院门诊排除消化系统器质性病因。</p>
        <p>评估：学龄期躯体化障碍，父母高期待 + 严苛家教诱发。</p>
        <p>建议：降低练琴强度；父母学习共情式沟通；如症状反复，建议返诊评估焦虑谱系。</p>
      </>
    ),
  },
  {
    id: '2010-11',
    date: '2010-11-04',
    age: '9 岁',
    title: '再诊 · 焦虑障碍（分离焦虑为主）伴躯体化',
    summary: '因害怕被朋友抛下再次发作，拒绝出门，由母代述',
    body: (
      <>
        <p>来访者 9 岁，女，四年级。本次拒绝面诊，由母亲代为陈述外显症状：</p>
        <ul className="list-disc pl-5 space-y-1 text-[13px]">
          <li>连续两周夜间入睡困难，需家长陪伴至 24:00 后；半夜惊醒后哭喊。</li>
          <li>一日之内向父母重复提出相同问题十余次（如"采晴明天还会跟我玩吗""如月是不是不喜欢我了"），需家长反复保证才能短暂平静。</li>
          <li>周一至周五上学前反复呕吐，到校门口即哭闹。周一早晨多次无感染性发烧。</li>
          <li>在校几乎不进食，回家需喂食；身高体重曲线低于同龄均值第 25 百分位。</li>
          <li>母亲发现其手臂内侧有指甲抓痕，问及答"那样她们就会心疼我"。</li>
        </ul>
        <p>诊断：<Keyword>焦虑障碍（分离焦虑为主）伴躯体化</Keyword>。</p>
        <p>建议：（1）认知行为治疗；（2）轻度 SSRI 辅助；（3）<Keyword>改变环境，减少持续焦虑源</Keyword>——例如减少学业压力、增加温暖稳定的社交支持。家长反复追问"改变环境"的具体操作，医生建议以温和方式逐步引导，不建议家长代替来访者处理人际关系。</p>
      </>
    ),
  },
  {
    id: '2012-05',
    date: '2012-05-18',
    age: '11 岁',
    title: '复诊 · 焦虑缓解，抑郁性反刍',
    summary: '因持续内疚情绪来访',
    body: (
      <>
        <p>来访者 11 岁，女，六年级。本次主动要求面诊，未携家长。</p>
        <p>主诉（引用原话）：「我爸爸去年没问过我，就把我最好朋友的爸妈工作调走了，她们全家都搬了。另一个朋友因为这件事到现在都不是很开心。我知道这件事和我有关，但我一直没告诉她。我每天都做同一个梦，梦见她们站在一起不跟我说话。」</p>
        <p>评估：分离焦虑症状较 2010 年显著缓解（已无躯体化、睡眠恢复），但出现<Keyword>持续性内疚</Keyword>与抑郁性反刍；对父母（尤其父亲）产生明显疏离。</p>
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
        <p>评估：重度广泛性焦虑急性发作 + 中度抑郁发作；2010 年以来首次躯体化复发；存在自伤倾向。</p>
        <p>建议：立刻抗焦虑 + 抗抑郁联合用药；<Keyword>强烈建议更换长期生活环境，脱离当前人际刺激源</Keyword>；建议在国外系统治疗 2 年以上。</p>
      </>
    ),
  },
  {
    id: '2021-09',
    date: '2021-09-12',
    age: '21 岁',
    title: '远程复查 · 预后良好',
    summary: '墨尔本规律治疗两年，复查好转',
    body: (
      <>
        <p>来访者 21 岁，女，墨尔本大学本科在读。远程视频复查。</p>
        <p>过去两年规律服药（舍曲林 50mg/d）+ 每周 CBT 一次。自评量表显示：</p>
        <ul className="list-disc pl-5 space-y-1 text-[13px]">
          <li>GAD-7：16 → 6（轻度）</li>
          <li>PHQ-9：18 → 5（最低程度）</li>
          <li>睡眠质量、食欲、躯体化症状均有显著改善</li>
        </ul>
        <p>评估：<Keyword>预后良好</Keyword>。社交回避特质仍存在但较过去显著缓解。来访者自述"敢在中国的社交平台上匿名活动了，虽然还是不敢主动联系旧朋友"。</p>
        <p>建议：继续维持治疗 1 年；鼓励其在低风险下尝试重建部分社交联系。</p>
      </>
    ),
  },
]

export function getReport(id) {
  return RONGDE_REPORTS.find((r) => r.id === id)
}

// 报告在图片/模态中的完整视图
export function ReportCard({ report }) {
  return (
    <div className="bg-white text-neutral-800 rounded-md shadow-xl border border-neutral-200 w-[min(560px,calc(100vw-2rem))] max-h-[85vh] overflow-auto">
      <div className="flex items-start justify-between px-6 py-4 border-b border-neutral-200 bg-linear-to-r from-sky-50 to-white">
        <div>
          <div className="text-base font-bold text-sky-700">心理咨询报告</div>
          <div className="text-xs text-neutral-500 mt-0.5">{report.date} · 编号 {report.id}</div>
        </div>
        <div className="text-right">
          <div className="text-sm font-bold text-sky-700"><Keyword>荣德心理咨询所</Keyword></div>
        </div>
      </div>
      <div className="px-6 py-5 text-[13px] leading-loose space-y-2.5">
        <div className="text-base font-semibold">{report.title}</div>
        <div className="text-neutral-500 text-xs">{report.summary}</div>
        <hr className="border-neutral-100 my-2" />
        {report.body}
        <hr className="border-neutral-100 my-2" />
        <div className="text-[11px] text-neutral-400 text-right">主诊医师：荣医师　印</div>
      </div>
    </div>
  )
}
