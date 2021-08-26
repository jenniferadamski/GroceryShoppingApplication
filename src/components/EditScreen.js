import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import Input from './Input';
import DropDownPicker from 'react-native-dropdown-picker';

function EditScreen({ route, navigation }){
    const { itemId, name, quantity, category, details } = route.params;
    const dispatch = useDispatch();
    const [newName, setNewName] = useState(name);

    const handleNameChange = (newName) => setNewName(newName);

    function handleEdit(){
        dispatch({
            type: 'groceries/Editing',
            id: itemId,
            name: newName
        });
        navigation.navigate('Home');
    }

    function handleDelete(e) {
        e.preventDefault();
        dispatch({ 
            type: 'groceries/Deleting', 
            id: itemId,
        });
        navigation.navigate('Home');
    }
    
    return(
        <KeyboardAvoidingView style={styles.addItemContainer}>
            <Text>itemId: {JSON.stringify(itemId)}</Text>
            <Input title='Nom' data={newName} handleChange={() => handleNameChange} />
            <Button title="Modifier" onPress={handleEdit} />
            <Button title="Supprimer l'élément" onPress={handleDelete} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    addItemContainer: {
        padding: 20,
    },
});

export default EditScreen;
