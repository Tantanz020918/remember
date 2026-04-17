import { useState } from 'react'

export function PasswordLock({ prompt, errorHint, answer, onUnlock, className = '', inputPlaceholder = '请输入密码' }) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)

  const check = () => {
    const trimmed = value.trim()
    if (typeof answer === 'function' ? answer(trimmed) : trimmed === answer) {
      onUnlock()
    } else {
      setError(true)
    }
  }

  return (
    <div className={`flex flex-col items-center justify-center p-10 ${className}`}>
      <div className="bg-white rounded-xl shadow-lg p-8 max-w-md w-full text-center">
        <div className="text-4xl mb-4">🔒</div>
        <div className="text-neutral-700 mb-6 leading-relaxed">{prompt}</div>
        <input
          className="w-full px-4 py-2.5 border border-neutral-300 rounded-lg text-center text-sm outline-none focus:border-sky-400 mb-3"
          placeholder={inputPlaceholder}
          value={value}
          onChange={(e) => { setValue(e.target.value); setError(false) }}
          onKeyDown={(e) => e.key === 'Enter' && check()}
        />
        <button
          onClick={check}
          className="w-full py-2.5 bg-sky-500 text-white rounded-lg cursor-pointer text-sm font-medium hover:bg-sky-600 transition-colors"
        >
          确认
        </button>
        {error && errorHint && (
          <div className="mt-3 text-red-500 text-sm">💡 提示：{errorHint}</div>
        )}
      </div>
    </div>
  )
}
