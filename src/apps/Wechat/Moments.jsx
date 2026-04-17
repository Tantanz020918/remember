import { ImagePlaceholder } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { MOMENTS } from '../../data/wechatMoments'

function MomentItem({ name, text, imageName, imageSrc, imageFallbackSrc, imageFrom, imageTo, meta }) {
  return (
    <div className="flex gap-3 px-5 py-5 border-b border-neutral-200 bg-white">
      <ImagePlaceholder sprite={spriteForUser(name)} width={44} height={44} label={false} style={{ borderRadius: 6 }} />
      <div className="flex-1">
        <div className="font-bold text-[#576b95] mb-1">{name}</div>
        <div className="mb-2 leading-relaxed whitespace-pre-line">{text}</div>
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
        <div className="text-neutral-400 text-[11px] mt-1.5">{meta}</div>
      </div>
    </div>
  )
}

export function Moments() {
  return (
    <div className="flex-1 overflow-y-auto">
      <div className="relative w-full h-44">
        <ImagePlaceholder
          name="朋友圈封面"
          from="#667eea"
          to="#764ba2"
          width="100%"
          height={180}
          label={false}
          style={{ width: '100%', borderRadius: 0 }}
        />
        <div className="absolute -bottom-5 right-10">
          <ImagePlaceholder sprite={spriteForUser('姚如月')} width={64} height={64} label={false} style={{ borderRadius: 6 }} />
        </div>
      </div>
      {MOMENTS.map((m, i) => <MomentItem key={i} {...m} />)}
    </div>
  )
}
