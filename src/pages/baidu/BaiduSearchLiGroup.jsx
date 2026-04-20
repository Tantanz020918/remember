import { BrowserFrame } from '../../browser/BrowserFrame'
import { StoryLink, DeadLink } from '../../components/ui'
import { BaiduResultLayout, BaiduResultItem } from './BaiduResultLayout'
import { PageId } from '../pageIds'

export function BaiduSearchLiGroup() {
  return (
    <BrowserFrame>
      <BaiduResultLayout query="李氏集团" count="4,560,000">
        <BaiduResultItem title={<DeadLink>李氏集团 - 百度百科</DeadLink>} url="baike.baidu.com">
          李氏集团是璧山区规模最大的民营企业之一，业务涵盖房地产、教育捐助、商业运营等。多年来捐助多所学校建楼修路……
        </BaiduResultItem>

        <BaiduResultItem
          title={<StoryLink to={PageId.WEIBO_LI_GROUP_FAMILY_EDU}>「家规严格」的千金教育——走近李氏集团总裁的教女之道 - 微博</StoryLink>}
          url="weibo.com/archive-2013"
        >
          2013 年旧文 · 李氏集团总裁坚持「严父出才女」，培养出极其优秀的女儿：三岁识千字、五岁学琴、七岁拿下钢琴九级……
        </BaiduResultItem>

        <BaiduResultItem
          title={<StoryLink to={PageId.WEIBO_LI_GROUP_POST}>才发现李氏集团千金好久没更新了，是不是出事了？ - 微博</StoryLink>}
          url="weibo.com"
        >
          网友讨论帖 · @梦和MH 的动态已经停更多年……
        </BaiduResultItem>

        <BaiduResultItem title={<DeadLink>李氏集团 2024 年度报告</DeadLink>} url="lishi-group.com">
          集团 2024 年营收稳中有升，持续深耕璧山本地市场……
        </BaiduResultItem>
      </BaiduResultLayout>
    </BrowserFrame>
  )
}
