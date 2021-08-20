import 'react-native-gesture-handler';
import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen';
import AddItemScreen from './src/components/AddItemScreen';

const Stack = createStackNavigator();

function App() {
  return (
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ma Liste de courses' }} />
          <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: 'Ajouter un produit'}} />
        </Stack.Navigator>
      </NavigationContainer>
  );
}

export default App;
