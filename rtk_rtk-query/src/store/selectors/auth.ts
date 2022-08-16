import type { RootState } from "store";

export const authSelector = (state: RootState): boolean => state.user.isAuth;