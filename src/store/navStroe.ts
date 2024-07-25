import { create } from "zustand";

type NavStore = {
  activeName: string;
  setActiveName: (arg: string) => void; // 모달 열기 함수
};

export const navStore = create<NavStore>((set) => ({
  activeName: "홈",
  setActiveName: (arg) => set({ activeName: arg }),
}));
