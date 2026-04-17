import { useState } from 'react'
import { useStore } from '../../store'
import { Keyword, ImagePlaceholder } from '../../components/ui'
import { BESTIE_1, spriteForUser } from '../../assets/imageUrls'
import { ChatFrame } from './ChatFrame'
import { Message } from './Message'
import { Moments } from './Moments'
import { TongxueluModal } from './TongxueluModal'

const RAIL_ICONS = [
  { key: 'chats', icon: '💬' },
  { key: 'moments', icon: '🌐' },
  { key: 'add', icon: '➕' },
]

export function Wechat() {
  const [view, setView] = useState('chats')
  const [chatKey, setChatKey] = useState('qing')
  const [showBigImg, setShowBigImg] = useState(false)
  const [addInput, setAddInput] = useState('')
  const [addResult, setAddResult] = useState('')
  const { qingAdded, mamaAdded, setFlag } = useStore()

  const onSearchFriend = () => {
    const value = addInput.trim()
    if (value === 'qingqing_0826') {
      setFlag('qingAdded', true)
      setAddResult('添加成功！胡采晴已通过你的好友请求。')
    } else if (value === 'lmh_mama') {
      setFlag('mamaAdded', true)
      setAddResult('已发送好友请求。')
    } else if (value) {
      setAddResult('未找到该用户。')
    }
  }

  const chatList = [
    { key: 'qing', name: '青青', preview: '你是在璧山读的小学吗？', time: '14:22', unread: 0 },
    { key: 'zhou', name: '设计-周雪', preview: '[图片]', time: '昨天', unread: 0 },
    { key: 'mom', name: '妈妈', preview: '今年你是本命年啊', time: '昨天', unread: 0 },
    { key: 'nail', name: '沁心美甲美睫', preview: '亲，只能提前三天内预约', time: '4.13', unread: 0 },
    ...(qingAdded
      ? [{ key: 'caiqing', name: '胡采晴', preview: '我等这一天等了十四年', time: '刚刚', unread: 2 }]
      : []),
    ...(mamaAdded
      ? [{ key: 'mama', name: '梦和妈妈', preview: '……', time: '刚刚', unread: 0 }]
      : []),
  ]

  return (
    <div className="flex h-full text-[13px] bg-neutral-100">
      {/* Left icon rail */}
      <div className="w-[60px] bg-[#2e2e2e] flex flex-col items-center py-3.5 gap-1.5">
        <div className="mb-2">
          <ImagePlaceholder sprite={spriteForUser('姚如月')} width={36} height={36} label={false} style={{ borderRadius: 6 }} />
        </div>
        {RAIL_ICONS.map((item) => (
          <div
            key={item.key}
            onClick={() => setView(item.key)}
            className={`w-10 h-10 flex items-center justify-center rounded-md cursor-pointer text-xl ${
              view === item.key
                ? 'bg-white/10 text-[#07c160]'
                : 'text-neutral-400 hover:bg-white/5'
            }`}
          >
            {item.icon}
          </div>
        ))}
        <div className="flex-1" />
        <div className="w-10 h-10 flex items-center justify-center text-neutral-400">⚙</div>
      </div>

      {/* Conversation list */}
      {view === 'chats' && (
        <div className="w-[280px] bg-neutral-200/80 border-r border-neutral-300 flex flex-col">
          <div className="flex gap-1.5 px-2.5 py-2.5 border-b border-neutral-300">
            <input
              placeholder="搜索"
              className="flex-1 px-2.5 py-1 border border-neutral-300 bg-white rounded text-xs outline-none"
            />
            <button className="w-6 h-6 bg-white border border-neutral-300 rounded cursor-pointer text-sm">
              ＋
            </button>
          </div>
          <div className="flex-1 overflow-y-auto">
            {chatList.map((c) => (
              <div
                key={c.key}
                onClick={() => setChatKey(c.key)}
                className={`flex gap-2.5 px-3 py-2.5 cursor-pointer border-b border-neutral-300/60 ${
                  chatKey === c.key ? 'bg-neutral-300' : 'hover:bg-neutral-300/60'
                }`}
              >
                {c.key === 'caiqing' ? (
                  <ImagePlaceholder
                    src={BESTIE_1.src}
                    fallbackSrc={BESTIE_1.fallbackSrc}
                    width={44}
                    height={44}
                    label={false}
                    style={{ borderRadius: 6 }}
                  />
                ) : (
                  <ImagePlaceholder
                    sprite={spriteForUser(c.name)}
                    width={44}
                    height={44}
                    label={false}
                    style={{ borderRadius: 6 }}
                  />
                )}
                <div className="flex-1 min-w-0">
                  <div className="flex justify-between items-center">
                    <span className="font-semibold text-[13px]">{c.name}</span>
                    <span className="text-neutral-400 text-[11px]">{c.time}</span>
                  </div>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-neutral-500 text-[11px] truncate max-w-[180px]">
                      {c.preview}
                    </span>
                    {c.unread > 0 && (
                      <span className="bg-red-500 text-white text-[10px] rounded-lg px-1.5 min-w-4 text-center">
                        {c.unread}
                      </span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      {/* Main area */}
      <div className="flex-1 flex flex-col bg-neutral-100 min-w-0 min-h-0 overflow-hidden">
        {view === 'chats' && chatKey === 'qing' && (
          <ChatFrame name="青青">
            <div className="text-center text-neutral-400 text-[11px] my-3">一周前</div>
            <Message mine name="姚如月">
              搬家完去做个美甲，上次做的<Keyword>生日款</Keyword>很好看，就是款式复杂差点没赶上生日宴
            </Message>
            <div className="text-center text-neutral-400 text-[11px] my-3">昨天</div>
            <Message name="青青">
              <ImagePlaceholder name="分享视频" width={160} height={100} from="#c1d3ff" to="#e4d4ff" />
              <div className="mt-1">这剧好看，推～</div>
            </Message>
            <Message mine name="姚如月">
              在修 ux 问题，晚上看
            </Message>
            <div className="text-center text-neutral-400 text-[11px] my-3">今天 14:06</div>
            <Message mine name="姚如月">
              搬家真的好累
            </Message>
            <Message mine name="姚如月">
              翻出小学的同学录了——
              <div className="mt-1.5">
                <ImagePlaceholder
                  name="同学录（点击查看大图）"
                  width={180}
                  height={120}
                  from="#fff3b0"
                  to="#ffd6a5"
                  onClick={() => setShowBigImg(true)}
                />
              </div>
            </Message>
            <Message mine name="姚如月">
              好想她们啊……
            </Message>
            <Message name="青青">
              你是在<Keyword>璧山</Keyword>读的小学吗？
            </Message>
            <Message mine name="姚如月">
              是的，但我快升六年级的时候就转学走了。
            </Message>
          </ChatFrame>
        )}

        {view === 'chats' && chatKey === 'mom' && (
          <ChatFrame name="妈妈">
            <Message name="妈妈">今天冷，多穿点。</Message>
            <Message mine name="姚如月">
              好。
            </Message>
            <Message name="妈妈">
              今年你是<Keyword>本命年</Keyword>啊，记得穿点红色，妈妈给你寄了袜子。
            </Message>
            <Message mine name="姚如月">
              收到啦～
            </Message>
          </ChatFrame>
        )}

        {view === 'chats' && chatKey === 'zhou' && (
          <ChatFrame name="设计-周雪">
            <div className="text-center text-neutral-400 text-[11px] my-3">昨天</div>
            <Message mine name="姚如月">
              我明天要搬家，今天帮我走查完哈，晚上我修一波。
            </Message>
            <Message name="设计-周雪">
              ok，首页 hero 区间距再大 8px，标题字重换成 medium。详情页卡片阴影偏硬。
              <div className="mt-1">
                <ImagePlaceholder name="设计走查截图" width={160} height={100} from="#e4d4ff" to="#c1d3ff" />
              </div>
            </Message>
            <Message mine name="姚如月">
              好，收到。
            </Message>
          </ChatFrame>
        )}

        {view === 'chats' && chatKey === 'nail' && (
          <ChatFrame name="沁心美甲美睫">
            <div className="text-center text-neutral-400 text-[11px] my-3">3.5</div>
            <Message mine name="姚如月">
              预约周六的美甲～
            </Message>
            <Message name="沁心美甲美睫">好的亲，周六见！</Message>
            <div className="text-center text-neutral-400 text-[11px] my-3">4.13</div>
            <Message mine name="姚如月">
              预约周六的美甲。
            </Message>
            <Message name="沁心美甲美睫">亲，只能提前三天内预约哦。</Message>
          </ChatFrame>
        )}

        {view === 'chats' && chatKey === 'caiqing' && qingAdded && (
          <ChatFrame name="胡采晴">
            <Message name="胡采晴">……我等这一天等了十四年。</Message>
            <Message name="胡采晴">[待补充]</Message>
          </ChatFrame>
        )}

        {view === 'chats' && chatKey === 'mama' && mamaAdded && (
          <ChatFrame name="梦和妈妈">
            <Message name="梦和妈妈">[待补充]</Message>
          </ChatFrame>
        )}

        {view === 'moments' && <Moments />}

        {view === 'add' && (
          <div className="px-16 py-10">
            <h3 className="font-bold mb-3.5 text-base">添加朋友</h3>
            <div className="flex gap-2">
              <input
                className="flex-1 px-2.5 py-2 border border-neutral-300 rounded text-[13px] outline-none"
                placeholder="请输入微信号/手机号"
                value={addInput}
                onChange={(e) => setAddInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && onSearchFriend()}
              />
              <button
                className="px-5 py-2 bg-[#07c160] text-white border-none rounded cursor-pointer"
                onClick={onSearchFriend}
              >
                搜索
              </button>
            </div>
            {addResult && (
              <div className="mt-5 p-3 bg-sky-50 rounded text-neutral-700">{addResult}</div>
            )}
            <div className="mt-8 text-neutral-400 text-xs">
              你也可以通过扫一扫、面对面建群等方式添加朋友。
            </div>
          </div>
        )}

      </div>

      {showBigImg && <TongxueluModal onClose={() => setShowBigImg(false)} />}
    </div>
  )
}
