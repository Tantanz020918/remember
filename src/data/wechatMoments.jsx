import { Keyword } from '../components/ui'
import { MANICURE, CAT, HAMSTER, HANDMADE, GAME } from '../assets/imageUrls'

export const MOMENTS = [
  // 达到结局一后解锁，永久显示
  {
    name: '姚如月',
    text: '十五年前的三姐妹，再次相聚啦~~',
    imageName: '三姐妹合影',
    imageFrom: '#ffd1dc',
    imageTo: '#c1e8ff',
    meta: '4月19日',
    location: '璧山',
    hiddenUntilEnding1: true,
  },
  {
    name: '姚如月',
    text: '搬家完好一阵才敢出来，胆小猫',
    imageName: '窗台上的猫',
    imageSrc: CAT.src,
    imageFallbackSrc: CAT.fallbackSrc,
    meta: '4月15日',
  },
  { name: '学姐', text: '📢五一泰国游有无拼团的！！！！！', meta: '4月12日' },
  {
    name: '琳琳',
    text: '现在开始玩是不是太晚了',
    imageSrc: GAME.src,
    imageFallbackSrc: GAME.fallbackSrc,
    meta: '4月10日',
  },
  {
    name: '青青',
    text: '乖宝宝亲死',
    imageName: '小仓鼠',
    imageSrc: HAMSTER.src,
    imageFallbackSrc: HAMSTER.fallbackSrc,
    meta: '4月10日',
  },
  {
    name: '设计-周雪',
    text: '做手工真好玩~~~太可爱啦！！！',
    imageName: '手工',
    imageSrc: HANDMADE.src,
    imageFallbackSrc: HANDMADE.fallbackSrc,
    meta: '4月8日',
  },
  {
    name: '沁心美甲美睫',
    text: '大家快来做美甲，今日可约~',
    imageName: '美甲',
    imageSrc: MANICURE.src,
    imageFallbackSrc: MANICURE.fallbackSrc,
    meta: '3月5日',
  },
  {
    name: '沁心美甲美睫',
    text: (
      <>
        🎈ꫛꫀꪝ❥<br/>
        🐎<Keyword>马年到</Keyword>，鸿运照！<br/>
        🎉新的一年㊗你<br/>
        策马扬鞭、前程似锦、万事顺遂、步步高升<br/>
        所有美好皆 "奔腾" 而来✨🧨💰🎁
      </>
    ),
    meta: '2月17日',
  },
  { name: '老张', text: '杭州冷死了。。。。。。谁来救救我', meta: '2月5日' },
]
