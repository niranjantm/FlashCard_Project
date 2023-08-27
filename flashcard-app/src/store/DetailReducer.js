import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
    name:"detail",
    initialState:{index:null},
    reducers:{
        flashDetail(state,action){
            state.index = action.payload
        }
    }

})
export const detailAction = detailSlice.actions
export default detailSlice.reducer