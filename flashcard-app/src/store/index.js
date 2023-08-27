import {configureStore} from "@reduxjs/toolkit"
import deckReducer from "./FormReducer"
import detailReducer from "./DetailReducer"

const store = configureStore(
    {
        reducer:{deck:deckReducer,detail:detailReducer}
    }
)

export default store;