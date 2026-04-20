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
          <p>她爸爸拉着我的手说：「采晴真是个好姑娘，成绩好，跟梦和一起进步。之前那个女孩叫什么忘记了，跟梦和玩都影响梦和学习了，真是要不得。」还说想设立「<Keyword>梦之奖学金</Keyword>」来奖励优等生。</p>
          <p>听她爸这样子说如月，我不知道为什么梦和一直沉默，曾经的好友被这样子说不应该感到愤怒吗？</p>
          <p>而且当时如月成绩并不差，我的成绩反而是最差的，为什么她爸会这样想如月？</p>
          <p>我突然回忆起，当时如月要走了，说是爸妈不知道为什么突然被调走了，我感觉其中肯定有什么问题……</p>
          <p>虽然我跟如月的感情没有之前深了，但我仍然想知道真相。</p>
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
              <p className="text-sm text-neutral-500">迷失之蝶</p>
            </div>
          }
          errorHint="迷宫"
          answer="2575"
          onUnlock={() => setFlag('diaryUnlocked', true)}
          className="min-h-[400px]"
        />
      ) : (
        <DiaryContent />
      )}
    </BrowserFrame>
  )
}
