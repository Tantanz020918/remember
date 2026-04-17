import { useGameNavigate } from '../../hooks/useGameNavigate'

export function EndingForgive() {
  const navigate = useGameNavigate()
  return (
    <div className="min-h-full flex flex-col items-center justify-center bg-linear-to-b from-neutral-900 to-neutral-800 text-white p-10">
      <div className="max-w-lg text-center space-y-6">
        <div className="text-5xl mb-4">🌙</div>
        <h1 className="text-2xl font-bold">结局一：原谅</h1>
        <p className="text-neutral-300 leading-loose">
          你以如月和采晴的名义写下了回复：「我们原谅你。」
        </p>
        <p className="text-neutral-300 leading-loose">
          屏幕那头，是墨尔本清晨六点的阳光。一个女孩看到了这条评论，哭了很久很久。
        </p>
        <p className="text-neutral-400 text-sm leading-loose">
          有些伤痕不会消失，但原谅是给彼此的一个机会——不是说「没关系」，而是说「我愿意往前走」。
        </p>
        <div className="pt-6">
          <button
            onClick={() => navigate(1)}
            className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-sm cursor-pointer hover:bg-white/20"
          >
            回到桌面
          </button>
        </div>
      </div>
    </div>
  )
}

export function EndingSilence() {
  const navigate = useGameNavigate()
  return (
    <div className="min-h-full flex flex-col items-center justify-center bg-linear-to-b from-neutral-900 to-neutral-800 text-white p-10">
      <div className="max-w-lg text-center space-y-6">
        <div className="text-5xl mb-4">🌑</div>
        <h1 className="text-2xl font-bold">结局二：沉默</h1>
        <p className="text-neutral-300 leading-loose">
          你关闭了页面，没有留下任何文字。
        </p>
        <p className="text-neutral-300 leading-loose">
          有些问题没有标准答案。原谅与否，都是一种选择。沉默，也是一种回答。
        </p>
        <p className="text-neutral-400 text-sm leading-loose">
          也许有一天，三个人会在某个意想不到的地方重逢。也许不会。
        </p>
        <div className="pt-6">
          <button
            onClick={() => navigate(1)}
            className="px-6 py-2 bg-white/10 border border-white/20 rounded-full text-sm cursor-pointer hover:bg-white/20"
          >
            回到桌面
          </button>
        </div>
      </div>
    </div>
  )
}
