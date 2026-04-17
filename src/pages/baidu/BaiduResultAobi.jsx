import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, StoryLink, DeadLink, ImagePlaceholder } from '../../components/ui'
import { BaiduResultLayout, BaiduResultItem } from './BaiduResultLayout'

export function BaiduResultAobi() {
  return (
    <BrowserFrame>
      <BaiduResultLayout query="奥比岛" count="980,000">
        <BaiduResultItem
          title={<DeadLink>奥比岛 - 官方网站</DeadLink>}
          url="aobi.com"
          image={<ImagePlaceholder name="奥比岛 Logo" width={120} height={80} from="#f5c542" to="#ff9aa2" />}
        >
          奥比岛是一款面向少年儿童的虚拟社区游戏。
        </BaiduResultItem>
        <BaiduResultItem
          title={<StoryLink to={11}><b>奥比岛圈 - 百田圈圈 · 玩家社区论坛存档</b></StoryLink>}
          url="aobi.baitian.cn"
        >
          奥比岛玩家论坛，保留了 2010 ~ 2015 年的用户动态、帖子和个人主页存档，是老玩家的回忆角落。
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>奥比岛 - 萌娘百科</DeadLink>} url="zh.moegirl.org.cn">
          奥比岛是一款面向儿童的 ……
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>当年玩奥比岛的小朋友现在都在干嘛 - 知乎</DeadLink>} url="zhihu.com">
          2.3k 个回答 · 最高赞 4.2 万。"我的童年滤镜破碎了……"
        </BaiduResultItem>
      </BaiduResultLayout>
    </BrowserFrame>
  )
}
