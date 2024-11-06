import { create } from "zustand";

type State = {
  code: string;
};

type Action = {
  setCode: (code: string) => void;
};

export const useCodeStore = create<State & Action>()((set) => ({
  code: "console.log('Hello worlds')",
  setCode: () => set((state) => ({ code: state.code })),
}));
