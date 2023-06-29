import {configureStore} from '@reduxjs/toolkit'
import userSlice from './userSlice';
import ColorChangeSlice from './ColorChangeSlice'

const store = configureStore({
    reducer:{
        user: userSlice,
        themeColor:ColorChangeSlice,
    }
})

export default store;