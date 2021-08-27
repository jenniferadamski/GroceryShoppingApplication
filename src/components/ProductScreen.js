import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import DropDownPicker from 'react-native-dropdown-picker';

function ProductScreen({route, navigation}){
    const { itemId, name, productName, quantity, category, details } = route.params;
    const id = JSON.stringify(itemId);
    const [newName, setNewName] = useState(productName);
    const amount = isNaN(quantity) ? JSON.stringify(quantity) : quantity;
    const [newQuantity, setNewQuantity] = useState(amount);
    const [newDetails, setNewDetails] = useState(details);
    const [categories, setItems] = useState(useSelector((state) => state.categories));
    const [newCategory, setNewCategory] = useState(category);
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleNameChange = (newName) => setNewName(newName);
    const handleQuantityChange = (newQuantity) => setNewQuantity(newQuantity);
    const handleDetailsChange = (newDetails) => setNewDetails(newDetails);

    function handleSubmit(e) {
        e.preventDefault();

        if (newName !== '' && newCategory !== '' && newQuantity !== '') {
            dispatch({ 
                type: 'groceries/Adding', 
                name: newName,
                category: newCategory,
                quantity: newQuantity,
                details: newDetails
            });
            navigation.navigate('Home');
        } else {
            alert("Tous les champs sauf 'Détails' sont obligatoires.");
        }
    }

    function handleEdit(e){
        e.preventDefault();
        dispatch({
            type: 'groceries/Editing',
            id: id,
            name: newName,
            quantity: newQuantity,
            category: newCategory,
            details: newDetails
        });
        navigation.navigate('Home');
    }

    function handleDelete(e) {
        e.preventDefault();
        dispatch({ 
            type: 'groceries/Deleting', 
            id: id,
        });
        navigation.navigate('Home');
    }

    return(
        <KeyboardAvoidingView style={styles.productContainer}>
            <Input title='Nom' data={newName} handleChange={() => handleNameChange} />

            <View style={styles.elementView}>
                <Text style={styles.elementLabel}>Catégorie</Text>
                <DropDownPicker
                    placeholder="Choisir une catégorie"
                    open={open}
                    value={newCategory}
                    items={categories}
                    setOpen={setOpen}
                    setValue={(newCategory) => setNewCategory(newCategory)}
                    setItems={setItems}
                 />
            </View>
            
            <Input title='Quantité' numeric data={newQuantity} handleChange={() => handleQuantityChange} />
            <Input title='Informations complémentaires' data={newDetails} handleChange={() => handleDetailsChange} />
            { name === 'Ajouter un produit' ? 
                <Button title="Ajouter l'élément" onPress={handleSubmit} /> :
                <View style={styles.buttonsSection}>
                    <Button title="Modifier l'élément" onPress={handleEdit} />
                    <Button title="Supprimer l'élément" onPress={handleDelete} color='#ff0505' />
                </View>
            }
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    buttonsSection: {
        display: 'flex',
        height: '18%',
        justifyContent: 'space-between',
    },
    elementLabel: {
        marginBottom: 10,
    },
    elementView: {
        marginBottom: 20,
    },
    productContainer: {
        padding: 20,
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 40,
        padding: 10,
    },
});

export default ProductScreen;
