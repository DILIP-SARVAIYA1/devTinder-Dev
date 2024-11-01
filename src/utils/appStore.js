import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import connectionReducer from "../utils/connectionSlice";
import requestReducer from "../utils/requestSlice";
import feedDataReducer from "../utils/feedDataSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    connections: connectionReducer,
    request: requestReducer,
    feedData: feedDataReducer,
  },
});
export default store;
