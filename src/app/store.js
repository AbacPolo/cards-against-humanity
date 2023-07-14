import { configureStore } from "@reduxjs/toolkit";
import decksReducer from "../routes/decks/decksSlice";

export const store = configureStore({
  reducer: {
    decks: decksReducer,
  },
});
