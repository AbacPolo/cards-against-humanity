import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    blackCards: {},
    whiteCards: {},
    cardsAreLoaded: false,
    playedBlackCards: {},
    playedWhiteCards: {},
  },
  reducers: {
    loadAllCards: (state, action) => {
      let blackCardsArray = [];
      Object.entries(action.payload).forEach(([key, value]) =>
        value.black.forEach((card) => blackCardsArray.push(card))
      );
      state.blackCards = blackCardsArray;
      let whiteCardsArray = [];
      Object.entries(action.payload).forEach(([key, value]) =>
        value.white.forEach((card) => whiteCardsArray.push(card))
      );
      state.whiteCards = whiteCardsArray;
      state.cardsAreLoaded = true;
    },
  },
});

export const playCardsLoaded = (state) => state.board.cardsAreLoaded;
export const { loadAllCards } = boardSlice.actions;
export default boardSlice.reducer;
