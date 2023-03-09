import { createSlice } from "@reduxjs/toolkit";

// const initialState = (() => {
//   const searchParams = new URLSearchParams(document.location.search);

//   return { name: searchParams.get("name") ? "name=" + searchParams.get("name") : "" };
// })();

export const filterParametersSlice = createSlice({
  name: "filterParameters",
  initialState: { name: "" },
  reducers: {
    setFilterName: (state, action) => {
      state.name = action.payload;
    },
  },
});

export const { setFilterName } = filterParametersSlice.actions;

export default filterParametersSlice.reducer;
