import create from "zustand";
import { generateInitialBots } from "../api/mockApi";

const useStore = create((set, get) => ({
  auth: { loggedIn: false, user: null },
  bots: generateInitialBots(),
  tasks: [],
  // auth
  login: (user) => set({ auth: { loggedIn: true, user } }),
  logout: () => set({ auth: { loggedIn: false, user: null } }),
  // tasks
  addTask: (task) => set(state => ({ tasks: [task, ...state.tasks] })),
  popTask: () => set(state => ({ tasks: state.tasks.slice(1) })),
  clearTasks: () => set({ tasks: [] }),
  // bots
  updateBots: (updated) => set({ bots: updated }),
  updateSingleBot: (botId, patch) => set(state => ({
    bots: state.bots.map(b => b.id === botId ? { ...b, ...patch } : b)
  }))
}));

export default useStore;
