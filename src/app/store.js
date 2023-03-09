import { configureStore } from "@reduxjs/toolkit";
import filterParametersReducer from "../features/filterParameters/filterParametersSlice";
import currentPageReducer from "../features/currentPage/currentPageSlice";
import requestDataReducer from "../features/requestData/requestDataSlice";

export default configureStore({
  reducer: {
    filterParameters: filterParametersReducer,
    currentPage: currentPageReducer,
    requestData: requestDataReducer,
  },
});
