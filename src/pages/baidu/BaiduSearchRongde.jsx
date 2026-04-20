import { BrowserFrame } from '../../browser/BrowserFrame'
import { StoryLink, DeadLink } from '../../components/ui'
import { BaiduResultLayout, BaiduResultItem } from './BaiduResultLayout'
import { PageId } from '../pageIds'

export function BaiduSearchRongde() {
  return (
    <BrowserFrame>
      <BaiduResultLayout query="荣德心理咨询所" count="32,800">
        <BaiduResultItem
          title={<StoryLink to={PageId.RONGDE_CENTER}>荣德心理咨询所 · 官方网站</StoryLink>}
          url="rongde-psy.com"
        >
          重庆本地知名心理咨询机构，成立于 2005 年，擅长青少年焦虑障碍、抑郁症、创伤后应激障碍等个性化干预。
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>荣德心理咨询所 2023 年度报告</DeadLink>} url="rongde-psy.com/annual">
          本年度共接诊 1,200 余例，其中青少年焦虑障碍占 42%……
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>荣德心理咨询所 · 百度百科</DeadLink>} url="baike.baidu.com">
          荣德心理咨询所，由荣德教授于 2005 年创办。主要业务：心理评估、CBT、家庭治疗……
        </BaiduResultItem>
      </BaiduResultLayout>
    </BrowserFrame>
  )
}
