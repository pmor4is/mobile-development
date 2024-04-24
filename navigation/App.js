import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Tela1 from './src/components/Tela1';
import Tela2 from './src/components/Tela2';
const navStack = createNativeStackNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <navStack.Navigator>
        <navStack.Screen name='TelaInicial' component={Tela1} />
        <navStack.Screen name='TelaSecundaria' component={Tela2} />
      </navStack.Navigator>
    </NavigationContainer>
  )
}