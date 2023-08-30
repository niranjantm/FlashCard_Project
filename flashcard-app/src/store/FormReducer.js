import { createSlice } from "@reduxjs/toolkit";

// Creating a slice for deck by using createSlice function provided by @reduxjs/toolkit
const deckSlice = createSlice({
  // Defining the deckSlice
  name: "singleDeck",
  // Adding localStorage to inital state by the name Decks
  initialState: localStorage.getItem("Decks")
    ? JSON.parse(localStorage.getItem("Decks"))
    : [],
  // Defining reducers
  reducers: {
    // Defining below function to check whether decks in localstorage is null or undefined if not push the 
    //incoming payload to the Decks array
    addDeck(state, action) {
      if (localStorage.getItem("Decks") === null || undefined) {
        localStorage.setItem("Decks", "[]");
      }
      state.push(action.payload);

      const Decks = JSON.parse(localStorage.getItem("Decks"));
      const newDecks = [...Decks, action.payload];

      localStorage.setItem("Decks", JSON.stringify(newDecks));
    },
  },
});
// Exporting deckAction and reducer 
export const deckAction = deckSlice.actions;
export default deckSlice.reducer;
