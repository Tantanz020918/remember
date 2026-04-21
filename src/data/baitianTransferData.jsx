import { Keyword, ImagePlaceholder, StoryLink } from '../components/ui'
import { PageId } from '../pages/pageIds'

export const TRANSFER_FLOORS = [
  {
    owner: true,
    avatarName: '闺蜜头像 1',
    avatarFrom: '#ffccee',
    avatarTo: '#ff99cc',
    userName: '采晴0826',
    userLv: 'Lv.8',
    userSign: '【楼主】天天开心',
    meta: <>1 楼 · 2013-05-30 19:44</>,
    content: (
      <>
        <p>我最好的朋友前天转学走了。我们从一年级就一起，一起买辣条、一起出去玩，她爸妈管得比我松，所以总是她来找我玩。</p>
        <p>上次我们还约好暑假一起去江边放孔明灯的，结果她说她要走了……我好难过。</p>
        <p>我们以前最喜欢在校门口那家小卖部买 5 毛钱一袋的辣条，她每次都要分我最大的那一根。</p>
        <div className="my-2">
          <ImagePlaceholder name="回忆插图" width={260} height={140} from="#ffe0a3" to="#ffb3d9" />
        </div>
        <p>—— 不知道她现在过得好不好。</p>
      </>
    ),
  },
  {
    avatarFrom: '#ffd1dc', avatarTo: '#ff9aa2', userName: '云朵软糖', meta: '2 楼',
    content: <p>你们没有加联系方式吗？</p>,
  },
  {
    avatarFrom: '#fff4b3', avatarTo: '#f5c542', userName: '星星点灯', meta: '3 楼',
    content: <p>你可以在这里留下一些线索呀，万一她以后看到呢！</p>,
    subReplies: [
      {
        userName: '采晴0826', replyTo: '星星点灯',
        content: (
          <>有道理！我把QQ放在 <StoryLink to={PageId.POST_ENCRYPTED}>这个帖子</StoryLink> 里了！为了防止坏人乱加好友，我设置了密码。如月，如果你看到了一定要加我呀。</>
        ),
      },
    ],
  },
  {
    avatarName: '闺蜜头像 2', avatarFrom: '#c8f0b8', avatarTo: '#8ed687',
    userName: '梦の伤', userLv: 'Lv.3', meta: '4 楼',
    content: <p>呜呜呜呜，她能看到的概率也太小了吧~~~</p>,
  },
]
