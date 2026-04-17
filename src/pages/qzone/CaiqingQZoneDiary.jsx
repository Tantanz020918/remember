import { useStore } from '../../store'
import { BrowserFrame } from '../../browser/BrowserFrame'
import { Keyword, PasswordLock } from '../../components/ui'

function DiaryContent() {
  return (
    <div className="max-w-[680px] mx-auto py-8 px-6">
      <div className="bg-white rounded-lg shadow-sm p-8">
        <h2 className="text-lg font-bold mb-1">独白</h2>
        <div className="text-neutral-400 text-xs mb-6">2018.2.28 · 仅自己可见</div>
        <div className="text-sm leading-loose text-neutral-700 space-y-4">
          <p>今天参加了梦和的成人礼。</p>
          <p>她爸爸拉着我的手说：「采晴真是个好姑娘，成绩好，跟梦和一起进步。之前那个女孩叫什么忘记了，跟梦和玩都影响梦和学习了，真是要不得。」</p>
          <p>他还说想设立「<Keyword>梦之奖学金</Keyword>」来奖励优等生。</p>
          <p>那一瞬间我全明白了。</p>
          <p>如月不是自己要走的。是梦和——不，是梦和的爸爸，把如月的爸爸调走了。而梦和，她知道。她一直都知道。</p>
          <p>七年了。七年来我无数次问她知不知道如月的消息，她每次都说不知道。</p>
          <p>我需要整理一下心情。然后，我要质问她。</p>
        </div>
      </div>
    </div>
  )
}

export function CaiqingQZoneDiary() {
  const { diaryUnlocked, setFlag } = useStore()

  return (
    <BrowserFrame>
      {!diaryUnlocked ? (
        <PasswordLock
          prompt={
            <div>
              <p className="text-lg mb-2">🔒 私密日志</p>
              <p className="text-sm text-neutral-500">谜面：<b>key</b></p>
            </div>
          }
          errorHint="迷宫"
          answer="5725"
          onUnlock={() => setFlag('diaryUnlocked', true)}
          className="min-h-[400px]"
        />
      ) : (
        <DiaryContent />
      )}
    </BrowserFrame>
  )
}
