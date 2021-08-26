import React from 'react';
import { useSelector } from 'react-redux';
import { StyleSheet, View } from 'react-native';
import { selectGroceries } from './../features/groceries/groceriesSlice';
import AddButton from './AddButton';
import GroceriesList from './GroceriesList';

function HomeScreen({navigation}){
  const groceries = useSelector(selectGroceries);

  return(
    <View style={styles.container}>
      <GroceriesList groceries={groceries} navigation={navigation} />
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
