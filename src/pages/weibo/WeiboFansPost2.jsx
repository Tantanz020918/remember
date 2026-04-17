import { BrowserFrame } from '../../browser/BrowserFrame'
import { WeiboFrame, WeiboPostDetail, WeiboComment } from '../../browser/WeiboFrame'

const GARBLED = '瀵逛笉璧峰涓嶈捣'

export function WeiboFansPost2() {
  return (
    <BrowserFrame>
      <WeiboFrame>
        <WeiboPostDetail
          author="梦和MH"
          time="2018-03-06 02:17"
          authorFrom="#2c3e50"
          authorTo="#4ca1af"
          content={
            <div>
              <div className="flex items-center gap-1 mb-2">
                <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded">仅粉丝可见</span>
              </div>
              <div className="font-mono text-neutral-600 leading-relaxed break-all">
                {Array(28).fill(GARBLED).join('')}
              </div>
            </div>
          }
          likes={{ repost: 0, comment: 4, like: 12 }}
          comments={
            <>
              <WeiboComment author="琴声悠扬" time="03-06 08:00" authorFrom="#d4f0c2" authorTo="#8cd07d">
                怎么了？？
              </WeiboComment>
              <WeiboComment author="音乐迷" time="03-06 08:22" authorFrom="#ffe0f0" authorTo="#f58ec2">
                这是乱码吗？
              </WeiboComment>
              <WeiboComment author="小花" time="03-06 09:15" authorFrom="#ffe7b3" authorTo="#ffb86b">
                梦和你还好吗？
              </WeiboComment>
              <WeiboComment author="等风说" time="03-06 10:40" authorFrom="#ffecd2" authorTo="#fcb69f">
                ……
              </WeiboComment>
            </>
          }
        />
      </WeiboFrame>
    </BrowserFrame>
  )
}
