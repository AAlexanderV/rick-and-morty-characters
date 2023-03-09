import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
  const currentPage = localStorage.getItem("currentPage");

  return currentPage ? JSON.parse(currentPage) : { value: 1 };
})();

export const currentPageSlice = createSlice({
  name: "currentPage",
  initialState,
  reducers: {
    prevPage: (state) => {
      state.value > 1 ? (state.value -= 1) : (state.value = 1);
      localStorage.setItem("currentPage", JSON.stringify(state));
    },
    nextPage: (state) => {
      state.value += 1;
      localStorage.setItem("currentPage", JSON.stringify(state));
    },
    setPage: (state, action) => {
      state.value = action.payload;
      localStorage.setItem("currentPage", JSON.stringify(state));
    },
  },
});

export const { prevPage, nextPage, setPage } = currentPageSlice.actions;

export default currentPageSlice.reducer;
