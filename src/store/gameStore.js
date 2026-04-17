import { create } from 'zustand';
import { timedMessages } from '../data/gameData';

const useGameStore = create((set, get) => ({
  // Game phase: 'prologue' | 'desktop' | 'ending'
  phase: 'prologue',
  setPhase: (phase) => set({ phase }),

  // Ending
  endingId: null,
  setEnding: (id) => set({ endingId: id, phase: 'ending' }),

  // Time system
  gameStartTime: null,
  elapsedSeconds: 0,
  timerInterval: null,
  pauseUntil: 0,

  startTimer: () => {
    const now = Date.now();
    set({ gameStartTime: now });
    const interval = setInterval(() => {
      const state = get();
      if (Date.now() < state.pauseUntil) return;
      const elapsed = Math.floor((Date.now() - state.gameStartTime) / 1000);
      set({ elapsedSeconds: elapsed });
      // Check timed messages
      timedMessages.forEach((tm) => {
        if (elapsed >= tm.delay && !state.sentTimedMessages.includes(tm.delay)) {
          if (tm.event === 'doorbell') {
            // Time's up - force ending B if no choice made
            set((s) => ({
              sentTimedMessages: [...s.sentTimedMessages, tm.delay],
            }));
            get().triggerDoorbell();
          } else {
            set((s) => ({
              sentTimedMessages: [...s.sentTimedMessages, tm.delay],
              notifications: [...s.notifications, { id: Date.now(), title: '妈妈', text: tm.text, app: 'messages' }],
              timedMomMessages: [...s.timedMomMessages, { text: tm.text, time: '刚刚' }],
            }));
          }
        }
      });
    }, 1000);
    set({ timerInterval: interval });
  },

  pauseTimer: (seconds) => {
    set({ pauseUntil: Date.now() + seconds * 1000 });
  },

  sentTimedMessages: [],
  timedMomMessages: [],

  triggerDoorbell: () => {
    const state = get();
    if (state.phase !== 'ending') {
      // If player hasn't chosen, force ending B
      set({
        notifications: [...state.notifications, { id: Date.now(), title: '系统', text: '门锁转动的声音……', app: 'system' }],
      });
      setTimeout(() => {
        const s = get();
        if (s.phase !== 'ending') {
          s.setEnding('B');
        }
      }, 3000);
    }
  },

  // Windows
  openWindows: [],
  windowZCounter: 10,

  openWindow: (appId, props = {}) => {
    const state = get();
    const existing = state.openWindows.find((w) => w.appId === appId);
    if (existing) {
      // Bring to front
      set({
        openWindows: state.openWindows.map((w) =>
          w.appId === appId ? { ...w, zIndex: state.windowZCounter + 1 } : w
        ),
        windowZCounter: state.windowZCounter + 1,
      });
      return;
    }
    const offset = state.openWindows.length * 30;
    set({
      openWindows: [
        ...state.openWindows,
        {
          appId,
          zIndex: state.windowZCounter + 1,
          x: 120 + offset,
          y: 60 + offset,
          width: props.width || 700,
          height: props.height || 500,
          ...props,
        },
      ],
      windowZCounter: state.windowZCounter + 1,
    });
  },

  closeWindow: (appId) => {
    set((s) => ({ openWindows: s.openWindows.filter((w) => w.appId !== appId) }));
  },

  bringToFront: (appId) => {
    set((s) => ({
      openWindows: s.openWindows.map((w) =>
        w.appId === appId ? { ...w, zIndex: s.windowZCounter + 1 } : w
      ),
      windowZCounter: s.windowZCounter + 1,
    }));
  },

  updateWindowPos: (appId, x, y) => {
    set((s) => ({
      openWindows: s.openWindows.map((w) =>
        w.appId === appId ? { ...w, x, y } : w
      ),
    }));
  },

  // Clues
  discoveredClues: [],
  addClue: (clue) => {
    const state = get();
    if (!clue || state.discoveredClues.find((c) => c.id === clue.id)) return;
    set({
      discoveredClues: [...state.discoveredClues, clue],
    });
    // Pause timer for important clue
    state.pauseTimer(3);
  },

  // Clue panel
  cluePanelOpen: false,
  toggleCluePanel: () => set((s) => ({ cluePanelOpen: !s.cluePanelOpen })),

  // Monologue
  currentMonologue: null,
  showMonologue: (text) => {
    set({ currentMonologue: text });
    setTimeout(() => {
      set((s) => (s.currentMonologue === text ? { currentMonologue: null } : {}));
    }, 4000);
  },

  // Notifications
  notifications: [],
  addNotification: (notif) => {
    set((s) => ({
      notifications: [...s.notifications, { id: Date.now(), ...notif }],
    }));
  },
  dismissNotification: (id) => {
    set((s) => ({
      notifications: s.notifications.filter((n) => n.id !== id),
    }));
  },

  // Track seen items for monologue triggers
  seenItems: new Set(),
  markSeen: (itemId) => {
    set((s) => {
      const newSet = new Set(s.seenItems);
      newSet.add(itemId);
      return { seenItems: newSet };
    });
  },
  hasSeen: (itemId) => get().seenItems.has(itemId),

  // Encrypted notes
  unlockedNotes: [],
  unlockNote: (noteId) => {
    set((s) => ({ unlockedNotes: [...s.unlockedNotes, noteId] }));
  },
  passwordAttempts: 0,
  incrementPasswordAttempts: () => set((s) => ({ passwordAttempts: s.passwordAttempts + 1 })),
  resetPasswordAttempts: () => set({ passwordAttempts: 0 }),

  // Finder hidden files
  showHiddenFiles: false,
  toggleHiddenFiles: () => set((s) => ({ showHiddenFiles: !s.showHiddenFiles })),

  // Initial open note (shopping list)
  initialNoteOpen: true,

  // Search history for ending D
  hasSearchedRitualFailure: false,
  setSearchedRitualFailure: () => set({ hasSearchedRitualFailure: true }),

  // Ending choices
  showEndingChoice: false,
  setShowEndingChoice: (v) => set({ showEndingChoice: v }),
}));

export default useGameStore;
