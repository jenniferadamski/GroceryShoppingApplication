import { createSelector } from 'reselect';

const initialState = {
  allGroceries: {
    1: { id: 1, name: 'Melon', quantity: 1, bought: false, category: 'Fruits et Légumes' },
    2: { id: 2, name: 'Dentifrice', quantity: 1, bought: false, category: 'Hygiène' },
    3: { id: 3, name: 'Poulet', quantity: 2, bought: false, category: 'Boucherie / Rôtisserie', details: 'Deux escalopes' },
  },
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

export const selectGroceryById = (state, groceryId) => {
  return selectAllGroceries(state)[groceryId]
};
