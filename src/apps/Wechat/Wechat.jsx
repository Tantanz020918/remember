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
]

export function Wechat() {
  const [view, setView] = useState('chats')
  const [chatKey, setChatKey] = useState('qing')
  const [showBigImg, setShowBigImg] = useState(false)
  const { qingAdded, mamaAdded } = useStore()

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
              下周搬家完准备去做个美甲，指甲又长长了
            </Message>
              <Message name="青青">
              <div >还是去上次那家吗？</div>
            </Message>
            <Message mine name="姚如月">
             对，上次做的<Keyword>生日款</Keyword>很好看，就是款式复杂差点没赶上生日宴
            </Message>
              <Message name="青青">
              <div >确实，难免的</div>
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
              翻出小学的<Keyword>同学录</Keyword>了
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
            <Message name="青青">
              蛮可惜的~~
            </Message>
          </ChatFrame>
        )}

        {view === 'chats' && chatKey === 'mom' && (
          <ChatFrame name="妈妈">
            <div className="text-center text-neutral-400 text-[11px] my-3">1.13</div>
           <Message name="妈妈">降温了，多穿点。</Message>
            <Message mine name="姚如月">好，你们也注意保暖</Message>
                        <div className="text-center text-neutral-400 text-[11px] my-3">2.10</div>
           <Message name="妈妈">闺女，票买了没？</Message>
            <Message mine name="姚如月">买好了，16号下午2点到</Message>
            <Message name="妈妈">知道了</Message>
            <div className="text-center text-neutral-400 text-[11px] my-3">3.2</div>
            <Message name="妈妈">
              今年你是<Keyword>本命年</Keyword>啊，记得穿点红色，妈妈给你寄了袜子。
            </Message>
            <Message mine name="姚如月">收到啦～爱你妈妈</Message>
            <Message name="妈妈">你爸爸前两天血压又高了，我让他少喝酒。</Message>
            <Message mine name="姚如月">爸是老毛病了，让他注意点，我晚点打电话给他念叨。</Message>
            <div className="text-center text-neutral-400 text-[11px] my-3">16:39</div>
             <Message name="妈妈">闺女，新家安顿好了吗？</Message>
            <Message mine name="姚如月">安顿得差不多啦，就是东西还没归位。</Message>
            <Message name="妈妈">要不要妈妈周末过去帮你收拾？</Message>
            <Message mine name="姚如月">不用啦，我自己慢慢弄就好啦～</Message>
            <Message name="妈妈">记得按时吃饭，别老点外卖。</Message>
            <Message mine name="姚如月">嗯嗯，我今天煮了粥～</Message>
            <Message name="妈妈">那就好，吃好才有精神上班。</Message>
            
            <Message name="妈妈">傻孩子😊 五一回来吗？</Message>
            <Message mine name="姚如月">看情况，如果不加班就回</Message>
            <Message name="妈妈">哎好，妈妈给你炖排骨汤🥘</Message>
            <Message mine name="姚如月">爱你老妈</Message>
          </ChatFrame>
        )}

        {view === 'chats' && chatKey === 'zhou' && (
          <ChatFrame name="设计-周雪">
            <div className="text-center text-neutral-400 text-[11px] my-3">昨天</div>
            <Message mine name="姚如月">
              雪姐，我明天要搬家，今天帮我走查完哈，晚上我修一波。
            </Message>
             <Message name="设计-周雪">
              ok，马上开始走查
            </Message>
            <Message name="设计-周雪">
              首页 hero 区间距再大 8px，标题字重换成 medium。详情页卡片阴影偏硬。
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
            <Message name="沁心美甲美睫">好的亲，下午四点钟可以吗？</Message>
            <Message mine name="姚如月">早点吧，1点行不行</Message>
            <Message name="沁心美甲美睫">可以的宝子，帮你约上啦</Message>
            <div className="text-center text-neutral-400 text-[11px] my-3">4.13</div>
            <Message mine name="姚如月">
              我要预约这周六的美甲
            </Message>
            <Message name="沁心美甲美睫">亲，只能提前三天内预约哦。</Message>
            <Message mine name="姚如月">
              行
            </Message>
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

      </div>

      {showBigImg && <TongxueluModal onClose={() => setShowBigImg(false)} />}
    </div>
  )
}
