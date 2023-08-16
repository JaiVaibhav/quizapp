import { configureStore } from "@reduxjs/toolkit";
import quiz from "./slice";

export default configureStore({
  reducer: { quiz },
});
