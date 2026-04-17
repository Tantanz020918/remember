import { useStore } from '../../store'
import { Keyword, PasswordLock } from '../../components/ui'
import { ForumFloor } from './ForumFloor'
import { BaitianPostDetail } from './BaitianPostDetail'

export function BaitianPostEncrypted() {
  const { encryptedPostUnlocked, setFlag } = useStore()

  return (
    <BaitianPostDetail title="🔒 你是如月吗？" hideActions={!encryptedPostUnlocked}>
      {!encryptedPostUnlocked ? (
        <PasswordLock
          prompt={
            <div>
              <p className="mb-2">如果不是，请关闭。</p>
              <p>如果是，那你一定知道——</p>
              <p className="font-bold mt-2">我们三个人的生日加起来是多少？</p>
              <p className="text-neutral-400 text-xs mt-2">（格式：四位数字）</p>
            </div>
          }
          errorHint="想想三个人的生日，MMDD 格式相加"
          answer="1362"
          onUnlock={() => setFlag('encryptedPostUnlocked', true)}
        />
      ) : (
        <ForumFloor
          owner
          avatarName="闺蜜头像1"
          avatarFrom="#ffccee"
          avatarTo="#ff99cc"
          userName="采晴0826"
          userLv="Lv.8"
          meta="2011-07-15"
        >
          <p>如月，我们都好想你啊，你在新学校过得好吗，有交到新朋友吗？</p>
          <p>她们一定没有我和梦好！</p>
          <p className="mt-3">
            一定要加我的QQ：<Keyword>12831682861</Keyword>，么么哒~~
          </p>
          <p className="text-neutral-400 text-xs mt-4">❤ 永远的三姐妹 ❤</p>
        </ForumFloor>
      )}
    </BaitianPostDetail>
  )
}
