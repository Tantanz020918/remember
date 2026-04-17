import { BrowserFrame } from '../../browser/BrowserFrame'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { WeiboFrame, WeiboPostDetail, WeiboComment, WeiboSubComment } from '../../browser/WeiboFrame'

export function WeiboLiGroupPost() {
  const navigate = useGameNavigate()
  return (
    <BrowserFrame>
      <WeiboFrame>
        <WeiboPostDetail
          author="八卦小分队"
          time="2020-06-14 15:22"
          authorFrom="#ffe7b3"
          authorTo="#ffb86b"
          content={
            <div>
              才发现李氏集团千金好久没更新了，是不是出事了？
              <span className="text-orange-500 cursor-pointer ml-1" onClick={() => navigate(28)}>@梦和MH</span>
            </div>
          }
          likes={{ repost: 3, comment: 7, like: 24 }}
          comments={
            <>
              <WeiboComment author="琴声悠扬" time="06-14 16:10" authorFrom="#d4f0c2" authorTo="#8cd07d">
                她弹琴真的很好听，可惜现在不更新了，难得的没架子的千金大小姐。
              </WeiboComment>
              <WeiboComment
                author="吃瓜群众"
                time="06-14 17:05"
                authorFrom="#c1e8ff"
                authorTo="#6ec4f7"
                subComments={
                  <>
                    <WeiboSubComment author="理性分析">确实，不然怎么可能网上一点消息都没。</WeiboSubComment>
                    <WeiboSubComment author="知情人">这种事情肯定要压下来啊。</WeiboSubComment>
                  </>
                }
              >
                不太可能出事吧，可能是出国了，圈子变了。
              </WeiboComment>
              <WeiboComment
                author="路过的"
                time="06-14 18:22"
                authorFrom="#e4d4ff"
                authorTo="#a97bf5"
                subComments={
                  <WeiboSubComment author="回复达人">不认识还在这里发什么，以为自己很独特。</WeiboSubComment>
                }
              >
                这谁，不认识。
              </WeiboComment>
              <WeiboComment author="老粉" time="06-15 09:30" authorFrom="#ffd1dc" authorTo="#ff9aa2">
                她好像把自己粉丝都清掉了。
              </WeiboComment>
            </>
          }
        />
      </WeiboFrame>
    </BrowserFrame>
  )
}
