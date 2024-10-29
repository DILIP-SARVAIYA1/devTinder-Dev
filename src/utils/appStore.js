import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../utils/userSlice";
import connectionReducer from "../utils/connectionSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    connections: connectionReducer,
  },
});
export default store;
