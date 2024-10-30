import { createSlice } from "@reduxjs/toolkit";

const requestSlice = createSlice({
  name: "requests",
  initialState: null,
  reducers: {
    addRequest: (state, action) => {
      state = action.payload;
      return state;
    },
    removeRequest: (state, action) => {
      const newState = state.filter(
        (request) => request._id !== action.payload
      );
      return newState;
    },
  },
});

export const { addRequest, removeRequest } = requestSlice.actions;
export default requestSlice.reducer;
