import { configureStore } from "@reduxjs/toolkit";
import pasteReducer from "./Redux/pasteSlice";

export default configureStore({
  reducer: {
    paste: pasteReducer,
  },
});
