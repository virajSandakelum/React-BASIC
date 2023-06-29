import { createSlice } from "@reduxjs/toolkit";

const initialState = {color:'black'}

export const changeColor = createSlice({
    name:'changeColor',
    initialState,
    reducers:{
        colorFun(state,action){
            state.color =  action.payload.value;
        }
    }
})


export const {colorFun} = changeColor.actions;
export default changeColor.reducer;