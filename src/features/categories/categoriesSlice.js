const initialState = [
    {label: 'Fruits et Légumes', value: 'Fruits et Légumes'},
    {label: 'Boulangerie /Pâtisserie', value: 'Boulangerie /Pâtisserie'},
    {label: 'Boucherie / Rôtisserie', value: 'Boucherie / Rôtisserie'},
    {label: 'Poissonnerie / Fruits de mer', value: 'Poissonnerie / Fruits de mer'},
    {label: 'Crèmerie', value: 'Crèmerie'},
    {label: 'Fromagerie', value: 'Fromagerie'},
    {label: 'Épicerie', value: 'Épicerie'},
    {label: 'Frais et surgelés', value: 'Frais et surgelés'},
    {label: 'Petit déjeuner', value: 'Petit déjeuner'},
    {label: 'Confiserie', value: 'Confiserie'},
    {label: 'Snacks', value: 'Snacks'},
    {label: 'Boissons', value: 'Boissons'},
    {label: 'Hygiène', value: 'Hygiène'},
    {label: 'Bébé', value: 'Bébé'},
    {label: 'Fleurs', value: 'Fleurs'},
    {label: 'Animaux', value: 'Animaux'},
    {label: 'Produits ménagers', value: 'Produits ménagers'},
    {label: 'Autres', value: 'Autres'}
];

export function categoriesReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state;
    }
  }
  