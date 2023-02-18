// storage.js
import { configureStore } from "@reduxjs/toolkit";
import recordReducer from "./reduxslice";

export default configureStore({
  reducer: {
    // Register reducers here
    record: recordReducer,
  },
});
