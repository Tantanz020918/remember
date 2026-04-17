import { useNavigate } from 'react-router-dom'
import { useStore } from '../store'
import { PAGES } from '../pages/registry'

// Page IDs that implicitly switch the active QQ account.
// Visiting these via the dropdown should sync qqAccountSwitched.
const CAIQING_QQ_PAGES = new Set([22]) // 采晴的 QQ 聊天
const RUYUE_QQ_PAGES = new Set([3, 15]) // 姚如月自己的 QQ / 粉丝群

export function useGameNavigate() {
  const routerNavigate = useNavigate()
  const addVisited = useStore((s) => s.addVisited)
  const setFlag = useStore((s) => s.setFlag)

  return (pageId) => {
    addVisited(pageId)
    const page = PAGES[pageId]
    // Sync QQ account based on destination page to avoid inconsistency
    // when using the top-right history dropdown.
    if (CAIQING_QQ_PAGES.has(pageId)) {
      setFlag('qqAccountSwitched', true)
    } else if (RUYUE_QQ_PAGES.has(pageId)) {
      setFlag('qqAccountSwitched', false)
    }
    routerNavigate(page?.path ? `/${page.path}` : '/')
  }
}
