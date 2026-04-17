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

// Fixed character images
export const BESTIE_1 = img('/l2Z5/0X0/imgs/avatars/bestie_1.webp', bestie1Local)
export const BESTIE_2 = img('/IxFv/0X0/imgs/avatars/bestie_2.webp', bestie2Local)

// Special fixed images
export const FLIPPED = img('/A7Cq/0X0/imgs/flipped.webp', flippedLocal) // 梦和MH背景
export const CEREMONY_18 = img('/W3w7/0X0/imgs/others/18ceremony.webp', ceremony18Local) // 成人礼

// Flexible photos (use in 朋友圈/QQ空间 to enrich content)
export const HAMSTER = img('/icLz/0X0/imgs/others/hamster.webp', hamsterLocal)
export const HANDMADE = img('/0BsX/0X0/imgs/others/handmade-artical.webp', handmadeLocal)
export const GAME = img('/QiVI/0X0/imgs/others/game.webp', gameLocal)
export const CAT = img('/T64X/0X0/imgs/others/cat.webp', catLocal)
export const THEME_PARK = img('/tcmF/0X0/imgs/others/theme-park.webp', themeParkLocal)
export const MANICURE = img('/48LD/0X0/imgs/others/manicure.webp', manicureLocal)

// Sprite sheets — each 5×5 = 25 stranger avatars, total 50
const SPRITE_1 = img('/BuzU/0X0/imgs/avatars/sprite_1.webp', sprite1Local)
const SPRITE_2 = img('/bDnU/0X0/imgs/avatars/sprite_2.webp', sprite2Local)
const SHEETS = [SPRITE_1, SPRITE_2]
const GRID = 5
const CELLS_PER_SHEET = GRID * GRID

// Stateful unique-slot registry: each distinct userName gets its own slot on
// first call. Slots are assigned sequentially, so the first 50 distinct users
// are guaranteed unique avatars (no birthday-paradox collisions). After the
// 50 slots are exhausted we wrap around.
// Preset slots for main characters — pre-register them so auto-assignment
// doesn't accidentally claim these slots for other users. Change the number
// to pick a different avatar from the 5×5 sheet (0-24 = sheet_1, 25-49 = sheet_2).
const PRESET_SLOTS = {
  '姚如月': 4,
  '雨季': 3,
}

const TOTAL_SLOTS = SHEETS.length * CELLS_PER_SHEET
const userSlots = new Map(Object.entries(PRESET_SLOTS))
const usedSlots = new Set(userSlots.values())
let nextSlot = 0

export function spriteForUser(userName) {
  if (!userName) return null
  if (!userSlots.has(userName)) {
    // Find the next unused slot, skipping any reserved by PRESET_SLOTS.
    while (usedSlots.has(nextSlot % TOTAL_SLOTS)) nextSlot++
    const slot = nextSlot % TOTAL_SLOTS
    userSlots.set(userName, slot)
    usedSlots.add(slot)
    nextSlot++
  }
  const slotIdx = userSlots.get(userName)
  const sheetIdx = Math.floor(slotIdx / CELLS_PER_SHEET) % SHEETS.length
  const cellIdx = slotIdx % CELLS_PER_SHEET
  const row = Math.floor(cellIdx / GRID)
  const col = cellIdx % GRID
  return { ...SHEETS[sheetIdx], row, col, cols: GRID, rows: GRID }
}
