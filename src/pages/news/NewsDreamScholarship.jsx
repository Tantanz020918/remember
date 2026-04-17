import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, DeadLink } from '../../components/ui'

export function NewsDreamScholarship() {
  return (
    <BrowserFrame>
      <div className="max-w-[720px] mx-auto py-8 px-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-xs text-neutral-400 mb-2">璧山新闻网 · 2018-03-15</div>
          <h1 className="text-xl font-bold mb-4">「梦之奖学金」设立——助力璧山学子筑梦未来</h1>
          <div className="text-sm leading-loose text-neutral-700 space-y-3">
            <p>近日，<Keyword>李氏集团</Keyword>正式宣布出资设立「梦之奖学金」，每年将为璧山区各中小学的优秀学生提供奖励，旨在鼓励学子勤奋向上、追逐梦想。</p>
            <p>李氏集团创办人在设立仪式上表示：「教育是最好的投资。我们希望通过这个奖学金，让每一个有梦想的孩子都能获得支持。」</p>
            <p>据悉，该奖学金首年将覆盖璧山区 12 所中小学，每校评选 5-10 名获奖学生，奖金金额为每人 3000-10000 元不等。</p>
            <p className="text-neutral-400 text-xs">（责编：张华 审核：王丽）</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}
