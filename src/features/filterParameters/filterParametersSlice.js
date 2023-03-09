import { createSlice } from "@reduxjs/toolkit";

const initialState = (() => {
  const filterParameters = localStorage.getItem("filterParameters");

  return filterParameters ? JSON.parse(filterParameters) : { name: "" };
})();

export const filterParametersSlice = createSlice({
  name: "filterParameters",
  initialState,
  reducers: {
    setFilterName: (state, action) => {
      state.name = action.payload;
      localStorage.setItem("filterParameters", JSON.stringify(state));
    },
  },
});

export const { setFilterName } = filterParametersSlice.actions;

export default filterParametersSlice.reducer;
