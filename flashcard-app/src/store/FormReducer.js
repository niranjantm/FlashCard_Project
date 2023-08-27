import { createSlice } from "@reduxjs/toolkit";

const deckSlice = createSlice(
    {
        name:"singleDeck",
        initialState:localStorage.getItem("Decks")?JSON.parse(localStorage.getItem("Decks")):[],
        reducers:{
            addDeck(state,action){
                console.log(action.payload)
                if(localStorage.getItem("Decks")===null || undefined){
                    localStorage.setItem("Decks","[]")
                }
                state.push(action.payload)

                const Decks = JSON.parse(localStorage.getItem("Decks"))
                const newDecks =[...Decks,action.payload]

                localStorage.setItem("Decks",JSON.stringify(newDecks))
            }
        }
    }
)

export const deckAction = deckSlice.actions
export default deckSlice.reducer