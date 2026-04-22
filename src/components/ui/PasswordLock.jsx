import { useState } from 'react'
import { useStore } from '../../store'

export function PasswordLock({
  prompt,
  errorHint,
  answer,
  onUnlock,
  className = '',
  inputPlaceholder = '请输入密码',
  bare = false,
}) {
  const [value, setValue] = useState('')
  const [error, setError] = useState(false)
  const [wrongCount, setWrongCount] = useState(0)
  const { hintMode } = useStore()

  const check = () => {
    const trimmed = value.trim()
    if (typeof answer === 'function' ? answer(trimmed) : trimmed === answer) {
      onUnlock()
    } else {
      setError(true)
      setWrongCount((c) => c + 1)
    }
  }

  const showHint = error && errorHint && (
    hintMode === 'always' ||
    (hintMode === 'after5' && wrongCount >= 5)
  )

  const form = (
    <>
      <div className="text-4xl mb-4">🔒</div>
      <div className="mb-6 leading-relaxed">{prompt}</div>
      <input
        className={`w-full px-4 py-2.5 rounded-lg text-center text-sm outline-none mb-3 ${
          bare
            ? 'bg-neutral-900/40 border border-neutral-600 text-neutral-100 placeholder:text-neutral-500 focus:border-sky-400'
            : 'border border-neutral-300 focus:border-sky-400'
        }`}
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
      {error && !showHint && (
        <div className="mt-3 text-red-500 text-sm">答案不对哦</div>
      )}
      {showHint && (
        <div className="mt-3 text-red-500 text-sm">💡 提示：{errorHint}</div>
      )}
    </>
  )

  if (bare) {
    return (
      <div className={`max-w-md mx-auto text-center py-6 ${className}`}>{form}</div>
    )
  }

  return (
    <div className={`flex flex-col items-center justify-center p-4 md:p-10 ${className}`}>
      <div className="bg-white rounded-xl shadow-lg p-5 md:p-8 max-w-md w-full text-center text-neutral-700">
        {form}
      </div>
    </div>
  )
}
