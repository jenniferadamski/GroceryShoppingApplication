import { createSelector } from 'reselect';

const initialState = {
  allGroceries: {},
};

function newGroceryId(allKeys){
  const lastKey = Number(allKeys.slice(-1));
  return lastKey + 1;
}

export function groceriesReducer(state = initialState, action) {
    switch (action.type) {
      case 'groceries/Adding': {
        const allKeys = Object.keys(state.allGroceries);
        const key = newGroceryId(allKeys);

        return {
          ...state,
          allGroceries: {
            ...state.allGroceries,
            [key]: {
              id: key,
              name: action.name,
              quantity: action.quantity,
              bought: false,
              category: action.category,
              details: action.details
            }
          }
        }
      }
      case 'groceries/Editing': {
        const groceryId = action.id;
        const selectedGrocery = state.allGroceries[groceryId];

        return {
          ...state,
          allGroceries: {
            ...state.allGroceries,
            [groceryId]: {
              ...selectedGrocery,
              name: action.name,
              quantity: action.quantity,
              category: action.category,
              details: action.details
            }
          }
        }
      }
      case 'groceries/Deleting': {
        const newGroceries = { ...state.allGroceries };
        delete newGroceries[action.id];
        return {
          ...state,
          allGroceries: newGroceries
        }
      }
      default:
        return state
    }
}

const selectAllGroceries = (state) => state.groceries.allGroceries;
export const selectGroceries = createSelector(selectAllGroceries, allGroceries =>
  Object.values(allGroceries)
);
