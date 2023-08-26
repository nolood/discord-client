import { IFilteringItem } from "@/types/IFilteringItem";
import { IReg } from "@/types/IReg";
import axios from "axios";
import { create } from "zustand";

export interface IUserStore {
  isAuth: boolean;
  isLoading: boolean;
  activeFilterOption: Omit<IFilteringItem, "title">;
  setIsAuth: (isAuth: boolean) => void;
  setActiveFilterOption: (
    activeFilterOption: Omit<IFilteringItem, "title">
  ) => void;
  regUser: (data: IReg) => void;
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
  regUser: async (data) => {
    const { email, password, nickname } = data;
    const token = await axios.post(`http://localhost:5000/users/registration`, {
      email,
      password,
      nickname,
    });

    localStorage.setItem("discordtoken", JSON.stringify(token));
    set({ isAuth: true });
  },
}));
