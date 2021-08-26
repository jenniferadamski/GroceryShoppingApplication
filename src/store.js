import { configureStore } from '@reduxjs/toolkit';
import { groceriesReducer } from './features/groceries/groceriesSlice';
import { categoriesReducer } from './features/categories/categoriesSlice';

const store = configureStore({
    reducer: {
        groceries: groceriesReducer,
        categories: categoriesReducer
    }
});

export default store;
