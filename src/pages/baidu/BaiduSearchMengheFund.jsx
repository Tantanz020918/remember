import { BrowserFrame } from '../../browser/BrowserFrame'
import { StoryLink, DeadLink } from '../../components/ui'
import { BaiduResultLayout, BaiduResultItem } from './BaiduResultLayout'
import { PageId } from '../pageIds'

export function BaiduSearchMengheFund() {
  return (
    <BrowserFrame>
      <BaiduResultLayout query="梦和基金" count="18,720">
        <BaiduResultItem
          title={<StoryLink to={PageId.NEWS_MENGHE_FUND}>「梦和基金」成立——资助璧山贫困女生完成学业</StoryLink>}
          url="bsnews.com.cn"
        >
          由李氏集团出资设立的「梦和基金」正式启动，专项资助璧山区家庭困难的女生继续学业……
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>2018 年梦和基金首批受助学生名单公示</DeadLink>} url="bsedu.gov.cn">
          经评审委员会评定，以下同学获得 2018 年度「梦和基金」助学金……
        </BaiduResultItem>
      </BaiduResultLayout>
    </BrowserFrame>
  )
}
