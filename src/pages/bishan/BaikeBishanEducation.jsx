import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, StoryLink, DeadLink, ImagePlaceholder } from '../../components/ui'
import { PageId } from '../../pages/pageIds'

export function BaikeBishanEducation() {
  return (
    <BrowserFrame>
      <div className="bg-white">
        <div className="flex items-center gap-5 px-10 py-3 bg-neutral-100 border-b border-neutral-200">
          <div className="font-bold text-lg text-[#2932e1]">百度百科</div>
          <input
            disabled
            className="flex-1 max-w-[400px] px-3.5 py-2 border border-neutral-300 rounded outline-none"
            placeholder="搜索词条"
          />
        </div>
        <div className="px-10 pt-5 pb-10 max-w-[820px]">
          <h1 className="text-2xl font-bold mb-1.5">璧山区 · 教育设施</h1>
          <div className="text-neutral-400 text-xs mb-3.5">
            浏览量 12.6 万 · 编辑次数 38 次 · 最近更新 2024-11
          </div>
          <ImagePlaceholder
            name="璧山教育"
            width="100%"
            height={160}
            from="#ffe7b3"
            to="#d4f0c2"
            style={{ width: '100%' }}
          />
          <p className="leading-loose text-neutral-700 mt-4">
            璧山区现有高中 6 所、初中 14 所、小学 32 所，师资力量雄厚，教学质量位居重庆市前列。
          </p>
          <h2 className="text-base mt-5 mb-2 pl-2.5 border-l-4 border-sky-500">一、高级中学</h2>
          <p className="leading-loose">
            <DeadLink>璧山中学</DeadLink>、<DeadLink>来凤中学</DeadLink>、
            <DeadLink>大路中学</DeadLink>、<DeadLink>璧山外国语学校</DeadLink>
          </p>
          <h2 className="text-base mt-5 mb-2 pl-2.5 border-l-4 border-sky-500">二、初级中学</h2>
          <p className="leading-loose">
            <DeadLink>青杠初级中学</DeadLink>、<DeadLink>丁家中学</DeadLink>、
            <DeadLink>三合中学</DeadLink>
          </p>
          <h2 className="text-base mt-5 mb-2 pl-2.5 border-l-4 border-sky-500">三、小学</h2>
          <p className="leading-loose">
            <DeadLink>璧山区实验小学</DeadLink>、
            <StoryLink to={PageId.SEARCH_JINHUA}>
              <Keyword>金花小学</Keyword>
            </StoryLink>
            、<DeadLink>河边小学</DeadLink>、<DeadLink>三合小学</DeadLink>、
            <DeadLink>大路小学</DeadLink>
          </p>
          <h2 className="text-base mt-5 mb-2 pl-2.5 border-l-4 border-sky-500">四、师资力量</h2>
          <p className="leading-loose">
            截至 2023 年，璧山区中小学在岗教师 4,200 余名，其中高级教师占比 28%，市级骨干教师 120 名。
          </p>
        </div>
      </div>
    </BrowserFrame>
  )
}
