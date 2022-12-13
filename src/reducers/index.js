import { configureStore, applyMiddleware } from '@reduxjs/toolkit';
import { productReducer } from './productReducer';
import { userReducer } from './userReducer';
import reduxThunk from 'redux-thunk';
export const globalStore = configureStore({
    // ⬇️ memasukkan reducer yang dibutuhkan
    reducer: {
        userReducer,
        productReducer
    }
}, applyMiddleware(reduxThunk));