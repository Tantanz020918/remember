import { BrowserFrame } from '../../browser/BrowserFrame'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { WeiboFrame, WeiboProfileHeader, WeiboPostDetail, WeiboComment, WeiboLikeItem } from '../../browser/WeiboFrame'
import { ImagePlaceholder } from '../../components/ui'

export function WeiboDengFengShuo() {
  const navigate = useGameNavigate()

  return (
    <BrowserFrame>
      <WeiboFrame>
        <WeiboProfileHeader
          name="等风说"
          bio="剪辑爱好者 / 风会带来消息"
          followCount="89"
          fansCount="1,234"
          postCount="67"
          bgFrom="#ffecd2"
          bgTo="#fcb69f"
        >
          <button className="px-5 py-1.5 bg-orange-500 text-white rounded-full text-sm cursor-pointer border-none font-medium">+ 关注</button>
        </WeiboProfileHeader>

        <WeiboPostDetail
          author="等风说"
          time="2017-03-14 20:30"
          authorFrom="#ffecd2"
          authorTo="#fcb69f"
          content={
            <div>
              剪了一个视频送给 <span className="text-orange-500">@梦和MH</span>，希望她喜欢～
              <div className="mt-2">
                <ImagePlaceholder name="视频封面" width="100%" height={200} from="#667eea" to="#764ba2" style={{ width: '100%' }} />
              </div>
            </div>
          }
          likes={{ repost: 5, comment: 3, like: 42 }}
          comments={
            <>
              <WeiboComment author="琴声悠扬" time="03-14 21:00" authorFrom="#d4f0c2" authorTo="#8cd07d">
                剪得好棒！
              </WeiboComment>
              <WeiboComment author="音乐迷" time="03-14 22:10" authorFrom="#ffe0f0" authorTo="#f58ec2">
                这个转场太绝了！
              </WeiboComment>
              <WeiboComment author="小花" time="03-15 08:44" authorFrom="#ffe7b3" authorTo="#ffb86b">
                梦和会喜欢的！
              </WeiboComment>
            </>
          }
          onLikeTab={
            <>
              <WeiboLikeItem
                name="微博用户139293"
                time="2023-05-18"
                onClick={() => navigate(33)}
              />
              <WeiboLikeItem name="琴声悠扬" time="2017-03-14" />
              <WeiboLikeItem name="音乐迷" time="2017-03-14" />
              <WeiboLikeItem name="小花" time="2017-03-14" />
              <WeiboLikeItem name="星语者" time="2017-03-14" />
              <WeiboLikeItem name="梦幻泡泡" time="2017-03-14" />
            </>
          }
        />
      </WeiboFrame>
    </BrowserFrame>
  )
}
