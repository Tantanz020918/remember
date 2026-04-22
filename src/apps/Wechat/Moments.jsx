import { useStore } from '../../store'
import { ImagePlaceholder } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { MOMENTS } from '../../data/wechatMoments'

function MomentItem({ name, text, imageName, imageSrc, imageFallbackSrc, imageFrom, imageTo, meta, location }) {
  return (
    <div className="flex gap-3 px-3 md:px-5 py-4 md:py-5 border-b border-neutral-200 bg-white">
      <ImagePlaceholder sprite={spriteForUser(name)} width={44} height={44} label={false} style={{ borderRadius: 6 }} />
      <div className="flex-1 min-w-0">
        <div className="font-bold text-[#576b95] mb-1">{name}</div>
        <div className="mb-2 leading-relaxed whitespace-pre-line break-words">{text}</div>
        {(imageSrc || imageName) && (
          <ImagePlaceholder
            name={imageName}
            src={imageSrc}
            fallbackSrc={imageFallbackSrc}
            width={220}
            height={180}
            from={imageFrom}
            to={imageTo}
          />
        )}
        <div className="text-neutral-400 text-[11px] mt-1.5 flex gap-2 flex-wrap">
          <span>{meta}</span>
          {location && <span className="text-[#576b95]">📍 {location}</span>}
        </div>
      </div>
    </div>
  )
}

export function Moments() {
  const { ending1Reached } = useStore()
  const items = MOMENTS.filter((m) => !m.hiddenUntilEnding1 || ending1Reached)
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="relative w-full h-32 md:h-44">
        <ImagePlaceholder
          name="朋友圈封面"
          from="#667eea"
          to="#764ba2"
          width="100%"
          height={180}
          label={false}
          style={{ width: '100%', height: '100%', borderRadius: 0 }}
        />
        <div className="absolute -bottom-5 right-4 md:right-10">
          <ImagePlaceholder sprite={spriteForUser('姚如月')} width={64} height={64} label={false} style={{ borderRadius: 6 }} />
        </div>
      </div>
      {items.map((m, i) => <MomentItem key={i} {...m} />)}
    </div>
  )
}
