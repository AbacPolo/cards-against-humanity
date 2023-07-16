import { configureStore } from "@reduxjs/toolkit";
import decksReducer from "../routes/decks/decksSlice";
import boardReducer from "../routes/board/boardSlice"

export const store = configureStore({
  reducer: {
    decks: decksReducer,
    board: boardReducer
  },
});
