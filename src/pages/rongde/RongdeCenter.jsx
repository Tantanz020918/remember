import { useState } from 'react'
import { useStore } from '../../store'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { Modal, DeadLink, Toast, useToast } from '../../components/ui'
import { RONGDE_REPORTS, ReportCard } from '../../data/rongdeReports'

const NAV = ['首页', '业务介绍', '专家团队', '报告查询', '联系我们']

export function RongdeCenter() {
  const { setFlag } = useStore()
  const toast = useToast()
  const [name, setName] = useState('')
  const [idNumber, setIdNumber] = useState('')
  const [showList, setShowList] = useState(false)
  const [errorMsg, setErrorMsg] = useState('')
  const [viewingId, setViewingId] = useState(null)

  const onQuery = () => {
    if (name.trim() === '李梦和' && idNumber.trim().toUpperCase() === '50022720000229782X') {
      setShowList(true)
      setErrorMsg('')
      setFlag('reportsQueried', true)
      toast.show(
        '温馨提示：上网请注意保护隐私，只言片语也可以拼凑成完整的个人信息',
        6000,
      )
    } else {
      setShowList(false)
      setErrorMsg('未查到相关报告。请核对姓名与身份证号是否正确。')
    }
  }

  const reports = [...RONGDE_REPORTS].sort((a, b) => b.date.localeCompare(a.date))
  const viewingReport = viewingId ? reports.find((r) => r.id === viewingId) : null

  return (
    <BrowserFrame>
      <div className="bg-white text-[13px] min-h-full">
        <div className="flex items-center gap-3 md:gap-4 px-4 md:px-8 py-3 md:py-4 border-b-2 border-sky-600 bg-linear-to-r from-sky-50 to-white">
          <div className="w-12 h-12 rounded-full bg-linear-to-br from-sky-500 to-sky-700 flex items-center justify-center text-white font-bold text-lg">荣</div>
          <div>
            <h1 className="text-[20px] font-bold text-sky-700 tracking-wider">荣德心理咨询所</h1>
            <div className="text-[11px] text-neutral-500">Rongde Psychological Consulting · 让心有所依</div>
          </div>
        </div>
        <div className="flex gap-4 md:gap-6 px-4 md:px-8 py-3 bg-sky-700 text-white text-[13px] overflow-x-auto whitespace-nowrap">
          {NAV.map((n) => (
            <a key={n} className={`cursor-pointer shrink-0 ${n === '报告查询' ? 'font-bold underline' : 'hover:opacity-80'}`}>{n}</a>
          ))}
        </div>

        <div className="px-4 md:px-10 pt-5 md:pt-8 pb-8 md:pb-12 max-w-[820px]">
          <h3 className="font-bold mb-2">咨询报告查询</h3>
          <p className="text-neutral-600 text-[13px] mb-1">输入来访者姓名和身份证号查询历史咨询报告。</p>
          <p className="text-neutral-400 text-[12px] mb-4">⚠️ 本游戏所涉及的身份证号均为虚构，无需符合「校验码算法」，不会对应任何现实中的人。</p>
          <div className="flex flex-col md:flex-row gap-2.5 mb-3">
            <input
              value={name}
              onChange={(e) => { setName(e.target.value); setErrorMsg('') }}
              placeholder="姓名"
              className="px-3 py-2 border border-neutral-300 rounded text-[13px] outline-none focus:border-sky-500 w-full md:w-32"
              onKeyDown={(e) => e.key === 'Enter' && onQuery()}
            />
            <input
              value={idNumber}
              onChange={(e) => { setIdNumber(e.target.value); setErrorMsg('') }}
              placeholder="身份证号（18 位）"
              className="px-3 py-2 border border-neutral-300 rounded text-[13px] font-mono tracking-wider outline-none focus:border-sky-500 w-full md:w-72"
              onKeyDown={(e) => e.key === 'Enter' && onQuery()}
            />
            <button
              onClick={onQuery}
              className="w-full md:w-auto px-5 py-2 bg-sky-600 text-white border-none rounded cursor-pointer text-[13px] hover:bg-sky-700"
            >
              查询
            </button>
          </div>
          {errorMsg && <div className="text-red-600 text-[13px] mb-3">{errorMsg}</div>}

          {showList && (
            <div className="mt-4">
              <div className="text-[13px] text-neutral-600 mb-2">来访者：<b>李梦和</b>（2000-02-29）· 共 {reports.length} 次咨询记录</div>
              <ul className="bg-white border border-neutral-200 rounded overflow-hidden">
                {reports.map((r) => (
                  <li key={r.id} className="px-4 py-3 border-b last:border-b-0 border-neutral-100 hover:bg-sky-50/60 cursor-pointer flex items-center justify-between" onClick={() => setViewingId(r.id)}>
                    <div>
                      <div className="font-semibold">{r.title}</div>
                      <div className="text-neutral-500 text-xs mt-0.5">{r.summary}</div>
                    </div>
                    <div className="text-neutral-400 text-xs shrink-0 ml-4">{r.date}</div>
                  </li>
                ))}
              </ul>
            </div>
          )}

          <div className="mt-10 text-[12px] text-neutral-400 border-t border-neutral-100 pt-4 space-y-1">
            <DeadLink>· 关于我们</DeadLink>
            <DeadLink>· 隐私声明</DeadLink>
            <div>© 2024 荣德心理咨询所 · 渝 ICP 备 xxxxxxxx 号</div>
          </div>
        </div>
      </div>

      {viewingReport && (
        <Modal onClose={() => setViewingId(null)}>
          <ReportCard report={viewingReport} censored={false} />
        </Modal>
      )}

      <Toast message={toast.message} visible={toast.visible} />
    </BrowserFrame>
  )
}
