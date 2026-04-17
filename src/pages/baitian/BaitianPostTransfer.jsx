import { BrowserFrame } from '../../browser/BrowserFrame'
import { BaitianFrame } from '../../browser/BaitianFrame'
import { Keyword, ImagePlaceholder, StoryLink } from '../../components/ui'
import { ForumFloor } from './ForumFloor'

export function BaitianPostTransfer() {
  return (
    <BrowserFrame>
      <BaitianFrame>
        <div className="bg-white rounded-lg border border-pink-200 overflow-hidden">
          <div className="px-5 py-3.5 bg-linear-to-r from-pink-100 to-white text-[17px] font-bold text-[#d16b8a] border-b-2 border-[#e891b0]">
            【心情】朋友转学了好伤心
          </div>
          <ForumFloor
            owner
            avatarName="闺蜜头像 1"
            avatarFrom="#ffccee"
            avatarTo="#ff99cc"
            userName="采晴0826"
            userLv="Lv.8"
            userSign="【楼主】天天开心"
            meta={
              <>
                1 楼 · <Keyword>2011-06-28</Keyword> 19:44
              </>
            }
          >
            <p>
              我最好的朋友前天转学走了。我们从一年级就一起，一起买辣条、一起出去玩，她爸妈管得比我松，所以总是她来找我玩。
            </p>
            <p>上次我们还约好暑假一起去江边放孔明灯的，结果她说她要走了……我好难过。</p>
            <p>我们以前最喜欢在校门口那家小卖部买 5 毛钱一袋的辣条，她每次都要分我最大的那一根。</p>
            <div className="my-2">
              <ImagePlaceholder
                name="回忆插图"
                width={260}
                height={140}
                from="#ffe0a3"
                to="#ffb3d9"
              />
            </div>
            <p>—— 不知道她现在过得好不好。</p>
          </ForumFloor>
          <ForumFloor
            avatarName=""
            avatarFrom="#ffd1dc"
            avatarTo="#ff9aa2"
            userName="云朵软糖"
            meta="2 楼"
          >
            <p>你们没有加联系方式吗？</p>
          </ForumFloor>
          <ForumFloor
            avatarName=""
            avatarFrom="#fff4b3"
            avatarTo="#f5c542"
            userName="星星点灯"
            meta="3 楼"
            subReplies={[
              {
                userName: '采晴0826',
                replyTo: '星星点灯',
                content: (
                  <>
                    有道理！我把QQ放在 <StoryLink to={17}>这个帖子</StoryLink> 里了！为了防止坏人乱加好友，我设置了密码。如月，如果你看到了一定要加我呀。
                  </>
                ),
              },
            ]}
          >
            <p>你可以在这里留下一些线索呀，万一她以后看到呢！</p>
          </ForumFloor>
          <ForumFloor
            avatarName="闺蜜头像 2"
            avatarFrom="#c8f0b8"
            avatarTo="#8ed687"
            userName="薄荷夏天"
            userLv="Lv.3"
            meta="4 楼"
          >
            <p>她能看到的概率也太小了吧~~~</p>
          </ForumFloor>
        </div>
      </BaitianFrame>
    </BrowserFrame>
  )
}
