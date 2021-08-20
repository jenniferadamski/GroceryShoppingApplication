const initialState = [
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

export default function categoriesReducer(state = initialState, action) {
    switch (action.type) {
      default:
        return state
    }
  }
  