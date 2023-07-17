import { createSlice } from "@reduxjs/toolkit";

export const boardSlice = createSlice({
  name: "board",
  initialState: {
    blackCards: [],
    whiteCards: [],
    cardsAreLoaded: false,
    activeBlackCards: {},
    activeWhiteCards: [],
    firstDrawDone: false,
    selectedWhiteCards: [],
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
    drawBlackCard: (state) => {
      state.activeBlackCards =
        state.blackCards[Math.floor(Math.random() * state.blackCards.length)];
    },
    drawWhiteCard: (state) => {
      state.activeWhiteCards = [
        ...state.activeWhiteCards,
        state.whiteCards[Math.floor(Math.random() * state.whiteCards.length)],
      ];
    },
    finishedFirstDraw: (state) => {
      state.firstDrawDone = true;
    },
    chooseWhiteCard: (state, action) => {
      state.selectedWhiteCards = [...state.selectedWhiteCards, action.payload];
      state.activeWhiteCards = state.activeWhiteCards.filter(
        (card) => card.text !== action.payload.text
      );
    },
  },
});

export const playCardsLoaded = (state) => state.board.cardsAreLoaded;
export const getActiveBlackCards = (state) => state.board.activeBlackCards;
export const getActiveWhiteCards = (state) => state.board.activeWhiteCards;
export const getSelectedWhiteCards = (state) => state.board.selectedWhiteCards;
export const getFirstDrawDone = (state) => state.board.firstDrawDone;
export const {
  loadAllCards,
  drawBlackCard,
  drawWhiteCard,
  finishedFirstDraw,
  chooseWhiteCard,
} = boardSlice.actions;
export default boardSlice.reducer;
