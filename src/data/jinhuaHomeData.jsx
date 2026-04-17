import { DeadLink } from '../components/ui'

export const NAV_ITEMS = [
  { label: '首页', active: true },
  { label: '学校概况' },
  { label: '师资风采' },
  { label: '新闻动态' },
  { label: '教学科研' },
  { label: '德育天地' },
  { label: '联系我们' },
]

export const NEWS_CARDS = [
  { imageName: '新闻图 1', imageFrom: '#ffe0a3', imageTo: '#ffa872', title: '我校成功举办第十二届艺术节', date: '2025-11-20' },
  { imageName: '新闻图 2', imageFrom: '#c5e1a5', imageTo: '#66bb6a', title: '区级作文比赛我校学生包揽前三', date: '2025-10-15' },
  { imageName: '新闻图 3', imageFrom: '#b3e5fc', imageTo: '#4fc3f7', title: '「家校共育」主题讲座顺利开展', date: '2025-09-28' },
]

export const NOTICES = [
  { title: '· 关于 2026 年春季运动会的通知', date: '2026-03-12' },
  { title: '· 金花小学 2026 新学期课程安排', date: '2026-02-25' },
  { title: '· 关于开展安全教育月活动的通知', date: '2026-02-10' },
  { title: '· 2025-2026 学年第一学期期末工作安排', date: '2026-01-06' },
]

export const TEAM_MEMBERS = [
  { role: '校　长', name: '周建' },
  { role: '副校长', name: '李 明' },
  { role: '副校长', name: '陈晓红' },
  { role: '教务主任', name: '张 华' },
  { role: '德育主任', name: '王 丽' },
]

export const QUICK_LINKS = ['教务系统', '教师 OA', '在线图书馆', '安全教育平台']

// Eager-render so DeadLink components are reused; QuickLinks list is repeated unchanged
export const QUICK_LINK_ITEMS = QUICK_LINKS.map((label) => <DeadLink key={label}>{label}</DeadLink>)
