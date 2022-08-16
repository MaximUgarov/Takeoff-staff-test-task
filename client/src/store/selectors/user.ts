import type { RootState } from "store";
import type { User } from "types/user";

export const userSelector = (state: RootState): User | null => state.user.user;