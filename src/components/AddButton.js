import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

function AddButton({navigation}){
    return(
        <View style={styles.buttonPosition}>
            <TouchableOpacity 
                style={styles.buttonBackground} 
                onPress={() => navigation.navigate('Product', { name: 'Ajouter un produit'})}
            >
                <Text style={styles.buttonLabel}>+</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    buttonBackground: {
        backgroundColor: '#4169e1',
        borderRadius: 50,
        height: 50,
        textAlign: 'center',
        width: 50,
    },
    buttonLabel: {
        alignSelf: 'center',
        color: '#fff',
        fontSize: 35,
    },
    buttonPosition: {
        alignItems: 'flex-end',
        padding: 20,
    },
});

export default AddButton;
