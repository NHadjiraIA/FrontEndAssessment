import { createSlice } from "@reduxjs/toolkit";

export const urlSlice = createSlice({
    name: "url",
    initialState:{
        url:null
    },
    reducers:{
        shorten:( state,action)=>{
            state.url = action.payload;
        },
        copied:(state) =>{
            state.url = null;
        }
    }
})

export const {shorten, copied} = urlSlice.actions;
export const selectUrl =(state)=> state.url.url;
export default urlSlice.reducer;
