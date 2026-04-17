import { ImagePlaceholder, Keyword } from '../../components/ui'
import { MANICURE, CAT, HAMSTER, HANDMADE, spriteForUser, GAME } from '../../assets/imageUrls'

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
      <MomentItem
        name="姚如月"
        text="搬家完好一阵才敢出来，胆小猫"
        imageName="窗台上的猫"
        imageSrc={CAT.src}
        imageFallbackSrc={CAT.fallbackSrc}
        meta="今天 19:02"
      />
       <MomentItem
        name="学姐"
        text="📢五一泰国游有无拼团的！！！！！"
        meta="4月12日"
      />
       <MomentItem
        name="琳琳"
        text="现在开始玩是不是太晚了"
        meta="4月11日"
             imageSrc={GAME.src}
        imageFallbackSrc={GAME.fallbackSrc}
        meta="今天 19:02"
      />
                
      <MomentItem
        name="青青"
        text="乖宝宝亲死"
        imageName="小仓鼠"
        imageSrc={HAMSTER.src}
        imageFallbackSrc={HAMSTER.fallbackSrc}
        meta="4月10日"
      />
      <MomentItem
        name="设计-周雪"
        text="做手工真好玩~~~太可爱啦！！！"
        imageName="手工"
        imageSrc={HANDMADE.src}
        imageFallbackSrc={HANDMADE.fallbackSrc}
        meta="4月8日"
      />
      <MomentItem
        name="沁心美甲美睫"
        text="大家快来做美甲，今日可约~"
        imageName="美甲"
        imageSrc={MANICURE.src}
        imageFallbackSrc={MANICURE.fallbackSrc}
        meta="3月5日"
      />
      <MomentItem
        name="沁心美甲美睫"
        text={<>
        🎈ꫛꫀꪝ❥<br/>
🐎<Keyword>马年到</Keyword>，鸿运照！<br/>
🎉新的一年㊗你<br/>
策马扬鞭、前程似锦、万事顺遂、步步高升<br/>
所有美好皆 "奔腾" 而来✨🧨💰🎁</>}
        meta="2月17日"
      />
      <MomentItem
        name="老张"
        text="杭州冷死了。。。。。。谁来救救我"
        meta="2月5日"
      />
    </div>
  )
}
