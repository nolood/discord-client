import { IUserStore } from '..';

export const selectIsAuth = (state: IUserStore) => state.isAuth;
export const selectActiveFilterOption = (state: IUserStore) => state.activeFilterOption;
export const selectRegUser = (state: IUserStore) => state.regUser;
export const selectLogin = (state: IUserStore) => state.login;
export const selectSetIsAuth = (state: IUserStore) => state.setIsAuth;
export const selectGetUsersByNickname = (state: IUserStore) => state.getUserByNickname;
export const selectUsers = (state: IUserStore) => state.users;
export const selectSetCurrentUser = (state: IUserStore) => state.setCurrentUser;
export const selectCurrentUser = (state: IUserStore) => state.currentUser;
