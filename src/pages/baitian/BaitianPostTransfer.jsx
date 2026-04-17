import { BaitianPostDetail } from './BaitianPostDetail'
import { TRANSFER_FLOORS } from '../../data/baitianTransferData'

export function BaitianPostTransfer() {
  return <BaitianPostDetail title="【心情】朋友转学了好伤心" floors={TRANSFER_FLOORS} />
}
