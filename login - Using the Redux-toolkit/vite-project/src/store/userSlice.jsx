import { createSlice } from '@reduxjs/toolkit';

const initialState = { value: { name: '', age: 0, email: '' } };

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        addUser (state, action) {
            state.value = action.payload;
        }
    }
})

export const {addUser} = userSlice.actions;

export default userSlice.reducer;