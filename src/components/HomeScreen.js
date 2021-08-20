import React from 'react';
import { StyleSheet, View } from 'react-native';
import AddButton from './AddButton';
import GroceriesList from './GroceriesList';
import { groceries } from '../../data';

function HomeScreen({navigation}){
  return(
      <View style={styles.container}>
        <GroceriesList groceries={groceries} />
        <AddButton navigation={navigation} />
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: '#f5f5dc',
      flex: 1,
    },
  });

export default HomeScreen;
