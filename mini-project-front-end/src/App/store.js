import { configureStore } from "@reduxjs/toolkit";
import { quiz } from "../features";

export const store = configureStore({
  reducer: {
    quiz: quiz,
  },
});
