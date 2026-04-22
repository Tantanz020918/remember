// 页面枚举：所有页面只在这里定义一次。
// 编号自动从 1 开始递增（数组顺序），新增/删除/重排只改这里，数字自动对齐。
// 右上角「页面 n/TOTAL」展示时用的是 1-based 连续编号。
const MAIN_PAGE_KEYS = [
  // 桌面 + 三个主 app
  'DESKTOP',
  'WECHAT',
  'WECHAT_MOMENTS',
  'QQ',
  'BROWSER',

  // 璧山 / 金花小学
  'SEARCH_BISHAN',
  'BISHAN_EDUCATION',
  'SEARCH_JINHUA',
  'JINHUA_HOME',
  'JINHUA_ALUMNI',

  // 奥比岛百田
  'SEARCH_AOBI',
  'AOBI_HOME',
  'AOBI_USER_CAIQING',
  'POST_CASTING',
  'POST_TRANSFER',
  'POST_PRINCESS',
  'QQ_FANQUAN_GROUP',
  'POST_SCRIPT',
  'POST_ENCRYPTED',
  'POST_DECODE',

  // 采晴 QQ 空间 / 个人网站
  'CAIQING_QZONE',
  'SEARCH_PERSONAL_SITE',
  'PERSONAL_SITE',
  'QQ_CAIQING_CHAT',
  'BISHAN_CONFESSION_WALL',
  'RUMENGLING_QZONE',

  // 梦和奖学金 / 李氏集团 / 梦和 MH
  'SEARCH_MENGHE_FUND',
  'NEWS_MENGHE_FUND',
  'SEARCH_LI_GROUP',
  'WEIBO_LI_GROUP_FAMILY_EDU',
  'WEIBO_LI_GROUP_POST',
  'MENGHE_WEIBO',
  'WEIBO_COMING_OF_AGE',
  'WEIBO_FANS_POST_1',
  'WEIBO_FANS_POST_2',

  // 安眠线
  'WEIBO_DENG_FENG_SHUO',
  'WEIBO_ANMIAN',

  // 身份证科普（供玩家从心理报告身份证号反推地区/出生日期）
  'SEARCH_ID_CARD',

  // 荣德心理咨询
  'SEARCH_RONGDE',
  'RONGDE_CENTER',

  // 请求原谅页（放在心理报告之后，玩家需先看报告才能选择原谅）
  'WEIBO_ANMIAN_LOCKED',

  // 结局
  'ENDING_FORGIVE',
  'ENDING_FORGIVE_ALONE',
  'ENDING_SILENCE',
]

// 额外彩蛋内容（和主线无关，不计入总页数）。
// 展示为 extra1、extra2 …… 仍在快捷跳转里可见。
const EXTRA_PAGE_KEYS = [
  'EXTRA_MUJIQIANLING_USER',
  'EXTRA_DRAMA_INTRO',
  'EXTRA_DRAMA_EP1',
  'EXTRA_DRAMA_EP2',
  'EXTRA_DRAMA_EP3',
]

const PAGE_KEYS = [...MAIN_PAGE_KEYS, ...EXTRA_PAGE_KEYS]

export const PageId = Object.freeze(
  Object.fromEntries(PAGE_KEYS.map((key, i) => [key, i + 1])),
)

// 主线页面数（右上角「N/TOTAL」中的 TOTAL）。
export const TOTAL_PAGES = MAIN_PAGE_KEYS.length

// 第几个 extra（id → 1-based 序号）。非 extra 返回 undefined。
const EXTRA_SEQ = Object.fromEntries(
  EXTRA_PAGE_KEYS.map((_, i) => [MAIN_PAGE_KEYS.length + i + 1, i + 1]),
)

export function isExtraPage(id) {
  return id != null && EXTRA_SEQ[id] != null
}

export function pageLabel(id) {
  const seq = EXTRA_SEQ[id]
  return seq != null ? `extra${seq}` : String(id)
}
