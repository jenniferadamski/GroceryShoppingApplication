const initialState = [
    { id: 1, name: 'Melon', quantity: 1, bought: false, category: 'Fruits et Légumes' },
    { id: 2, name: 'Dentifrice', quantity: 1, bought: false, category: 'Hygiène' },
    { id: 3, name: 'Poulet', quantity: 2, bought: false, category: 'Boucherie / Rôtisserie', details: 'Deux escalopes' },
];

function newGroceryId(groceries){
    return groceries.length + 1;
}

export function groceriesReducer(state = initialState, action) {
    switch (action.type) {
      case 'groceries/Adding': {
        return [
          ...state,
          {
            id: newGroceryId(state),
            name: action.name,
            quantity: action.quantity,
            bought: false,
            category: action.category,
            details: action.details
          }
        ]
      }
      default:
        return state
    }
}
