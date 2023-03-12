import { createSlice } from "@reduxjs/toolkit";

const initialState = () => {
  const loggedUserLS = localStorage.getItem("loggedUser");
  return loggedUserLS ? JSON.parse(loggedUserLS) : { data: null };
};

export const loggedUserSlice = createSlice({
  name: "loggedUser",
  initialState,
  reducers: {
    signIn: (state, action) => {
      state.data = action.payload;
      localStorage.setItem("loggedUser", JSON.stringify(state));
    },

    signOut: (state) => {
      state.data = null;
      localStorage.removeItem("loggedUser");
    },
  },
});

export const { signIn, signOut } = loggedUserSlice.actions;

export default loggedUserSlice.reducer;
