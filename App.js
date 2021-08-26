import 'react-native-gesture-handler';
import React from 'react';
import { Provider } from 'react-redux';
import store from './src/store';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import HomeScreen from './src/components/HomeScreen';
import AddItemScreen from './src/components/AddItemScreen';
import EditScreen from './src/components/EditScreen';

const Stack = createStackNavigator();

function App() {
  return (
      <Provider store={store}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Home">
            <Stack.Screen name="Home" component={HomeScreen} options={{ title: 'Ma Liste de courses' }} />
            <Stack.Screen name="AddItem" component={AddItemScreen} options={{ title: 'Ajouter un produit'}} />
            <Stack.Screen name="Edit" component={EditScreen} options={{ title: 'Modifier / Supprimer un produit' }} />
          </Stack.Navigator>
        </NavigationContainer>
      </Provider>
  );
}

export default App;
