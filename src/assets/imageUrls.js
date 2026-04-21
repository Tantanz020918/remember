// Local fallback imports (bundled by Vite, fingerprinted, always available)
import bestie1Local from './imgs/avatars/bestie_1.webp'
import bestie2Local from './imgs/avatars/bestie_2.webp'
import sprite1Local from './imgs/avatars/sprite_1.webp'
import sprite2Local from './imgs/avatars/sprite_2.webp'
import flippedLocal from './imgs/flipped.webp'
import ceremony18Local from './imgs/others/18ceremony.webp'
import hamsterLocal from './imgs/others/hamster.webp'
import handmadeLocal from './imgs/others/handmade-artical.webp'
import gameLocal from './imgs/others/game.webp'
import catLocal from './imgs/others/cat.webp'
import themeParkLocal from './imgs/others/theme-park.webp'
import manicureLocal from './imgs/others/manicure.webp'
import reportLocal from './imgs/report.webp'

// CDN 链接结构：{CDN_PREFIX}/{key}/{path}
// 图床每批上传会生成一个共享前缀 + 每张图一个随机 4 位 key。
// 链接过期换图时，只需更新 CDN_PREFIX 和 IMAGES 里各条目的 key。
const CDN_PREFIX = 'https://test.fukit.cn/autoupload/f/S9HLukMuH_jaG2-bgCx4dLKXl_QqVl-bpSwqP4fJO68/20260420'

const IMAGES = {
  bestie_1:    { key: 'gf6j', path: '0X0/imgs/avatars/bestie_1.webp',     fallback: bestie1Local },
  bestie_2:    { key: 'Ny6z', path: '0X0/imgs/avatars/bestie_2.webp',     fallback: bestie2Local },
  sprite_1:    { key: 'NNBo', path: '0X0/imgs/avatars/sprite_1.webp',     fallback: sprite1Local },
  sprite_2:    { key: 'cbPF', path: '0X0/imgs/avatars/sprite_2.webp',     fallback: sprite2Local },
  flipped:     { key: 'eVLc', path: '0X0/imgs/flipped.webp',              fallback: flippedLocal },
  ceremony_18: { key: '33wT', path: '0X0/imgs/others/18ceremony.webp',    fallback: ceremony18Local },
  hamster:     { key: '1yGx', path: '0X0/imgs/others/hamster.webp',       fallback: hamsterLocal },
  handmade:    { key: 'tNzt', path: '0X0/imgs/others/handmade-artical.webp', fallback: handmadeLocal },
  game:        { key: 'p5Vy', path: '0X0/imgs/others/game.webp',          fallback: gameLocal },
  cat:         { key: 'QJpD', path: '0X0/imgs/others/cat.webp',           fallback: catLocal },
  theme_park:  { key: 'O5Ux', path: '0X0/imgs/others/theme-park.webp',    fallback: themeParkLocal },
  manicure:    { key: 'WhMn', path: '0X0/imgs/others/manicure.webp',      fallback: manicureLocal },
  report:      {
    // 这张图在另一批上传里，完整 URL 与其它资源的 CDN_PREFIX 不同，这里直接覆写。
    fullUrl: 'https://test.fukit.cn/autoupload/f/S9HLukMuH_jaG2-bgCx4dLKXl_QqVl-bpSwqP4fJO68/20260421/vwsd/0X0/imgs/report.webp',
    fallback: reportLocal,
  },
}

/**
 * 根据 IMAGES 里的逻辑名取图。
 * 返回 { src, fallbackSrc }，供 <ImagePlaceholder> 等组件使用。
 */
export function getImage(name) {
  const entry = IMAGES[name]
  if (!entry) return { src: null, fallbackSrc: null }
  return {
    src: entry.fullUrl ?? `${CDN_PREFIX}/${entry.key}/${entry.path}`,
    fallbackSrc: entry.fallback,
  }
}

// ===== 特殊固定图片 =====
export const BESTIE_1 = getImage('bestie_1')
export const BESTIE_2 = getImage('bestie_2')
export const FLIPPED = getImage('flipped') // 梦和MH背景
export const CEREMONY_18 = getImage('ceremony_18') // 成人礼

// ===== 可复用场景照片 =====
export const HAMSTER = getImage('hamster')
export const HANDMADE = getImage('handmade')
export const GAME = getImage('game')
export const CAT = getImage('cat')
export const THEME_PARK = getImage('theme_park')
export const MANICURE = getImage('manicure')
export const REPORT_IMAGE = getImage('report')

