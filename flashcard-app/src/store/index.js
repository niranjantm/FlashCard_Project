import {configureStore} from "@reduxjs/toolkit"
import deckReducer from "./FormReducer"
// import the reducer from FormReducer as deckReducer

// using configureStore function to setup reducers
const store = configureStore(
    {
        reducer:{deck:deckReducer}
    }
)

export default store;