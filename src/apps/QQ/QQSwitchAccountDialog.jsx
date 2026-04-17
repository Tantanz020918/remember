import { useState } from 'react'
import { ImagePlaceholder, Modal } from '../../components/ui'
import { spriteForUser } from '../../assets/imageUrls'

export function QQSwitchAccountDialog({ isCaiqing, qqAccounts, onClose, onSwitchToAccount, onLoginCaiqing }) {
  const [switchAccount, setSwitchAccount] = useState('')
  const [switchPassword, setSwitchPassword] = useState('')
  const [switchError, setSwitchError] = useState('')

  const onLogin = () => {
    if (switchAccount.trim() === '12831682861' && switchPassword.trim() === 'HcqLOVE0826') {
      onLoginCaiqing()
    } else setSwitchError('账号或密码错误。')
  }

  return (
    <Modal onClose={onClose}>
      <div className="bg-white px-6 py-5 rounded-[10px] min-w-[340px]">
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
          <input className="w-full px-2.5 py-2 border border-neutral-300 rounded mb-2 outline-none text-sm" placeholder="密码" type="password" value={switchPassword} onChange={(e) => setSwitchPassword(e.target.value)} onKeyDown={(e) => e.key === 'Enter' && onLogin()} />
          <button onClick={onLogin} className="w-full py-2 bg-sky-500 text-white rounded border-none cursor-pointer text-sm">登录</button>
          {switchError && <div className="text-red-600 mt-2 text-xs">{switchError}</div>}
        </div>
        <button onClick={onClose} className="mt-3 w-full py-1.5 bg-neutral-100 rounded border-none cursor-pointer text-xs text-neutral-500">取消</button>
      </div>
    </Modal>
  )
}
