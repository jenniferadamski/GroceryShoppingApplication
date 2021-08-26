import React from 'react';
import { ScrollView, StyleSheet } from 'react-native';
import GroceryItem from './GroceryItem';

function GroceriesList(props) {
    return(
        <ScrollView style={styles.listView}>
            {props.groceries.map((grocery, key) => {
                return (
                    <GroceryItem 
                        key={key}
                        id={grocery.id}
                        name={grocery.name} 
                        quantity={grocery.quantity}
                        status={grocery.bought}
                        category={grocery.category}
                        details={grocery.details}
                        navigation={props.navigation}
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
