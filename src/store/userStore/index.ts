import { IFilteringItem } from "@/types/IFilteringItem";
import { create } from "zustand";

export interface IUserStore {
  isAuth: boolean;
  isLoading: boolean;
  activeFilterOption: Omit<IFilteringItem, "title">;
  setIsAuth: (isAuth: boolean) => void;
  setActiveFilterOption: (
    activeFilterOption: Omit<IFilteringItem, "title">
  ) => void;
}

export const useUserStore = create<IUserStore>()((set) => ({
  isAuth: true,
  isLoading: false,
  activeFilterOption: {
    id: 1,
    property: "active",
  },
  setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
  setActiveFilterOption: (activeFilterOption: Omit<IFilteringItem, "title">) =>
    set(() => ({ activeFilterOption })),
}));
