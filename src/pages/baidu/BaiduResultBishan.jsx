import { BrowserFrame } from '../../browser/BrowserFrame'
import { StoryLink, DeadLink, ImagePlaceholder, Keyword } from '../../components/ui'
import { BaiduResultLayout, BaiduResultItem } from './BaiduResultLayout'
import { PageId } from '../pageIds'

export function BaiduResultBishan() {
  return (
    <BrowserFrame>
      <BaiduResultLayout query="璧山" count="2,340,000">
        <BaiduResultItem
          title={<DeadLink>璧山区 - 百度百科</DeadLink>}
          url="baike.baidu.com"
          image={<ImagePlaceholder name="璧山区风景" width={120} height={80} from="#bfe8f5" to="#7cc6e5" />}
          sub={
            <>
              · <StoryLink to={PageId.BISHAN_EDUCATION}>教育设施</StoryLink> · <DeadLink>旅游景点</DeadLink> ·{' '}
              <DeadLink>特色美食：璧山兔 / 来凤鱼</DeadLink> · <DeadLink>其他信息</DeadLink>
            </>
          }
        >
          璧山区，<Keyword>重庆市辖区</Keyword>，位于长江上游地区、重庆市西部，地处川东南弧形构造带，华蓥山复式背斜中的温塘峡背斜与沥鼻峡背斜之间，属长江上游亚热带湿润季风气候区，四季分明，气候温和，降雨量充足，总面积914.55平方千米。截至2024年3月，璧山区辖6个街道、9个镇。 截至2023年末，璧山区常住人口76.56万人。
        </BaiduResultItem>
        <BaiduResultItem
          title={
            <a
              href="https://www.bishan.gov.cn/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sky-700 hover:underline"
            >
              璧山区政府官网
            </a>
          }
          url="https://www.bishan.gov.cn/"
        >
          欢迎访问璧山区人民政府门户网站。最新政务信息、办事指南、政府公开……
        </BaiduResultItem>
        <BaiduResultItem
          title={<DeadLink>【新闻】国务院批复同意重庆市璧山县撤县设区</DeadLink>}
          url="news.cqjjnet.com · 2014-05-02"
        >
          经国务院批复，同意撤销璧山县设立璧山区。市民政局提醒：自 2014 年 10 月 1 日起，新办理的身份证号前 6 位 ……
        </BaiduResultItem>
        <BaiduResultItem
          title={<DeadLink>【旅游】璧山两日游攻略 - 小红书</DeadLink>}
          url="xiaohongshu.com"
          image={<ImagePlaceholder name="旅游照片" width={120} height={80} from="#ffe0a3" to="#f5a8a0" />}
        >
          璧山值得去的 5 个地方，吃喝玩乐全攻略！观音塘湿地公园、秀湖公园、来凤鱼……
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>璧山天气预报 15 天</DeadLink>} url="tianqi.com">
          璧山今日天气：多云转晴，14~22°C，东南风 2 级。
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>璧山 - 知乎话题</DeadLink>} url="zhihu.com">
          关注 2.1 万 · 讨论 5.6 万。在璧山生活是一种什么体验？
        </BaiduResultItem>
      </BaiduResultLayout>
    </BrowserFrame>
  )
}
