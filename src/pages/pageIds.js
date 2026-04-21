// 页面枚举：所有页面只在这里定义一次。
// 编号自动从 1 开始递增（数组顺序），新增/删除/重排只改这里，数字自动对齐。
// 右上角「页面 n/TOTAL」展示时用的是 1-based 连续编号。
const PAGE_KEYS = [
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

export const PageId = Object.freeze(
  Object.fromEntries(PAGE_KEYS.map((key, i) => [key, i + 1])),
)

export const TOTAL_PAGES = PAGE_KEYS.length
