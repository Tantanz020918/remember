import { BaitianPostDetail } from './BaitianPostDetail'
import { DECODE_FLOORS } from '../../data/baitianDecodeData'

export function ForumPostDecode() {
  return <BaitianPostDetail title="为什么我打开游戏一堆乱码？" floors={DECODE_FLOORS} />
}
