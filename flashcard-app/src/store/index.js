import {configureStore} from "@reduxjs/toolkit"
import deckReducer from "./FormReducer"

const store = configureStore(
    {
        reducer:{deck:deckReducer}
    }
)

export default store;