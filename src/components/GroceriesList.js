import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import GroceryItem from './GroceryItem';
import { useSelector } from 'react-redux';
import { groceries } from '../../data';

function GroceriesList() {
    // const groceries = useSelector((state) => state.groceries);

    return(
        <ScrollView style={styles.listView}>
            {groceries.map((grocery, key) => {
                return (
                    <GroceryItem 
                        key={grocery.id} 
                        name={grocery.name} 
                        quantity={grocery.quantity}
                        status={grocery.bought}
                        category={grocery.category}
                        details={grocery.details}
                    />
                );
            })}
        </ScrollView>
    )
}

export default GroceriesList;

const styles = StyleSheet.create({
    listView: {
        flex: 5,
        padding: 20,
    },
});
