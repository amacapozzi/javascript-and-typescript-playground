import { create } from "zustand";

export type LanguageOption = "JavaScript" | "TypeScript";

type State = {
  code: string;
  language: LanguageOption;
};

type Action = {
  setCode: (code: string) => void;
  setLanguage: (language: string) => void;
};

export const useCodeStore = create<State & Action>()((set) => ({
  code: "console.log('Hello worlds')",
  language: "JavaScript",
  setLanguage: (language: string) =>
    set(() => ({
      language: language as LanguageOption,
    })),
  setCode: () => set((state) => ({ code: state.code })),
}));
