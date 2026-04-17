import { create } from 'zustand'

export const TOTAL_PAGES = 36

// Highlight modes for <Keyword>
export const HIGHLIGHT_MODES = ['off', 'bold', 'full']
export const HIGHLIGHT_LABELS = { off: '🌑 关', bold: '🔅 加粗', full: '🔆 高亮' }

const INITIAL_STATE = {
  visited: [1],
  highlightMode: 'bold', // 'off' | 'bold' | 'full'

  // QQ state
  qqGroupJoined: false,
  qqAccountSwitched: false, // switched to caiqing's QQ
  qqAccounts: ['ruyue'], // available QQ accounts

  // puzzle progression
  encryptedPostUnlocked: false,
  caiqingSpaceUnlocked: false,
  wuyannvUnlocked: false,
  mazeCompleted: false,
  diaryUnlocked: false,
  fansPost1Unlocked: false,
  lockedPostUnlocked: false,

  // weibo state
  followedMenghe: false,

}

export const useStore = create((set) => ({
  ...INITIAL_STATE,

  // visited: latest first; if already visited, move to top
  addVisited: (id) =>
    set((s) => {
      const without = s.visited.filter((v) => v !== id)
      return { visited: [id, ...without] }
    }),

  cycleHighlight: () =>
    set((s) => {
      const idx = HIGHLIGHT_MODES.indexOf(s.highlightMode)
      return { highlightMode: HIGHLIGHT_MODES[(idx + 1) % HIGHLIGHT_MODES.length] }
    }),

  setFlag: (key, val) => set({ [key]: val }),

  resetGame: () => set({ ...INITIAL_STATE }),
}))
