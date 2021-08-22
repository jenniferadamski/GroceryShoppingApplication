import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';

function AddItemScreen({ navigation }){
    const [name, setName] = useState('');
    const [categories, setItems] = useState(useSelector((state) => state.categories));
    const [category, setCategory] = useState('');
    const [quantity, setQuantity] = useState('');
    const [details, setDetails] = useState('');
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

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
            <View style={styles.elementView}>
                <Text style={styles.elementLabel}>Nom</Text>
                <TextInput style={styles.textInput} onChangeText={(name) => setName(name)} value={name} />
            </View>

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

            <View style={styles.elementView}>
                <Text style={styles.elementLabel}>Quantité</Text>
                <TextInput 
                    keyboardType="numeric" 
                    style={styles.textInput} 
                    onChangeText={(quantity) => setQuantity(quantity)} 
                    value={quantity}
                />
            </View>

            <View style={styles.elementView}>
                <Text style={styles.elementLabel}>Informations complémentaires</Text>
                <TextInput 
                    style={styles.textInput}
                    onChangeText={(details) => setDetails(details)}  
                    value={details}
                />
            </View>

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
