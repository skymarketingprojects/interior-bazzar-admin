import { createSlice, type PayloadAction } from "@reduxjs/toolkit";
import type { BaseUser, BaseUserState } from "../../types/global";
import type { UserRoleValue } from "../../utils/constants/app";

const initialState: BaseUserState = {
  user: null,
};

const userSlice = createSlice({
  name: "baseUser",
  initialState,
  reducers: {
    setUser: (state, action: PayloadAction<BaseUser>) => {
      state.user = action.payload;
    },
    setUserRole: (state, action: PayloadAction<UserRoleValue>) => {
      if (!state.user) return;
      state.user.role = action.payload;
    },
    clearUser: () => initialState,
  },
});

const userReduce = userSlice.reducer;

export const { setUser, setUserRole, clearUser } = userSlice.actions;
export default userReduce;
