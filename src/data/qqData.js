export const ADMINS = [
  { name: '沐季千柠（群主）', from: '#ffd1dc', to: '#ff9aa2', profileKey: 'zhubo' },
  { name: '编剧+女主', from: '#d4f0c2', to: '#8cd07d', profileKey: 'bianju' },
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

export const RUYUE_CHATS = [
  { key: 'jizhou', name: '计粥人机群🤖', preview: '超级小鼠妇（四孩爸版）：喜欢豆狗', time: '18:03' },
  { key: 'erciyuan1', name: '二次元交流大本营', preview: '今天新番更新 GET！', time: '17:12' },
  { key: 'erciyuan2', name: '漫画推荐分享群', preview: '[图片]', time: '16:48' },
  { key: 'mail', name: 'QQ 邮箱提醒', preview: '招聘专员给你发了新邮件', time: '11:03' },
]

export const CAIQING_CHATS = [
  { key: 'junior', name: '化学小白', preview: '学姐，你的化学笔记可以借给我吗？', time: '2020.9' },
]

export const CAIQING_REQUESTS = [
  { from: '薄荷夏天（梦和）', time: '2015.3', reason: '我真的没想到会这样，听我解释采晴。', status: '已拒绝', statusColor: 'text-red-500' },
  { from: '薄荷夏天（梦和）', time: '2015.3', reason: '求求你了采晴，我不能没有你。', status: '已拒绝', statusColor: 'text-red-500' },
  { from: '雨季 → 梦和', time: '2017.10', reason: '梦和，或许我们可以聊一下。', status: '对方未处理', statusColor: 'text-amber-500', outgoing: true },
  { from: '雨季 → 梦和', time: '2018.1', reason: '梦和，我想跟你谈谈。', status: '对方未处理', statusColor: 'text-amber-500', outgoing: true },
]

export const GROUP_MEMBER_COUNT = ADMINS.length + MEMBERS.length
