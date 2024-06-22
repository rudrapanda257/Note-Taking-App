import {configureStore} from '@reduxjs/toolkit';
import todoReducer from '../features/todo/todoSlice';

export const store = configureStore({
    reducer: todoReducer  //  store ko reducer kebare me bataya he, reducer should me more than one
})