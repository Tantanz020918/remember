import { useState, useEffect } from 'react'
import { useStore } from '../../store'
import { useGameNavigate } from '../../hooks/useGameNavigate'
import { useCurrentPage } from '../../hooks/useCurrentPage'
import { Avatar, ImagePlaceholder, Keyword } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { QQProfilePopup } from '../QQGroupChat/QQProfilePopup'

const ADMINS = [
  { name: '沐季千柠（群主）', from: '#ffd1dc', to: '#ff9aa2', profileKey: 'zhubo' },
  { name: '编剧+女主', from: '#d4f0c2', to: '#8cd07d', profileKey: 'bianju' },
  { name: '男主·陆远', from: '#c1e8ff', to: '#6ec4f7' },
  { name: '女配·花痴A', from: '#ffe0f0', to: '#f58ec2' },
]

const MEMBERS = [
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

function GroupMessage({ avatarFrom, avatarTo, name, time, children }) {
  return (
    <div className="flex gap-2.5 my-2.5 items-start">
      <ImagePlaceholder width={36} height={36} from={avatarFrom} to={avatarTo} round label={false} />
      <div className="max-w-[70%]">
        <div className="text-[11px] text-neutral-500 mb-1">
          {name}<span className="ml-1.5 text-neutral-300">{time}</span>
        </div>
        <div className="bg-white px-3 py-2.5 rounded border border-sky-100 leading-relaxed">{children}</div>
      </div>
    </div>
  )
}

const RUYUE_CHATS = [
  { key: 'jizhou', name: '计粥人机群🤖', preview: '超级小鼠妇（四孩爸版）：喜欢豆狗', time: '18:03' },
  { key: 'erciyuan1', name: '二次元交流大本营', preview: '今天新番更新 GET！', time: '17:12' },
  { key: 'erciyuan2', name: '漫画推荐分享群', preview: '[图片]', time: '16:48' },
  { key: 'mail', name: 'QQ 邮箱提醒', preview: '招聘专员给你发了新邮件', time: '11:03' },
]

const CAIQING_CHATS = [
  { key: 'junior', name: '化学小白', preview: '学姐，你的化学笔记可以借给我吗？', time: '2020.9' },
]

const CAIQING_REQUESTS = [
  { from: '薄荷夏天（梦和）', time: '2015.3', reason: '我真的没想到会这样，听我解释采晴。', status: '已拒绝', statusColor: 'text-red-500' },
  { from: '薄荷夏天（梦和）', time: '2015.3', reason: '求求你了采晴，我不能没有你。', status: '已拒绝', statusColor: 'text-red-500' },
  { from: '雨季 → 梦和', time: '2017.10', reason: '梦和，或许我们可以聊一下。', status: '对方未处理', statusColor: 'text-amber-500', outgoing: true },
  { from: '雨季 → 梦和', time: '2018.1', reason: '梦和，我想跟你谈谈。', status: '对方未处理', statusColor: 'text-amber-500', outgoing: true },
]

export function QQ() {
  const [showAddDialog, setShowAddDialog] = useState(false)
  const [showSwitchDialog, setShowSwitchDialog] = useState(false)
  const [addInput, setAddInput] = useState('')
  const [foundGroup, setFoundGroup] = useState(false)
  const [foundCaiqing, setFoundCaiqing] = useState(false)
  const [showCaiqingProfile, setShowCaiqingProfile] = useState(false)
  const [askingQuestion, setAskingQuestion] = useState(false)
  const [answer, setAnswer] = useState('')
  const [friendRequestSent, setFriendRequestSent] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [selectedChat, setSelectedChat] = useState(null)
  const [addTab, setAddTab] = useState('search') // search | requests
  const [switchAccount, setSwitchAccount] = useState('')
  const [switchPassword, setSwitchPassword] = useState('')
  const [switchError, setSwitchError] = useState('')
  const [showAnnouncement, setShowAnnouncement] = useState(false)
  const [profileKey, setProfileKey] = useState(null)
  const { qqGroupJoined, qqAccountSwitched, qqAccounts, setFlag } = useStore()
  const navigate = useGameNavigate()
  const currentPage = useCurrentPage()

  const isCaiqing = qqAccountSwitched

  // Auto-select fanquan when URL is page 15
  useEffect(() => {
    if (currentPage === 15 && qqGroupJoined && !isCaiqing) {
      setSelectedChat('fanquan')
    }
  }, [currentPage, qqGroupJoined, isCaiqing])

  const resetDialog = () => {
    setErrorMsg('')
    setFoundGroup(false)
    setFoundCaiqing(false)
    setShowCaiqingProfile(false)
    setAskingQuestion(false)
    setAddTab(isCaiqing ? 'requests' : 'search')
  }

  const onSearch = () => {
    setErrorMsg('')
    setFoundCaiqing(false)
    setFoundGroup(false)
    const q = addInput.trim()
    if (q === '2932818921') setFoundGroup(true)
    else if (q === '12831682861') setFoundCaiqing(true)
    else setErrorMsg('未找到相关用户或群。')
  }

  const onSubmitAnswer = () => {
    if (answer.trim() === '待你回眸一笑') {
      setFlag('qqGroupJoined', true)
      setShowAddDialog(false)
      resetDialog()
    } else setErrorMsg('答案不正确。')
  }

  const onSwitchToAccount = (account) => {
    setFlag('qqAccountSwitched', account === 'caiqing')
    setShowSwitchDialog(false)
    setSelectedChat(null)
    if (account === 'caiqing') navigate(22)
    else navigate(3)
  }

  const onLoginNewAccount = () => {
    if (switchAccount.trim() === '12831682861' && switchPassword.trim() === 'HcqLOVE0826') {
      if (!qqAccounts.includes('caiqing')) setFlag('qqAccounts', [...qqAccounts, 'caiqing'])
      onSwitchToAccount('caiqing')
    } else setSwitchError('账号或密码错误。')
  }

  const chatList = isCaiqing ? CAIQING_CHATS : [
    ...(qqGroupJoined ? [{ key: 'fanquan', name: '沐季千柠工作室粉丝群', preview: '[群公告] 新戏人物设定', time: '刚刚' }] : []),
    ...RUYUE_CHATS,
  ]

  const currentChat = chatList.find((c) => c.key === selectedChat)
  const avatarName = isCaiqing ? '雨季' : '姚如月'

  return (
    <div className="flex h-full text-[13px] bg-sky-50/50">
      {/* Rail */}
      <div className="w-14 flex flex-col items-center py-3.5 gap-2 bg-linear-to-b from-sky-600 to-sky-800">
        <div className="mb-2">
          {isCaiqing
            ? <ImagePlaceholder sprite={spriteForUser('雨季')} width={36} height={36} round label={false} />
            : <ImagePlaceholder sprite={spriteForUser('姚如月')} width={36} height={36} round label={false} />
          }
        </div>
        <div className="w-9 h-9 flex items-center justify-center rounded-md cursor-pointer text-lg bg-white/15 text-white">💬</div>
        <div className="w-9 h-9 flex items-center justify-center rounded-md cursor-pointer text-lg text-white/80 hover:bg-white/10" title="QQ空间" onClick={() => isCaiqing && navigate(19)}>⭐</div>
        <div className="flex-1" />
        <div className="w-9 h-9 flex items-center justify-center text-white/80 cursor-pointer hover:bg-white/10 rounded-md text-xs" title="切换账号" onClick={() => { setShowSwitchDialog(true); setSwitchError('') }}>🔄</div>
        <div className="w-9 h-9 flex items-center justify-center text-white/80">⚙</div>
      </div>

      {/* List */}
      <div className="w-[280px] bg-white border-r border-sky-100 flex flex-col">
        <div className="flex gap-1.5 px-2.5 py-2.5 border-b border-sky-100">
          <input placeholder="搜索" className="flex-1 px-2.5 py-1.5 border border-sky-100 rounded-full bg-sky-50/60 text-xs outline-none" />
          <button onClick={() => { setShowAddDialog(true); resetDialog(); setAddInput('') }} className="w-7 h-7 rounded-full bg-sky-100 border-none text-sky-700 text-sm cursor-pointer">＋</button>
        </div>
        <div className="flex-1 overflow-y-auto">
          {chatList.map((c) => (
            <div
              key={c.key}
              onClick={() => {
                setSelectedChat(c.key)
                if (c.key === 'fanquan') navigate(15)
                else if (currentPage === 15) navigate(3)
              }}
              className={`flex gap-2.5 px-3 py-2.5 cursor-pointer border-b border-neutral-100 ${selectedChat === c.key ? 'bg-sky-100/70' : 'hover:bg-sky-50/60'}`}
            >
              <Avatar name={c.name} size={42} />
              <div className="flex-1 min-w-0">
                <div className="flex justify-between"><span className="font-semibold">{c.name}</span><span className="text-neutral-400 text-[11px]">{c.time}</span></div>
                <div className="text-neutral-500 text-[11px] mt-0.5 truncate">{c.preview}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Main */}
      <div className="flex-1 flex flex-col bg-sky-50/40 min-w-0">
        <div className="flex justify-between items-center px-4 py-3 border-b border-sky-100 bg-white">
          <div className="font-bold">
            {currentChat?.name || (isCaiqing ? '雨季' : '姚如月')}
            {selectedChat === 'fanquan' && qqGroupJoined && (
              <span className="text-neutral-500 ml-1.5 font-normal text-xs">({ADMINS.length + MEMBERS.length})</span>
            )}
          </div>
          <div className="text-neutral-500 flex gap-3"><span>🔍</span><span>⋯</span></div>
        </div>
        <div className="flex-1 flex overflow-hidden min-h-0">
        <div className="flex-1 flex flex-col min-w-0">
        <div className="flex-1 px-5 py-4 overflow-y-auto">
          {selectedChat === 'fanquan' && qqGroupJoined && !isCaiqing ? (
            <>
              <div className="text-center text-neutral-400 text-[11px] my-2.5">2013 年 1 月 2 日 14:30</div>
              <GroupMessage avatarFrom="#ffd1dc" avatarTo="#ff9aa2" name="沐季千柠" time="14:30">
                大家看一下群公告里的新戏人物设定哈～
              </GroupMessage>
              <GroupMessage avatarFrom="#c1e8ff" avatarTo="#6ec4f7" name="糖糖不吃糖" time="14:32">
                催更催更！上一部还没演完呢
              </GroupMessage>
              <GroupMessage avatarFrom="#d4f0c2" avatarTo="#8cd07d" name="编剧+女主" time="14:35">
                剧本还在改，再等等～新戏的人物设定已经发在公告里了
              </GroupMessage>
              <GroupMessage avatarFrom="#ffe7b3" avatarTo="#ffb86b" name="奥比小王子" time="14:38">
                期待新戏！
              </GroupMessage>
            </>
          ) : selectedChat === 'junior' && isCaiqing ? (
            <>
              <div className="text-center text-neutral-400 text-[11px] my-2.5">2020/09/15</div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="学妹" size={36} />
                <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">学姐，你的化学笔记可以借给我吗？</div>
              </div>
              <div className="flex gap-2.5 my-2.5 flex-row-reverse">
                <ImagePlaceholder sprite={spriteForUser('雨季')} width={36} height={36} round label={false} />
                <div className="bg-sky-100 px-3 py-2 rounded text-sm">微信聊，现在不用qq了，我的微信是：<Keyword>CcqQ3927</Keyword></div>
              </div>
            </>
          ) : selectedChat === 'jizhou' ? (
            <>
              <div className="text-center text-neutral-400 text-[11px] my-2.5">今天</div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="峡谷小王" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">峡谷小王</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">晚上谁开黑？最近都在玩啥？</div>
                </div>
              </div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="原批下山" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">原批下山</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">原神新版本爽到，新角色抽到了</div>
                </div>
              </div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="吃鸡选手" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">吃鸡选手</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">吃鸡吃鸡，差一个四排</div>
                </div>
              </div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="LOL老咸鱼" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">LOL老咸鱼</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">LoL 新赛季打排位，被虐哭了 T_T</div>
                </div>
              </div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="峡谷小王" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">峡谷小王</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">王者荣耀新英雄出了没？有空一起上分</div>
                </div>
              </div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="超级小鼠妇（四孩爸版）" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">超级小鼠妇（四孩爸版）</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">喜欢豆狗</div>
                </div>
              </div>
            </>
          ) : selectedChat === 'erciyuan1' ? (
            <>
              <div className="text-center text-neutral-400 text-[11px] my-2.5">今天</div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="宅宅酱" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">宅宅酱</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">这季新番谁看了？</div>
                </div>
              </div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="二阶堂" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">二阶堂</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">制作组这次真的用心了，画面炸裂</div>
                </div>
              </div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="月咏" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">月咏</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">今天新番更新 GET！</div>
                </div>
              </div>
            </>
          ) : selectedChat === 'erciyuan2' ? (
            <>
              <div className="text-center text-neutral-400 text-[11px] my-2.5">今天</div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="漫迷小张" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">漫迷小张</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">求推荐治愈系短篇～</div>
                </div>
              </div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="阿喵" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">阿喵</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">《夜巡猫》强推！</div>
                </div>
              </div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="书虫" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">书虫</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm">
                    <ImagePlaceholder name="漫画推荐" width={160} height={120} from="#c1d3ff" to="#ffd6e7" />
                  </div>
                </div>
              </div>
            </>
          ) : selectedChat === 'mail' ? (
            <>
              <div className="text-center text-neutral-400 text-[11px] my-2.5">今天 11:03</div>
              <div className="flex gap-2.5 my-2.5">
                <Avatar name="QQ邮箱" size={32} />
                <div>
                  <div className="text-[11px] text-neutral-400 mb-0.5">QQ 邮箱提醒</div>
                  <div className="bg-white px-3 py-2 rounded border border-sky-100 text-sm max-w-[300px]">
                    <div className="font-bold mb-1">您有 1 封新邮件</div>
                    <div className="text-xs text-neutral-500">发件人：某某科技 HR</div>
                    <div className="text-xs text-neutral-500 mt-0.5">主题：招聘专员给你发了新邮件</div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <div className="text-neutral-400 text-center py-10 text-sm">
              选择左侧会话开始聊天
            </div>
          )}
        </div>
        <div className="border-t border-sky-100 px-4 pt-1.5 pb-2.5 bg-white min-h-[100px]">
          <div className="flex gap-3.5 text-neutral-600 text-base py-1.5">
            <span>😀</span><span>🖼</span><span>✂</span><span>📁</span><span>🎤</span>
          </div>
          <textarea className="w-full border-none outline-none resize-none font-sans text-[13px] min-h-[40px]" />
        </div>
        </div>
        {selectedChat === 'fanquan' && qqGroupJoined && !isCaiqing && (
          <div className="w-[240px] bg-white border-l border-sky-100 overflow-y-auto">
            <div className="px-3.5 py-2.5 font-semibold text-xs text-neutral-600 border-b border-neutral-200 flex justify-between">
              <span>群公告</span>
              <a className="text-sky-700 font-bold cursor-pointer hover:underline" onClick={() => setShowAnnouncement(true)}>查看</a>
            </div>
            <div className="px-3.5 py-2.5 font-semibold text-xs text-neutral-600 border-b border-neutral-200">
              群成员 {ADMINS.length + MEMBERS.length}
            </div>
            <div>
              <div className="px-3.5 py-1.5 text-[11px] text-neutral-400 bg-neutral-50">管理员</div>
              {ADMINS.map((a) => (
                <div
                  key={a.name}
                  className="flex items-center gap-2 px-3.5 py-1.5 cursor-pointer hover:bg-sky-50/60"
                  onClick={() => a.profileKey && setProfileKey(a.profileKey)}
                >
                  <ImagePlaceholder width={28} height={28} round label={false} from={a.from} to={a.to} />
                  <span className="text-xs">{a.name}</span>
                </div>
              ))}
              <div className="px-3.5 py-1.5 text-[11px] text-neutral-400 bg-neutral-50">成员</div>
              {MEMBERS.map((m) => (
                <div key={m.name} className="flex items-center gap-2 px-3.5 py-1.5 hover:bg-sky-50/60">
                  <ImagePlaceholder width={28} height={28} round label={false} from={m.from} to={m.to} />
                  <span className="text-xs">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
        )}
        </div>
      </div>

      {profileKey && <QQProfilePopup profileKey={profileKey} onClose={() => setProfileKey(null)} />}

      {showAnnouncement && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-[1000]" onClick={() => setShowAnnouncement(false)}>
          <div className="bg-white px-6 py-5 rounded-[10px] min-w-[360px]" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-bold mb-2.5">群公告</h3>
            <div className="text-[11px] text-neutral-500 mb-2">发布者：编剧+女主 · 2013-01-02 21:05</div>
            <div className="leading-relaxed text-neutral-700">
              新戏「<Keyword>永远的姐妹</Keyword>」人物设定已经整理好啦，有意见可提出——
              <div className="mt-2.5">
                <a className="text-sky-700 font-bold cursor-pointer hover:underline" onClick={() => { setShowAnnouncement(false); navigate(16) }}>
                  点击查看详情 &gt;&gt;
                </a>
              </div>
            </div>
            <div className="mt-3">
              <button onClick={() => setShowAnnouncement(false)} className="px-4 py-1.5 bg-sky-500 text-white rounded border-none cursor-pointer text-[13px]">关闭</button>
            </div>
          </div>
        </div>
      )}

      {/* Add / Search / Requests dialog */}
      {showAddDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-1000" onClick={() => setShowAddDialog(false)}>
          <div className="bg-white px-6 py-5 rounded-[10px] min-w-[380px] max-w-[420px]" onClick={(e) => e.stopPropagation()}>
            {/* Tabs for caiqing account */}
            {isCaiqing && (
              <div className="flex border-b border-neutral-200 mb-3 text-sm">
                <span className={`pb-2 px-3 cursor-pointer ${addTab === 'search' ? 'border-b-2 border-sky-500 font-bold text-sky-600' : 'text-neutral-500'}`} onClick={() => setAddTab('search')}>查找</span>
                <span className={`pb-2 px-3 cursor-pointer ${addTab === 'requests' ? 'border-b-2 border-sky-500 font-bold text-sky-600' : 'text-neutral-500'}`} onClick={() => setAddTab('requests')}>好友申请</span>
              </div>
            )}

            {(!isCaiqing || addTab === 'search') && (
              <>
                <h3 className="font-bold mb-2.5">查找联系人 / 群</h3>
                <input className="w-full px-2.5 py-2 border border-neutral-300 rounded my-2.5 outline-none" placeholder="QQ 号 / 群号" value={addInput} onChange={(e) => setAddInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && onSearch()} />
                <div className="flex gap-2 mt-2">
                  <button onClick={onSearch} className="px-4 py-1.5 bg-sky-500 text-white rounded border-none cursor-pointer text-[13px]">查找</button>
                  <button onClick={() => setShowAddDialog(false)} className="px-4 py-1.5 bg-white text-neutral-600 rounded border border-neutral-300 cursor-pointer text-[13px]">关闭</button>
                </div>
                {errorMsg && <div className="text-red-600 mt-2 text-[13px]">{errorMsg}</div>}

                {foundGroup && !askingQuestion && (
                  <div className="flex gap-3 p-3 bg-sky-50 rounded mt-3 items-center">
                    <Avatar name="粉丝群" size={48} />
                    <div>
                      <div className="font-bold">沐季千柠工作室粉丝群</div>
                      <div className="text-neutral-500 text-xs">群号：2932818921</div>
                      <button onClick={() => setAskingQuestion(true)} className="mt-1 px-3.5 py-1 bg-sky-500 text-white rounded border-none cursor-pointer text-xs">申请加群</button>
                    </div>
                  </div>
                )}
                {askingQuestion && (
                  <div className="mt-3 p-3 bg-neutral-100 rounded">
                    <div>加群问题：我们戏的名字是什么？</div>
                    <input className="w-full px-2.5 py-2 border border-neutral-300 rounded my-2 outline-none" value={answer} onChange={(e) => setAnswer(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && onSubmitAnswer()} />
                    <button onClick={onSubmitAnswer} className="px-4 py-1.5 bg-sky-500 text-white rounded border-none cursor-pointer text-[13px]">提交</button>
                  </div>
                )}

                {foundCaiqing && !showCaiqingProfile && (
                  <div className="mt-3 flex gap-3 items-center p-3 bg-sky-50 rounded-lg cursor-pointer hover:bg-sky-100" onClick={() => setShowCaiqingProfile(true)}>
                    <ImagePlaceholder sprite={spriteForUser('雨季')} width={44} height={44} round label={false} />
                    <div><div className="font-bold text-sm">雨季</div><div className="text-neutral-400 text-xs">QQ 12831682861</div></div>
                  </div>
                )}
                {foundCaiqing && showCaiqingProfile && (
                  <div className="mt-3 bg-white rounded-xl overflow-hidden shadow-lg border border-neutral-200">
                    <div className="bg-linear-to-br from-sky-400 to-sky-600 text-white text-center pt-5 pb-3 px-5">
                      <ImagePlaceholder sprite={spriteForUser('雨季')} width={72} height={72} round label={false} className="mx-auto shadow-lg" />
                      <h2 className="text-base font-bold mt-2">雨季</h2>
                      <div className="text-white/70 text-xs">QQ 12831682861</div>
                    </div>
                    <div className="px-4 py-2 space-y-1.5 text-sm">
                      <div className="flex py-1 border-b border-neutral-100"><b className="w-14 text-neutral-500 font-normal text-xs">签名</b><span className="text-xs">曾沿着雪路浪游 为何为好事泪流</span></div>
                      <div className="flex py-1"><b className="w-14 text-neutral-500 font-normal text-xs">空间</b>
                        <span className="text-sky-600 text-xs cursor-pointer hover:underline font-bold" onClick={() => { setShowAddDialog(false); navigate(19) }}>访问 →</span>
                      </div>
                    </div>
                    <div className="px-4 pb-3">
                      {friendRequestSent
                        ? <button disabled className="w-full py-2 bg-neutral-300 text-neutral-500 border-none rounded-full text-sm cursor-not-allowed">已发送申请</button>
                        : <button onClick={() => setFriendRequestSent(true)} className="w-full py-2 bg-linear-to-br from-sky-400 to-sky-600 text-white border-none rounded-full cursor-pointer text-sm font-medium">添加好友</button>
                      }
                    </div>
                  </div>
                )}
              </>
            )}

            {isCaiqing && addTab === 'requests' && (
              <div className="space-y-2.5 max-h-[400px] overflow-y-auto">
                <h3 className="font-bold mb-2">好友申请记录</h3>
                {CAIQING_REQUESTS.map((r, i) => (
                  <div key={i} className={`p-3 rounded-lg border text-xs ${r.outgoing ? 'bg-sky-50 border-sky-100' : 'bg-red-50 border-red-100'}`}>
                    <div className="flex justify-between"><span className="font-bold">{r.from}</span><span className="text-neutral-400">{r.time}</span></div>
                    <div className="text-neutral-600 mt-1">申请理由：{r.reason}</div>
                    <div className={`mt-1 ${r.statusColor}`}>{r.outgoing ? '⏳' : '✕'} {r.status}</div>
                  </div>
                ))}
                <div className="mt-3">
                  <button onClick={() => setShowAddDialog(false)} className="w-full py-1.5 bg-neutral-100 rounded border-none cursor-pointer text-xs text-neutral-500">关闭</button>
                </div>
              </div>
            )}
          </div>
        </div>
      )}

      {/* Switch account dialog */}
      {showSwitchDialog && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-1000" onClick={() => setShowSwitchDialog(false)}>
          <div className="bg-white px-6 py-5 rounded-[10px] min-w-[340px]" onClick={(e) => e.stopPropagation()}>
            <h3 className="font-bold mb-2.5">切换账号</h3>
            <div className="space-y-2 mb-3">
              <div className={`p-3 rounded-lg border flex gap-3 items-center cursor-pointer ${!isCaiqing ? 'bg-sky-50 border-sky-300' : 'hover:bg-neutral-50 border-neutral-200'}`} onClick={() => onSwitchToAccount('ruyue')}>
                <ImagePlaceholder sprite={spriteForUser('姚如月')} width={40} height={40} round label={false} />
                <div><div className="font-bold text-sm">姚如月</div><div className="text-xs text-neutral-400">当前{!isCaiqing ? ' ✓' : ''}</div></div>
              </div>
              {qqAccounts.includes('caiqing') && (
                <div className={`p-3 rounded-lg border flex gap-3 items-center cursor-pointer ${isCaiqing ? 'bg-sky-50 border-sky-300' : 'hover:bg-neutral-50 border-neutral-200'}`} onClick={() => onSwitchToAccount('caiqing')}>
                  <ImagePlaceholder sprite={spriteForUser('雨季')} width={40} height={40} round label={false} />
                  <div><div className="font-bold text-sm">雨季</div><div className="text-xs text-neutral-400">{isCaiqing ? '当前 ✓' : '12831682861'}</div></div>
                </div>
              )}
            </div>
            <div className="border-t border-neutral-200 pt-3 mt-2">
              <div className="text-xs text-neutral-500 mb-2">登录其他账号：</div>
              <input className="w-full px-2.5 py-2 border border-neutral-300 rounded mb-2 outline-none text-sm" placeholder="QQ 号" value={switchAccount} onChange={(e) => setSwitchAccount(e.target.value)} />
              <input className="w-full px-2.5 py-2 border border-neutral-300 rounded mb-2 outline-none text-sm" placeholder="密码" type="password" value={switchPassword} onChange={(e) => setSwitchPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && onLoginNewAccount()} />
              <button onClick={onLoginNewAccount} className="w-full py-2 bg-sky-500 text-white rounded border-none cursor-pointer text-sm">登录</button>
              {switchError && <div className="text-red-600 mt-2 text-xs">{switchError}</div>}
            </div>
            <button onClick={() => setShowSwitchDialog(false)} className="mt-3 w-full py-1.5 bg-neutral-100 rounded border-none cursor-pointer text-xs text-neutral-500">取消</button>
          </div>
        </div>
      )}
    </div>
  )
}
