import React from 'react';
import { Button, KeyboardAvoidingView, StyleSheet, Text, TextInput, View } from 'react-native';
import DropDown from './DropDown';

function AddItemScreen({ navigation }){

    return(
        <KeyboardAvoidingView style={styles.addItemContainer}>
            <View style={styles.elementView}>
                <Text style={styles.elementLabel}>Nom</Text>
                <TextInput style={styles.textInput} />
            </View>

            <View style={styles.elementView}>
                <Text style={styles.elementLabel}>Catégorie</Text>
                <DropDown />
            </View>

            <View style={styles.elementView}>
                <Text style={styles.elementLabel}>Quantité</Text>
                <TextInput keyboardType="numeric" style={styles.textInput} />
            </View>

            <View style={styles.elementView}>
                <Text style={styles.elementLabel}>Informations complémentaires</Text>
                <TextInput style={styles.textInput} />
            </View>

            <Button title="Ajouter l'élément" />
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
