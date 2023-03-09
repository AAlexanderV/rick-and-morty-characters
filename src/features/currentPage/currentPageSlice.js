import { createSlice } from "@reduxjs/toolkit";

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState: { value: 1 },
  reducers: {
    prevPage: (state) => {
      state.value > 1 ? (state.value -= 1) : (state.value = 1);
    },
    nextPage: (state) => {
      state.value += 1;
    },
    setPage: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { prevPage, nextPage, setPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
