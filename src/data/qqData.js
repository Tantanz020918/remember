import { MINI_CHAT_LIST } from './qqMiniChats'

export const ADMINS = [
  { name: '沐季千柠（群主）', from: '#ffd1dc', to: '#ff9aa2' },
  { name: '编剧+女主', from: '#d4f0c2', to: '#8cd07d' },
  { name: '男主·陆远', from: '#c1e8ff', to: '#6ec4f7' },
  { name: '女配·花痴A', from: '#ffe0f0', to: '#f58ec2' },
]

export const MEMBERS = [
  { name: '糖糖不吃糖', from: '#c1e8ff', to: '#6ec4f7' },
  { name: '奥比小王子', from: '#ffe7b3', to: '#ffb86b' },
  { name: '清风', from: '#e4d4ff', to: '#a97bf5' },
  { name: '小鱼干', from: '#fff4b3', to: '#f5c542' },
  { name: '云朵软糖', from: '#ffd6e7', to: '#c5e1ff' },
  { name: '星星点灯', from: '#d0f5e8', to: '#4fc3a1' },
  { name: '梦幻泡泡', from: '#ffe0f0', to: '#f58ec2' },
  { name: '路人甲', from: '#ffd1dc', to: '#ff9aa2' },
  { name: '阳光少年', from: '#c5e1a5', to: '#66bb6a' },
  { name: '冰淇淋酱', from: '#b3e5fc', to: '#4fc3f7' },
  { name: '暮光之城', from: '#e4d4ff', to: '#a97bf5' },
  { name: '芒果布丁', from: '#fff4b3', to: '#f5c542' },
]

export const FANQUAN_CHAT = { key: 'fanquan', name: '沐季千柠工作室粉丝群', preview: '[群公告] 新戏人物设定', time: '刚刚' }

// 聊天列表元数据全部从 qqMiniChats 的单一 CHATS 定义派生（name/time/preview 自动生成）。
export const RUYUE_CHATS = [
  MINI_CHAT_LIST.jizhou,
  MINI_CHAT_LIST.erciyuan1,
  MINI_CHAT_LIST.erciyuan2,
  MINI_CHAT_LIST.mail,
]

export const CAIQING_CHATS = [MINI_CHAT_LIST.qzoneVisitor]

export const CAIQING_REQUESTS = [
  { from: '申请添加「如梦令」为好友', time: '2018.1', reason: '梦和，我想跟你谈谈。', status: '对方未处理', statusColor: 'text-amber-500', outgoing: true },
  { from: '申请添加「如梦令」为好友', time: '2017.10', reason: '梦和，或许我们可以聊一下。', status: '对方未处理', statusColor: 'text-amber-500', outgoing: true },
  { from: '「如梦令」申请添加你为好友', time: '2015.3', reason: '求求你了采晴，我不能没有你。', status: '已拒绝', statusColor: 'text-red-500' },
  { from: '「如梦令」申请添加你为好友', time: '2015.3', reason: '我真的没想到会这样，听我解释采晴。', status: '已拒绝', statusColor: 'text-red-500' },
]

export const GROUP_MEMBER_COUNT = ADMINS.length + MEMBERS.length
