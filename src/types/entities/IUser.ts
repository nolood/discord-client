import { UserStatus } from './UserStatus';

export interface IUser {
  id: number;
  nickname: string;
  email: string;
  password: string;
  friends: number[];
  roles: string[];
  avatar: string | null;
  servers: number[];
  channels: number[];
  requests: any[];
  blockedUsers: number[];
  refreshToken: string | null;
  status: UserStatus;
  createdAt: string | null;
  updatedAt: string | null;
}
