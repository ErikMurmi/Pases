import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();


import { StatusBar} from 'expo-status-bar';
import Home from './components/Home'
import Comprar from './components/Comprar'
import Auth from './components/Auth'
import Expiradas from './components/Expiradas'
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
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Home"
          component = {Home}
          options={{headerShown: false}}
        />

        <Stack.Screen
          name="Comprar" 
          component = {Comprar} options={{title: "Comprar pases"}}
        />

        <Stack.Screen
          name="Expiradas"
          component = {Expiradas}
          options={{title: "Suscripciones expiradas"}}
        />

      </Stack.Navigator>
    </NavigationContainer>

    </>

  );
}


