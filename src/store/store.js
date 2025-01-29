import { configureStore } from '@reduxjs/toolkit';
import productReduce from "./productSlice"
export const store = configureStore({
    reducer : {
        products : productReduce,
    }
})