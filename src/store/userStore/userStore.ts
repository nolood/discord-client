import { userService } from '@/services/userService';
import { IFilteringItem } from '@/types/IFilteringItem';
import { IFormLogin } from '@/types/IFormLogin';
import { IReg } from '@/types/IReg';
import { FetchStatus } from '@/types/entities/FetchStatus';
import { IUser } from '@/types/entities/IUser';
import axios from 'axios';
import { create } from 'zustand';

export interface IUserStore {
  isAuth: boolean;
  isLoading: boolean;
  activeFilterOption: Omit<IFilteringItem, 'title'>;
  setIsAuth: (isAuth: boolean) => void;
  setActiveFilterOption: (activeFilterOption: Omit<IFilteringItem, 'title'>) => void;
  regUser: (data: IReg) => Promise<boolean>;
  login: (data: IFormLogin) => Promise<boolean>;
  status: FetchStatus;
  users: IUser[];
  getUserByNickname: (nickname: string) => void;
  currentUser: IUser | null;
  setCurrentUser: (user: IUser | null) => void;
  setUsers: (users: IUser[]) => void;
  addFriend: (senderId: number, senderNick: string, recipientId: number) => void;
}

export const useUserStore = create<IUserStore>()((set) => ({
  isAuth: false,
  isLoading: false,
  activeFilterOption: {
    id: 1,
    property: 'active',
  },
  status: 'idle',
  users: [],
  currentUser: null,
  // Установить пользователей
  setUsers: (users: IUser[]) => set(() => ({ users })),
  // Установить данного пользователя
  setCurrentUser: (user: IUser | null) => set(() => ({ currentUser: user })),
  // Получение пользователей по nickname
  getUserByNickname: (nickname: string) => userService.getByNickname(nickname, set),
  // Установить статус входа
  setIsAuth: (isAuth: boolean) => set(() => ({ isAuth })),
  // Установить активный фильтр
  setActiveFilterOption: (activeFilterOption: Omit<IFilteringItem, 'title'>) =>
    set(() => ({ activeFilterOption })),
  // Добавить в друзья
  addFriend: (senderId: number, senderNick: string, recipientId: number) =>
    userService.addFriend(senderId, senderNick, recipientId, set),
  // Регистрация (временная)
  regUser: async (data) => {
    const { email, password, nickname } = data;
    try {
      const res = await axios.post(`http://localhost:5000/users/registration`, {
        email,
        password,
        nickname,
      });

      if (res.data.type !== 'error') {
        localStorage.setItem('discordtoken', JSON.stringify(res.data.message));
        localStorage.setItem('discorduser', JSON.stringify(res.data.user));
        set({ isAuth: true });
      } else {
        set({ isAuth: false });
      }
      return true;
    } catch {
      return false;
    }
  },
  // Вход (временный)
  login: async (data) => {
    const { password, email } = data;
    try {
      const res = await axios.post(`http://localhost:5000/users/login`, {
        password,
        email,
      });
      if (res.data.type !== 'error') {
        localStorage.setItem('discordtoken', JSON.stringify(res.data.message));
        localStorage.setItem('discorduser', JSON.stringify(res.data.user));
        set({ isAuth: true });
      } else {
        set({ isAuth: false });
      }
      return true;
    } catch {
      return false;
    }
  },
}));
