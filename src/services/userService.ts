import { IUserStore } from '@/store/userStore/userStore';
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
    set(() => ({ users: [] }));
    try {
      const res = await axios.get(`${baseApi}/users?nickname=${nickname}`);
      set(() => ({ users: res.data }));
      setStatus(set, 'success');
    } catch {
      setStatus(set, 'fail');
    }
  },
  addFriend: async (senderId: number, senderNick: string, recipientId: number, set: SET) => {
    setStatus(set, 'loading');
    try {
      const res = await axios.post(`${baseApi}/users/sendfriendreq`, {
        senderId,
        senderNick,
        recipientId,
      });
      // set(() => ({ users: res.data }));
      setStatus(set, 'success');
    } catch {
      setStatus(set, 'fail');
    }
  },
};
