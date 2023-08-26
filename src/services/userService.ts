import { IUserStore } from '@/store/userStore';
import { setStatus } from '@/utils/funcs/setStatus';
import axios from 'axios';
import { baseApi } from './api';

type SET = (
  partial:
    | IUserStore
    | Partial<IUserStore>
    | ((state: IUserStore) => IUserStore | Partial<IUserStore>),
  replace?: boolean | undefined,
) => void;

export const userService = {
  // Получение пользователей по nickname
  getByNickname: async (nickname: string, set: SET) => {
    setStatus(set, 'loading');
    try {
      const { data } = await axios.get(`${baseApi}/users/${nickname}`);
      set(() => ({ potentFriends: data }));
      setStatus(set, 'success');
    } catch {
      setStatus(set, 'fail');
    }
  },
};
