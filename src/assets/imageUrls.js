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

const CDN = 'https://test.fukit.cn/autoupload/fr/b4gIuJ4azJXqOOPtrTQN79PVUUpAlzPwgP17t_pPbMmyl5f0KlZfm6UsKj-HyTuv/20260417'

const img = (path, fallback) => ({ src: `${CDN}${path}`, fallbackSrc: fallback })

// ===== 特殊固定图片 =====
export const BESTIE_1 = img('/l2Z5/0X0/imgs/avatars/bestie_1.webp', bestie1Local)
export const BESTIE_2 = img('/IxFv/0X0/imgs/avatars/bestie_2.webp', bestie2Local)
export const FLIPPED = img('/A7Cq/0X0/imgs/flipped.webp', flippedLocal) // 梦和MH背景
export const CEREMONY_18 = img('/W3w7/0X0/imgs/others/18ceremony.webp', ceremony18Local) // 成人礼

// ===== 可复用场景照片 =====
export const HAMSTER = img('/icLz/0X0/imgs/others/hamster.webp', hamsterLocal)
export const HANDMADE = img('/0BsX/0X0/imgs/others/handmade-artical.webp', handmadeLocal)
export const GAME = img('/QiVI/0X0/imgs/others/game.webp', gameLocal)
export const CAT = img('/T64X/0X0/imgs/others/cat.webp', catLocal)
export const THEME_PARK = img('/tcmF/0X0/imgs/others/theme-park.webp', themeParkLocal)
export const MANICURE = img('/48LD/0X0/imgs/others/manicure.webp', manicureLocal)

// ===== 精灵图头像系统 =====
// 共 2 张精灵图 × 5×5 = 50 个头像，索引从 1 到 50
// 1~25 在 sprite_1，26~50 在 sprite_2
const SPRITE_1 = img('/BuzU/0X0/imgs/avatars/sprite_1.webp', sprite1Local)
const SPRITE_2 = img('/bDnU/0X0/imgs/avatars/sprite_2.webp', sprite2Local)
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

  // 聊天示例
  '化学小白': 2,
  '学妹': 2,

  // 论坛路人
  小糊涂: 6,
  技术小达人: 9,
  云朵软糖回复: 11,
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
  微博用户139293: 43,
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
