import { IUserStore } from "..";

export const selectIsAuth = (state: IUserStore) => state.isAuth;
export const selectActiveFilterOption = (state: IUserStore) =>
  state.activeFilterOption;
export const selectRegUser = (state: IUserStore) => state.regUser;
