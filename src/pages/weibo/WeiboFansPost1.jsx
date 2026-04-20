import { useStore } from '../../store'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { WeiboPostPage } from '../../browser/WeiboFrame'
import { PasswordLock, Keyword } from '../../components/ui'

function PostContent() {
  const navigate = useGameNavigate()

  const COMMENTS = [
    {
      author: <Keyword>等风说</Keyword>, authorName: '等风说', time: '03-10 22:30', authorFrom: '#ffecd2', authorTo: '#fcb69f',
      onClick: () => navigate(31),
      content: '等你回来。',
      subComments: [
        { author: '梦和MH', content: <>真的很感谢你为我剪的视频，我会<Keyword>常回来看看</Keyword>。</> },
      ],
    },
    { author: '琴声悠扬', time: '03-10 23:01', authorFrom: '#d4f0c2', authorTo: '#8cd07d', content: '你要去哪里啊？' },
    { author: '音乐迷', time: '03-11 08:15', authorFrom: '#ffe0f0', authorTo: '#f58ec2', content: '会回来的吧？等你！' },
  ]

  return (
    <WeiboPostPage
      author="梦和MH"
      time="2018-03-10 22:15"
      authorFrom="#2c3e50"
      authorTo="#4ca1af"
      content={
        <div>
          <div className="flex items-center gap-1 mb-2">
            <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded">仅粉丝可见</span>
          </div>
          <p>现实生活遇到了重大打击。最重要的人离开了我。</p>
          <p className="mt-2">我作恶太多，当年种下的种子终于结出了恶果。</p>
          <p className="mt-2">准备以新的身份出国休养。大家勿念。</p>
        </div>
      }
      likes={{ repost: 2, comment: 5, like: 89 }}
      commentsData={COMMENTS}
    />
  )
}

export function WeiboFansPost1() {
  const { fansPost1Unlocked, setFlag } = useStore()

  return (
    <BrowserFrame>
      {!fansPost1Unlocked ? (
        <PasswordLock
          prompt="🔒 粉丝可见帖子 · 我最爱的电影是什么？"
          errorHint="注意看我的主页。"
          answer="怦然心动"
          onUnlock={() => setFlag('fansPost1Unlocked', true)}
          className="min-h-[400px]"
        />
      ) : (
        <PostContent />
      )}
    </BrowserFrame>
  )
}
