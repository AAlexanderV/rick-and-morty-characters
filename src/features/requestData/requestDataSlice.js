import { createSlice } from "@reduxjs/toolkit";

function compare(a, b) {
  if (a.name < b.name) {
    return -1;
  }
  if (a.name > b.name) {
    return 1;
  }
  return 0;
}

export const requestDataSlice = createSlice({
  name: "requestData",
  initialState: { characters: [], requestInfo: {} },
  reducers: {
    setRequestData: (state, action) => {
      state.characters = action.payload.results.sort(compare);
      state.requestInfo = action.payload.info;
    },
  },
});

export const { setRequestData } = requestDataSlice.actions;

export default requestDataSlice.reducer;
