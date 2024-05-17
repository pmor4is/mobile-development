import React from 'react';
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome6'

import Homepage from './src/components/Homepage';
import Screen2 from './src/components/Screen2';
import Screen3 from './src/components/Screen3';
import Screen4 from './src/components/Screen4';
import Screen5 from './src/components/Screen5';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

function Tabs() {
  return (
    <Tab.Navigator>
      {/* Passa parametros invisiveis, que sera recuperado no props */}
      <Tab.Screen
        name='TelaInicial'
        component={Screen4}
        options={{
          tabBarIcon: () => {
            return (
              <Icon
                name='house'
                size={38}
                color={'green'}
              />
            )
          }
        }}
      />
      <Tab.Screen
        name='TelaSecundaria'
        component={Screen5}
        options={{
          tabBarIcon: () => {
            return (
              <Icon
                name='bars'
                size={38}
                color={'green'}
              />
            )
          }
        }}
      />
    </Tab.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* Passa parametros invisiveis, que sera recuperado no props */}
      <Stack.Navigator>
        <Stack.Screen name='TelaInicial' component={Homepage} />
        <Stack.Screen name='TelaSecundaria' component={Screen2} />
        <Stack.Screen name='TelaTerciaria' component={Screen3} />
        <Stack.Screen name='Tabs' component={Tabs} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}