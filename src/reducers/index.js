import { configureStore } from '@reduxjs/toolkit';
import { productReducer } from './productReducer';
import { userReducer } from './userReducer';
export const globalStore = configureStore({
    // ⬇️ memasukkan reducer yang dibutuhkan
    reducer: {
        userReducer,
        productReducer
    }
})