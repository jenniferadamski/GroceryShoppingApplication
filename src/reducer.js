import { combineReducers } from 'redux';
import { groceriesReducer } from './features/groceries/groceriesSlice';
import { categoriesReducer } from './features/categories/categoriesSlice';

const rootReducer = combineReducers({
  groceries: groceriesReducer,
  categories: categoriesReducer
})

export default rootReducer;
