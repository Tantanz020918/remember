import { ImagePlaceholder } from '../../components/ui'
import { MANICURE, CAT, HAMSTER, HANDMADE, spriteForUser } from '../../assets/imageUrls'

function MomentItem({ name, text, imageName, imageSrc, imageFallbackSrc, imageFrom, imageTo, meta }) {
  return (
    <div className="flex gap-3 px-5 py-5 border-b border-neutral-200 bg-white">
      <ImagePlaceholder sprite={spriteForUser(name)} width={44} height={44} label={false} style={{ borderRadius: 6 }} />
      <div className="flex-1">
        <div className="font-bold text-[#576b95] mb-1">{name}</div>
        <div className="mb-2 leading-relaxed">{text}</div>
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
      <MomentItem
        name="姚如月"
        text="新室友到家了～小仓鼠终于肯出来见人了。"
        imageName="小仓鼠"
        imageSrc={HAMSTER.src}
        imageFallbackSrc={HAMSTER.fallbackSrc}
        meta="今天 15:02"
      />
      <MomentItem
        name="青青"
        text="今天剧追完了，好看 🎬"
        imageName="剧照"
        imageFrom="#c1d3ff"
        imageTo="#e4d4ff"
        meta="昨天 20:11"
      />
      <MomentItem
        name="姚如月"
        text="新家有窗就够了，邻居家的猫也爱来串门。"
        imageName="窗台上的猫"
        imageSrc={CAT.src}
        imageFallbackSrc={CAT.fallbackSrc}
        meta="4月10日"
      />
      <MomentItem
        name="设计-周雪"
        text="新作品出炉～熬了三个通宵终于交稿。"
        imageName="新作品"
        imageSrc={HANDMADE.src}
        imageFallbackSrc={HANDMADE.fallbackSrc}
        meta="4月8日"
      />
      <MomentItem
        name="姚如月"
        text="24 岁，生日快乐。"
        imageName="生日美甲"
        imageSrc={MANICURE.src}
        imageFallbackSrc={MANICURE.fallbackSrc}
        meta="3月7日"
      />
      <MomentItem name="沁心美甲美睫" text="祝大家马年吉祥。" meta="2月17日" />
    </div>
  )
}
