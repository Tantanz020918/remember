import { create } from 'zustand'

export const TOTAL_PAGES = 36

export const useStore = create((set) => ({
  visited: [1],
  boldKeywords: true,

  // QQ state
  qqGroupJoined: false,
  qqAccountSwitched: false, // switched to caiqing's QQ
  qqAccounts: ['ruyue'], // available QQ accounts

  // puzzle progression
  encryptedPostUnlocked: false, // page 17 (birthday sum)
  caiqingSpaceUnlocked: false, // page 19 (name password)
  wuyannvUnlocked: false, // page 21 (heart grid)
  mazeCompleted: false, // page 21 maze tab
  diaryUnlocked: false, // page 23 (maze key)
  fansPost1Unlocked: false, // page 30 (movie password)
  lockedPostUnlocked: false, // page 34 (word frequency)

  // weibo state
  followedMenghe: false,

  // wechat
  caiqingWechatAdded: false,

  addVisited: (id) =>
    set((s) => ({
      visited: s.visited.includes(id) ? s.visited : [...s.visited, id],
    })),
  toggleBold: () => set((s) => ({ boldKeywords: !s.boldKeywords })),
  setFlag: (key, val) => set({ [key]: val }),
}))
