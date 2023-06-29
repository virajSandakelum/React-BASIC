import {createSlice} from '@reduxjs/toolkit'

const initialState = [];

const cardSlice = createSlice({
    name:'card',
    initialState,
    reducers:{
        add(state,action){
            state.push(action.payload)
        }
    }
})

export const {add} = cardSlice.actions;
export default cardSlice.reducer;