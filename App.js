import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import { StatusBar} from 'expo-status-bar';
import Home from './components/Home'
import Comprar from './components/Comprar'
import Auth from './components/Auth'
import { useState } from 'react';
import { ScrollView } from 'react-native-web';

export default function App() {

  

  return (
    <>
    <NavigationContainer>
      <Stack.Navigator>
        
        <Stack.Screen
          name="Login"
          component = {Auth}
        />

        <Stack.Screen
          name="Home"
          component = {Home}
        />

        <Stack.Screen
          name="Comprar"
          component = {Comprar}
        />

      </Stack.Navigator>
    </NavigationContainer>

    </>

  );
}


