import { userService } from '@/services/userService';
import { IFilteringItem } from '@/types/IFilteringItem';
import { IReg } from '@/types/IReg';
import { FetchStatus } from '@/types/entities/FetchStatus';
import axios from 'axios';
import { create } from 'zustand';

export interface IUserStore {
  isAuth: boolean;
  isLoading: boolean;
  activeFilterOption: Omit<IFilteringItem, 'title'>;
  setIsAuth: (isAuth: boolean) => void;
  setActiveFilterOption: (activeFilterOption: Omit<IFilteringItem, 'title'>) => void;
  regUser: (data: IReg) => void;
  status: FetchStatus;
  potentFriends: any[];
}

export const useUserStore = create<IUserStore>()((set) => ({
  isAuth: true,
  isLoading: false,
  activeFilterOption: {
    id: 1,
    property: 'active',
  },
  status: 'idle',
  potentFriends: [],
  // Получение пользователей по nickname
  getUserByNickname: (nickname: string) => userService.getByNickname(nickname, set),
  setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
  // Установить активный фильтр
  setActiveFilterOption: (activeFilterOption: Omit<IFilteringItem, 'title'>) =>
    set(() => ({ activeFilterOption })),
  // Регистрация временная
  regUser: async (data) => {
    const { email, password, nickname } = data;
    const token = await axios.post(`http://localhost:5000/users/registration`, {
      email,
      password,
      nickname,
    });

    localStorage.setItem('discordtoken', JSON.stringify(token));
    set({ isAuth: true });
  },
}));
