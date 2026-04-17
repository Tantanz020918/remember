import { GroupMessage } from '../components/ui'

export const FANQUAN_HEADER = '2013 年 1 月 2 日 14:30'

export const FANQUAN_MESSAGES = [
  { avatarFrom: '#ffd1dc', avatarTo: '#ff9aa2', name: '沐季千柠', time: '14:30', text: '大家看一下群公告里的新戏人物设定哈～' },
  { avatarFrom: '#c1e8ff', avatarTo: '#6ec4f7', name: '糖糖不吃糖', time: '14:32', text: '催更催更！上一部还没演完呢' },
  { avatarFrom: '#d4f0c2', avatarTo: '#8cd07d', name: '编剧+女主', time: '14:35', text: '剧本还在改，再等等～新戏的人物设定已经发在公告里了' },
  { avatarFrom: '#ffe7b3', avatarTo: '#ffb86b', name: '奥比小王子', time: '14:38', text: '期待新戏！' },
]

export function FanquanMessages() {
  return (
    <>
      <div className="text-center text-neutral-400 text-[11px] my-2.5">{FANQUAN_HEADER}</div>
      {FANQUAN_MESSAGES.map((m, i) => (
        <GroupMessage key={i} avatarFrom={m.avatarFrom} avatarTo={m.avatarTo} name={m.name} time={m.time}>
          {m.text}
        </GroupMessage>
      ))}
    </>
  )
}
