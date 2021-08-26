import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, KeyboardAvoidingView, StyleSheet, Text, View } from 'react-native';
import Input from './Input';
import DropDownPicker from 'react-native-dropdown-picker';

function AddItemScreen({ navigation }){
    const [name, setName] = useState('');
    const [categories, setItems] = useState(useSelector((state) => state.categories));
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [details, setDetails] = useState('');
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    const handleNameChange = (name) => setName(name);
    const handleQuantityChange = (quantity) => setQuantity(quantity);
    const handleDetailsChange = (details) => setDetails(details);

    function handleSubmit(e) {
        e.preventDefault();

        if (name !== '' && category !== '' && quantity !== '') {
            dispatch({ 
                type: 'groceries/Adding', 
                name: name,
                category: category,
                quantity: quantity,
                details: details
            });
            navigation.navigate('Home');
        } else {
            alert("Tous les champs sauf 'Détails' sont obligatoires.");
        }
    }

    return(
        <KeyboardAvoidingView style={styles.addItemContainer}>
            <Input title='Nom' data={name} handleChange={() => handleNameChange} />

            <View style={styles.elementView}>
                <Text style={styles.elementLabel}>Catégorie</Text>
                <DropDownPicker
                    placeholder="Choisir une catégorie"
                    open={open}
                    value={category}
                    items={categories}
                    setOpen={setOpen}
                    setValue={(category) => setCategory(category)}
                    setItems={setItems}
                />
            </View>

            <Input title='Quantité' numeric data={quantity} handleChange={() => handleQuantityChange} />
            <Input title='Informations complémentaires' data={details} handleChange={() => handleDetailsChange} />
            <Button title="Ajouter l'élément" onPress={handleSubmit} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    addItemContainer: {
        padding: 20,
    },
    elementLabel: {
        marginBottom: 10,
    },
    elementView: {
        marginBottom: 20,
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 40,
        padding: 10,
    },
});

export default AddItemScreen;
