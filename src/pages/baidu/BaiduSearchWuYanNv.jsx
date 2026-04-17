import { BrowserFrame } from '../../browser/BrowserFrame'
import { StoryLink, DeadLink, ImagePlaceholder } from '../../components/ui'
import { BaiduResultLayout, BaiduResultItem } from './BaiduResultLayout'

export function BaiduSearchWuYanNv() {
  return (
    <BrowserFrame>
      <BaiduResultLayout query="富士山下" count="1,240,000">
        <BaiduResultItem
          title={<DeadLink>富士山下 - QQ音乐</DeadLink>}
          url="y.qq.com"
          image={<ImagePlaceholder name="专辑封面" width={80} height={80} from="#e4d4ff" to="#a97bf5" />}
        >
          《富士山下》是一首由陈奕迅演唱的歌曲，收录于专辑《What's Going On...?》。歌词：「曾沿着雪路浪游，为何为好事泪流」
        </BaiduResultItem>
        <BaiduResultItem
          title={<StoryLink to={21}>富士山下埋葬的の❤ - 个人网站</StoryLink>}
          url="wuyannv-qing.love"
        >
          一个清新可爱的个人主页。需要密码访问。
        </BaiduResultItem>
        <BaiduResultItem title={<DeadLink>陈奕迅《富士山下》歌词 - 歌词网</DeadLink>} url="geciwang.com">
          完整歌词：曾沿着雪路浪游 为何为好事泪流 / 谁能凭爱意要富士山私有……
        </BaiduResultItem>
      </BaiduResultLayout>
    </BrowserFrame>
  )
}
