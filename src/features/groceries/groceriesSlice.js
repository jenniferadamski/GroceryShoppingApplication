const initialState = [
    { id: 1, name: 'Melon', quantity: 1, bought: false, category: 'Fruits et Légumes' },
    { id: 2, name: 'Dentifrice', quantity: 1, bought: false, category: 'Hygiène' },
    { id: 3, name: 'Poulet', quantity: 2, bought: false, category: 'Boucherie / Rôtisserie', details: 'Deux escalopes' },
];

function newGroceryId(groceries){
    return groceries.length + 1;
}

export default function groceriesReducer(state = initialState, action) {
    switch (action.type) {
      case 'groceries/Adding': {
        return [
          ...state,
          {
            id: newGroceryId(state),
            name: action.payload,
            quantity: action.payload,
            bought: false,
            category: action.payload,
            details: action.payload
          }
        ]
      }
      default:
        return state
    }
}
