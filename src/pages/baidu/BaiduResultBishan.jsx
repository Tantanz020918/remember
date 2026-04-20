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
          璧山区，重庆市下辖区，位于重庆主城区西部。幅员面积 915 平方公里，辖 6 个街道、9 个镇。
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>璧山区政府官网</DeadLink>} url="bs.cq.gov.cn">
          欢迎访问璧山区人民政府门户网站。最新政务信息、办事指南、政府公开……
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
