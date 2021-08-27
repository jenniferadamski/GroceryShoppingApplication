import React, { useState } from 'react';
import { CheckBox, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';

function GroceryItem(props){
    const [isBought, setStatus] = useState(props.status);
    const id = props.id;
    const navigation = useNavigation();

    return(
        <TouchableOpacity 
            style={styles.groceryItemContainer} 
            onPress={() => 
                navigation.navigate('Product', {
                    name: 'Modifier / Supprimer un produit',
                    itemId: id, 
                    productName: props.name,
                    quantity: props.quantity,
                    category: props.category,
                    details: props.details
                })
            }
        >
            <View>
                <Text>ID : {id}</Text>
                <Text style={styles.itemName}>{props.name} x{props.quantity}</Text>
                <Text>{props.category}</Text>
                {props.details ? <Text>Détails : {props.details}</Text> : <Text style={styles.hidden}></Text>}
            </View>
            <CheckBox 
                value={isBought}
                onValueChange={setStatus}
            />
        </TouchableOpacity>
    )
}

export default GroceryItem;

const styles = StyleSheet.create({
    groceryItemContainer: {
        backgroundColor: '#fff',
        borderRadius: 15,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 10,
        padding: 20,
    },
    hidden: {
        display: 'none',
    },
    itemName: {
        fontWeight: 'bold',
    }
});
