import { BrowserFrame } from '../../browser/BrowserFrame'
import { useStore } from '../../store'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { WeiboFrame, WeiboProfileHeader, WeiboPost } from '../../browser/WeiboFrame'
import { ImagePlaceholder, Keyword } from '../../components/ui'
import { FLIPPED, CEREMONY_18 } from '../../assets/imageUrls'
import { PageId } from '../pageIds'

export function MengheWeibo() {
  const { followedMenghe, setFlag } = useStore()
  const navigate = useGameNavigate()

  return (
    <BrowserFrame>
      <WeiboFrame>
        <WeiboProfileHeader
          name="梦和MH"
          bio="🎹 音乐是唯一的语言"
          followCount="12"
          fansCount="146"
          postCount="346"
          bgImage={FLIPPED}
        >
          {!followedMenghe ? (
              <button onClick={() => setFlag('followedMenghe', true)} className="px-5 py-1.5 bg-orange-500 text-white rounded-full text-sm cursor-pointer hover:bg-orange-600 border-none"><Keyword>+ 关注</Keyword></button>
          ) : (
            <span className="px-5 py-1.5 bg-neutral-200 text-neutral-500 rounded-full text-sm">已关注</span>
          )}
        </WeiboProfileHeader>

        {followedMenghe && (
          <>
            <WeiboPost author="梦和MH" time="2018-03-06" onClick={() => navigate(PageId.WEIBO_FANS_POST_2)}>
              <div className="flex items-center gap-1 mb-1">
                <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded">仅粉丝可见</span>
              </div>
              [点击查看]
            </WeiboPost>
            <WeiboPost author="梦和MH" time="2018-03-10" onClick={() => navigate(PageId.WEIBO_FANS_POST_1)}>
              <div className="flex items-center gap-1 mb-1">
                <span className="bg-amber-100 text-amber-700 text-xs px-2 py-0.5 rounded">仅粉丝可见</span>
              </div>
              [点击查看]
            </WeiboPost>
          </>
        )}

        <WeiboPost author="梦和MH" time="2018-02-28" onClick={() => navigate(PageId.WEIBO_COMING_OF_AGE)}>
          🎂 成人礼。十八岁的我，和世界和解了吗？
          <div className="mt-2">
            <ImagePlaceholder name="成人礼照片" src={CEREMONY_18.src} fallbackSrc={CEREMONY_18.fallbackSrc} width={360} height={220} />
          </div>
        </WeiboPost>
        <WeiboPost author="梦和MH" time="2017-12-31">
          最后一天了。希望明年一切都好。🎹
        </WeiboPost>
        <WeiboPost author="梦和MH" time="2017-08-15">
          新学的曲子～肖邦夜曲第20号，弹得不好，大家多多包涵。
          <div className="mt-2"><ImagePlaceholder name="钢琴视频" width={300} height={180} from="#667eea" to="#764ba2" /></div>
        </WeiboPost>
      </WeiboFrame>
    </BrowserFrame>
  )
}
