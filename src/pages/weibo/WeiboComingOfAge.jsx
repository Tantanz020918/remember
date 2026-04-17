import { WeiboPostPage } from '../../browser/WeiboFrame'
import { ImagePlaceholder } from '../../components/ui'
import { CEREMONY_18 } from '../../assets/imageUrls'

const COMMENTS = [
  { author: '音乐迷', time: '02-28 19:02', authorFrom: '#ffe0f0', authorTo: '#f58ec2', content: '好美！生日快乐！🎂' },
  {
    author: '好奇宝宝', time: '02-28 20:15', authorFrom: '#c1e8ff', authorTo: '#6ec4f7',
    content: '梦和好像现在才读高一吧，怎么就成人了？',
    subComments: [
      { author: '老粉', content: '我记得她好像说过，以前因为心理问题休过学。' },
      { author: '路人', content: '唉，有钱人的烦恼~~' },
    ],
  },
  { author: '琴声悠扬', time: '02-28 21:30', authorFrom: '#d4f0c2', authorTo: '#8cd07d', content: '公主裙太好看了！' },
  { author: '小花', time: '03-01 08:44', authorFrom: '#ffe7b3', authorTo: '#ffb86b', content: '期待更多钢琴视频！' },
]

export function WeiboComingOfAge() {
  return (
    <WeiboPostPage
      author="梦和MH"
      time="2018-02-28 18:30"
      content={
        <div>
          🎂 成人礼。十八岁的我，和世界和解了吗？
          <div className="mt-2">
            <ImagePlaceholder
              name="成人礼照片"
              src={CEREMONY_18.src}
              fallbackSrc={CEREMONY_18.fallbackSrc}
              width="100%"
              height={320}
              style={{ width: '100%' }}
            />
          </div>
        </div>
      }
      likes={{ repost: 12, comment: 8, like: 156 }}
      commentsData={COMMENTS}
    />
  )
}