// ===== 精灵图头像系统 =====
// 共 2 张精灵图 × 5×5 = 50 个头像，索引从 1 到 50
// 1~25 在 sprite_1，26~50 在 sprite_2
const SPRITE_1 = getImage('sprite_1')
const SPRITE_2 = getImage('sprite_2')
const SHEETS = [SPRITE_1, SPRITE_2]
const GRID = 5
const CELLS_PER_SHEET = GRID * GRID
const TOTAL = SHEETS.length * CELLS_PER_SHEET // 50

/**
 * 按编号获取头像（1~50）。
 * 1~25 取自 sprite_1（左到右、上到下），26~50 取自 sprite_2。
 * 超出范围会 clamp 到 1。
 * @param {number} index 1 到 50
 * @returns {{ src, fallbackSrc, row, col, cols, rows }}
 */
export function spriteByIndex(index) {
  const n = Number.isFinite(index) && index >= 1 && index <= TOTAL ? Math.floor(index) : 1
  const zeroBased = n - 1
  const sheetIdx = Math.floor(zeroBased / CELLS_PER_SHEET)
  const cellIdx = zeroBased % CELLS_PER_SHEET
  const row = Math.floor(cellIdx / GRID)
  const col = cellIdx % GRID
  return { ...SHEETS[sheetIdx], row, col, cols: GRID, rows: GRID }
}

// ===== 用户 → 头像编号映射 =====
// 所有需要稳定头像的用户在这里手动指定编号。
// 修改数字即可换头像（1~50）。未登记的用户走自动分配。
const USER_AVATAR_INDEX = {
  // 主角
  姚如月: 5,
  雨季: 4,
  梦和MH: 3,
  采晴: 7,
  如梦令: 11,

  // 微信联系人
  青青: 2,
  妈妈: 10,
  '设计-周雪': 12,
  沁心美甲美睫: 14,
  梦和妈妈: 16,

  // QQ 好友 / 群成员
  糖糖不吃糖: 20,
  奥比小王子: 22,
  清风: 24,
  小鱼干: 26,
  云朵软糖: 28,
  星星点灯: 30,
  梦幻泡泡: 32,
  路人甲: 34,
  阳光少年: 36,
  冰淇淋酱: 38,
  暮光之城: 40,
  芒果布丁: 42,
  '沐季千柠（群主）': 44,
  '编剧+女主': 46,
  '男主·陆远': 48,
  '女配·花痴A': 50,

  // 论坛路人
  小糊涂: 8,
  技术小达人: 9,
  云朵软糖回复: 14,
  路过的: 13,
  甜甜圈: 15,
  紫色泡泡: 17,

  // 微博路人
  八卦小分队: 19,
  琴声悠扬: 21,
  音乐迷: 23,
  小花: 25,
  好奇宝宝: 27,
  老粉: 29,
  吃瓜群众: 31,
  理性分析: 33,
  知情人: 35,
  回复达人: 37,
  路过的网友: 39,
  等风说: 41,
  安眠: 43,

  // 媒体/机构
  '璧山日报·教育': 6,
}

// 自动分配：未在 USER_AVATAR_INDEX 中登记的用户
// 会从剩余空编号中取下一个，避免和主要用户撞头像。
const usedIndices = new Set(Object.values(USER_AVATAR_INDEX))
const runtimeAssignments = new Map()
let nextAutoIndex = 1

function autoAssign(userName) {
  if (runtimeAssignments.has(userName)) return runtimeAssignments.get(userName)
  while (usedIndices.has(nextAutoIndex) && nextAutoIndex <= TOTAL) nextAutoIndex++
  const assigned = nextAutoIndex > TOTAL ? ((nextAutoIndex - 1) % TOTAL) + 1 : nextAutoIndex
  runtimeAssignments.set(userName, assigned)
  usedIndices.add(assigned)
  nextAutoIndex++
  return assigned
}

/**
 * 便捷接口：通过用户名获取头像。
 * 先查 USER_AVATAR_INDEX 映射；没登记的走自动分配。
 * 内部仍走 spriteByIndex。
 */
export function spriteForUser(userName) {
  if (!userName) return null
  const preset = USER_AVATAR_INDEX[userName]
  const index = preset ?? autoAssign(userName)
  return spriteByIndex(index)
}
