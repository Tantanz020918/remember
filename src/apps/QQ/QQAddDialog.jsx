import { useState } from 'react'
import { Avatar, ImagePlaceholder, Keyword, Modal } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'
import { CAIQING_REQUESTS } from '../../data/qqData'

export function QQAddDialog({ isCaiqing, onClose, onJoinGroup, onVisitCaiqingSpace, onVisitRumengling }) {
  const [addTab, setAddTab] = useState(isCaiqing ? 'requests' : 'search')
  const [addInput, setAddInput] = useState('')
  const [foundGroup, setFoundGroup] = useState(false)
  const [foundCaiqing, setFoundCaiqing] = useState(false)
  const [foundRumengling, setFoundRumengling] = useState(false)
  const [showCaiqingProfile, setShowCaiqingProfile] = useState(false)
  const [showRumenglingProfile, setShowRumenglingProfile] = useState(false)
  const [askingQuestion, setAskingQuestion] = useState(false)
  const [answer, setAnswer] = useState('')
  const [friendRequestSent, setFriendRequestSent] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')

  const onSearch = () => {
    setErrorMsg('')
    setFoundCaiqing(false)
    setFoundGroup(false)
    setFoundRumengling(false)
    const q = addInput.trim()
    if (q === '2932818921') setFoundGroup(true)
    else if (q === '12831682861') setFoundCaiqing(true)
    else if (q === '如梦令' || q === '283648291') setFoundRumengling(true)
    else setErrorMsg('未找到相关用户或群。')
  }

  const onSubmitAnswer = () => {
    if (answer.trim() === '待你回眸一笑') onJoinGroup()
    else setErrorMsg('答案不正确。')
  }

  return (
    <Modal onClose={onClose}>
      <div className="bg-white px-6 py-5 rounded-[10px] min-w-[380px] max-w-[420px]">
        {isCaiqing && (
          <div className="flex border-b border-neutral-200 mb-3 text-sm">
            <span className={`pb-2 px-3 cursor-pointer ${addTab === 'search' ? 'border-b-2 border-sky-500 font-bold text-sky-600' : 'text-neutral-500'}`} onClick={() => setAddTab('search')}>查找</span>
            <span className={`pb-2 px-3 cursor-pointer ${addTab === 'requests' ? 'border-b-2 border-sky-500 font-bold text-sky-600' : 'text-neutral-500'}`} onClick={() => setAddTab('requests')}>好友申请</span>
          </div>
        )}

        {(!isCaiqing || addTab === 'search') && (
          <>
            <h3 className="font-bold mb-2.5">查找联系人 / 群</h3>
            <input className="w-full px-2.5 py-2 border border-neutral-300 rounded my-2.5 outline-none" placeholder="QQ 号 / 用户名 / 群号" value={addInput} onChange={(e) => setAddInput(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && onSearch()} />
            <div className="flex gap-2 mt-2">
              <button onClick={onSearch} className="px-4 py-1.5 bg-sky-500 text-white rounded border-none cursor-pointer text-[13px]">查找</button>
              <button onClick={onClose} className="px-4 py-1.5 bg-white text-neutral-600 rounded border border-neutral-300 cursor-pointer text-[13px]">关闭</button>
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

            {foundRumengling && !showRumenglingProfile && (
              <div className="mt-3 flex gap-3 items-center p-3 bg-emerald-50 rounded-lg cursor-pointer hover:bg-emerald-100" onClick={() => setShowRumenglingProfile(true)}>
                <ImagePlaceholder sprite={spriteForUser('如梦令')} width={44} height={44} round label={false} />
                <div><div className="font-bold text-sm">如梦令</div><div className="text-neutral-400 text-xs">QQ 283648291</div></div>
              </div>
            )}
            {foundRumengling && showRumenglingProfile && (
              <div className="mt-3 bg-white rounded-xl overflow-hidden shadow-lg border border-neutral-200">
                <div className="bg-linear-to-br from-emerald-400 to-emerald-600 text-white text-center pt-5 pb-3 px-5">
                  <ImagePlaceholder sprite={spriteForUser('如梦令')} width={72} height={72} round label={false} className="mx-auto shadow-lg" />
                  <h2 className="text-base font-bold mt-2">如梦令</h2>
                  <div className="text-white/70 text-xs">QQ 283648291</div>
                </div>
                <div className="px-4 py-2 space-y-1.5 text-sm">
                  <div className="flex py-1 border-b border-neutral-100"><b className="w-14 text-neutral-500 font-normal text-xs">签名</b><span className="text-xs text-neutral-400">这个人很懒，什么都没留下</span></div>
                  <div className="flex py-1"><b className="w-14 text-neutral-500 font-normal text-xs">空间</b>
                    <span className="text-emerald-600 text-xs cursor-pointer hover:underline font-bold" onClick={onVisitRumengling}>访问 →</span>
                  </div>
                </div>
                <div className="px-4 pb-3">
                  <button disabled className="w-full py-2 bg-neutral-200 text-neutral-400 border-none rounded-full text-sm cursor-not-allowed">对方暂时不接受好友申请</button>
                </div>
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
                  <div className="flex py-1 border-b border-neutral-100"><b className="w-14 text-neutral-500 font-normal text-xs">签名</b><span className="text-xs"><Keyword>曾沿着雪路浪游 为何为好事泪流</Keyword></span></div>
                  <div className="flex py-1"><b className="w-14 text-neutral-500 font-normal text-xs">空间</b>
                    <span className="text-sky-600 text-xs cursor-pointer hover:underline font-bold" onClick={onVisitCaiqingSpace}>访问 →</span>
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
           
          </div>
        )}
      </div>
    </Modal>
  )
}
