import { createSlice } from "@reduxjs/toolkit";

const feedDataSlice = createSlice({
  name: "feedData",
  initialState: null,
  reducers: {
    addFeedData: (state, action) => {
      state = action.payload;
      return state;
    },
    removeFeedData: (state, action) => {
      const newState = state.filter((card) => card._id !== action.payload);
      return newState;
    },
  },
});
export default feedDataSlice.reducer;
export const { addFeedData, removeFeedData } = feedDataSlice.actions;
