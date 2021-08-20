export const groceries = [
    { id: 1, name: 'Melon', quantity: 1, bought: false, category: 'Fruits et Légumes' },
    { id: 2, name: 'Dentifrice', quantity: 1, bought: false, category: 'Hygiène' },
    { id: 3, name: 'Poulet', quantity: 2, bought: false, category: 'Boucherie / Rôtisserie', details: 'Deux escalopes' },
];

function newGroceryId(groceries){
    return groceries.length + 1;
}

export const groceriesReducer = (state = groceries, action) => {
    switch (action.type) {
      case 'ADDING': {
        return [
          ...state,
          {
            id: newGroceryId(groceries),
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

/* Liste des catégories disponibles dans le DropDown de la page d'Ajout d'un produit */
export const categories = [
    {label: 'Fruits et Légumes', value: 'fruits-et-legumes'},
    {label: 'Boulangerie /Pâtisserie', value: 'boulangerie-patisserie'},
    {label: 'Boucherie / Rôtisserie', value: 'boucherie-rotisserie'},
    {label: 'Poissonnerie / Fruits de mer', value: 'poissonnerie'},
    {label: 'Crèmerie', value: 'cremerie'},
    {label: 'Fromagerie', value: 'fromagerie'},
    {label: 'Épicerie', value: 'epicerie'},
    {label: 'Frais et surgelés', value: 'frais-et-surgeles'},
    {label: 'Petit déjeuner', value: 'petit-dejeuner'},
    {label: 'Confiserie', value: 'confiserie'},
    {label: 'Snacks', value: 'snacks'},
    {label: 'Boissons', value: 'boissons'},
    {label: 'Hygiène', value: 'hygiène'},
    {label: 'Bébé', value: 'bebe'},
    {label: 'Fleurs', value: 'fleurs'},
    {label: 'Animaux', value: 'animaux'},
    {label: 'Produits ménagers', value: 'produits-menagers'},
    {label: 'Autres', value: 'Autres'}
];
