import React, { useState } from 'react';
import { CheckBox, StyleSheet, Text, View } from 'react-native';

function GroceryItem(props){
    const [isBought, setStatus] = useState(props.status);

    return(
        <View style={styles.groceryItemContainer}>
            <View>
                <Text style={styles.itemName}>{props.name} x{props.quantity}</Text>
                <Text>{props.category}</Text>
                {props.details ? <Text>Détails : {props.details}</Text> : <Text style={styles.hidden}></Text>}
            </View>
            <CheckBox 
                value={isBought}
                onValueChange={setStatus}
            />
        </View>
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
