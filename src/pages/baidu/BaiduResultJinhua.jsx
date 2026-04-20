import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, StoryLink, DeadLink, ImagePlaceholder } from '../../components/ui'
import { BaiduResultLayout, BaiduResultItem } from './BaiduResultLayout'
import { PageId } from '../pageIds'

export function BaiduResultJinhua() {
  return (
    <BrowserFrame>
      <BaiduResultLayout query="金花小学" count="51,300">
        <BaiduResultItem
          title={<StoryLink to={PageId.JINHUA_HOME}><b>金花小学 - 官方网站</b></StoryLink>}
          url="www.jinhuaxx.edu.cn"
          image={<ImagePlaceholder name="金花小学校门" width={120} height={80} from="#ffd54f" to="#81c784" />}
          sub={<>· <DeadLink>学校简介</DeadLink> · <DeadLink>师资力量</DeadLink> · <DeadLink>新闻动态</DeadLink></>}
        >
          璧山区金花小学创建于 1954 年，是一所全日制公立小学，现有教学班 36 个，师生 1800 余人。
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>金花小学 2018 年秋季招生简章_璧山区教育网</DeadLink>} url="bsedu.gov.cn">
          按学区划分，金花小学 2018 秋季共招收一年级新生 6 个班……
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>璧山日报：金花小学荣获市级文明校园_璧山新闻</DeadLink>} url="bsnews.com.cn">
          2020 年 12 月报道，金花小学因连续三年德育评估优秀……
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>金花小学门口那家辣条店还在吗？ - 知乎</DeadLink>} url="zhihu.com">
          34 个回答 · 已有 2.1k 人关注 · 2019 年最新回答……
        </BaiduResultItem>
      </BaiduResultLayout>
    </BrowserFrame>
  )
}
