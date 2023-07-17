import { createSlice } from "@reduxjs/toolkit";
import collectionAllDecks from "../../data/cah-oficial-cards.json";
import { dataFormater } from "../../data/dataFormates";

export const decksSlice = createSlice({
  name: "decks",
  initialState: {
    allDecks: {},
    loadedAllDecks: false,
    selectedDecks: {},
  },
  reducers: {
    importAllDecks: (state) => {
      state.allDecks = dataFormater(collectionAllDecks);
      state.selectedDecks = dataFormater(collectionAllDecks);
      state.loadedAllDecks = true;
    },
    addSelectedDeck: (state, action) => {
      state.selectedDecks = {
        ...state.selectedDecks,
        [action.payload]: state.allDecks[action.payload],
      };
    },
    removeSelectedDeck: (state, action) => {
      const newDeckSelection = Object.entries(state.selectedDecks).filter(
        ([key, value]) => action.payload !== key
      );
      state.selectedDecks = Object.fromEntries(newDeckSelection);
    },
    selectAllDecks: (state) => {
      state.selectedDecks = state.allDecks;
    },
    removeAllDecks: (state) => {
      state.selectedDecks = {};
    },
  },
});

export const getAllDecks = (state) => state.decks.allDecks;
export const loadAllDecks = (state) => state.decks.loadedAllDecks;
export const getSelectedDecks = (state) => state.decks.selectedDecks;
export const { importAllDecks, addSelectedDeck, removeSelectedDeck, selectAllDecks, removeAllDecks } =
  decksSlice.actions;
export default decksSlice.reducer;