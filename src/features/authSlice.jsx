import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  user: null,
  register: null,
};

const authSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
    setRegister: (state, action) => {
      state.register = action.payload;
    },
  },
});
export const { setUser, clearUser, setRegister } = authSlice.actions;
export default authSlice.reducer;
