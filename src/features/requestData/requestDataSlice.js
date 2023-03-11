import { createSlice } from "@reduxjs/toolkit";
import compareFn from "./compareFn";

export const requestDataSlice = createSlice({
  name: "requestData",
  initialState: { characters: [], requestInfo: {} },
  reducers: {
    setRequestData: (state, action) => {
      state.characters = action.payload.results.sort(compareFn);
      state.requestInfo = action.payload.info;
    },

    clearRequestInfo: (state) => {
      state.requestInfo = {};
    },
  },
});

export const { setRequestData, clearRequestInfo } = requestDataSlice.actions;

export default requestDataSlice.reducer;
