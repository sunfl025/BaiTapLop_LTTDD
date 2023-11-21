import { createSlice } from "@reduxjs/toolkit";

const userAuthentication = createSlice({
  name: "userAuthentication",
  initialState: {
    user: {
      id: null,
      email: "trang@gmail.com",
      password: "",
    },
  },
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});
export const { setUser } = userAuthentication.actions;
export default userAuthentication.reducer;
