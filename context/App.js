import React from 'react'
import { SafeAreaView, Text } from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Tela1 from './src/screens/Tela1';
import Tela2 from './src/screens/Tela2';
import Tela3 from './src/screens/Tela3';
import AuthProvider from './src/context/AutenticationContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <AuthProvider>
        <Stack.Navigator>
          <Stack.Screen name='Tela1' component={Tela1} />
          <Stack.Screen name='Tela2' component={Tela2} />
          <Stack.Screen name='Tela3' component={Tela3} />
        </Stack.Navigator>
      </AuthProvider>
    </NavigationContainer>
  )
}