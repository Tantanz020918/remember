import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword } from '../../components/ui'

export function NewsMengheFund() {
  return (
    <BrowserFrame>
      <div className="max-w-[720px] mx-auto py-8 px-6">
        <div className="bg-white rounded-lg shadow-sm p-8">
          <div className="text-xs text-neutral-400 mb-2">璧山新闻网 · 2011-03-15</div>
          <h1 className="text-xl font-bold mb-4">「梦和基金」成立——资助贫困学生完成学业</h1>
          <div className="text-sm leading-loose text-neutral-700 space-y-3">
            <p>近日，<Keyword>李氏集团</Keyword>正式宣布出资设立「梦和基金」，专项资助璧山区家庭困难的学生继续学业，旨在让每一位想读书的孩子都不被家庭条件阻拦。</p>
            <p>李氏集团创办人在启动仪式上表示：「基金以我女儿的名字命名，希望每一个孩子都能像她一样，有机会好好读书、自由选择自己的未来。」</p>
            <p>据悉，该基金首年将覆盖璧山区 12 所中小学的困难学生，每人每年 3000-10000 元不等，并视学业表现可持续发放至大学毕业。</p>
            <p className="text-neutral-400 text-xs">（责编：张华 审核：王丽）</p>
          </div>
        </div>
      </div>
    </BrowserFrame>
  )
}
