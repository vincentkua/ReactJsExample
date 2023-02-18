// RecordSlice.js
import { createSlice } from "@reduxjs/toolkit";

export const recordSlice = createSlice({
  name: "Record Slice",
  initialState: {
    value: 9 // No records initially
  },
  reducers: {
    increment: (state) => {
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    },
    incrementByAmount: (state, action) => {
      state.value += action.payload
    },
  },
});

// Use these to update the state in your component
export const { increment, decrement, incrementByAmount } = recordSlice.actions;

// This part goes into the store.
export default recordSlice.reducer;
