import { BrowserFrame } from '../../browser/BrowserFrame'
import { StoryLink, DeadLink } from '../../components/ui'
import { BaiduResultLayout, BaiduResultItem } from './BaiduResultLayout'

export function BaiduSearchDreamScholarship() {
  return (
    <BrowserFrame>
      <BaiduResultLayout query="梦之奖学金" count="23,400">
        <BaiduResultItem
          title={<StoryLink to={24}>「梦之奖学金」设立——助力璧山学子筑梦未来</StoryLink>}
          url="bsnews.com.cn"
        >
          璧山本地企业李氏集团出资设立「梦之奖学金」，旨在鼓励优秀学生……
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>2018 年梦之奖学金获奖名单公示</DeadLink>} url="bsedu.gov.cn">
          经评审委员会评定，以下同学获得 2018 年度「梦之奖学金」……
        </BaiduResultItem>
      </BaiduResultLayout>
    </BrowserFrame>
  )
}
