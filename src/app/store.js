import { configureStore } from "@reduxjs/toolkit";

import loggedUserReducer from "../features/loggedUser/loggedUserSlice";
import filterParametersReducer from "../features/filterParameters/filterParametersSlice";
import currentPageReducer from "../features/currentPage/currentPageSlice";
import requestDataReducer from "../features/requestData/requestDataSlice";

export default configureStore({
  reducer: {
    loggedUser: loggedUserReducer,
    filterParameters: filterParametersReducer,
    currentPage: currentPageReducer,
    requestData: requestDataReducer,
  },
});
