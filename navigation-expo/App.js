import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import Icon from 'react-native-vector-icons/FontAwesome6'

import Tela1 from './src/components/Tela1';
import Tela2 from './src/components/Tela2';
import Tela3 from './src/components/Tela3';
import Tela4 from './src/components/Tela4';
import Tela5 from './src/components/Tela5';

const navStack = createNativeStackNavigator();
const navBottom = createBottomTabNavigator();

function Tabs() {
  return (
    <navBottom.Navigator>
        {/* Passa parametros invisiveis, que sera recuperado no props */}
        <navBottom.Screen
          name='TelaInicial'
          component={Tela4}
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
        <navBottom.Screen
          name='TelaSecundaria'
          component={Tela5}
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
      </navBottom.Navigator>
  )
}

export default function App() {
  return (
    <NavigationContainer>
      {/* Passa parametros invisiveis, que sera recuperado no props */}
      <navStack.Navigator>
      <navStack.Screen name='TelaInicial' component={Tela1} />
        <navStack.Screen name='TelaSecundaria' component={Tela2} />
        <navStack.Screen name='TelaTerciaria' component={Tela3} />
        <navStack.Screen name='Tabs' component={Tabs} />
      </navStack.Navigator>

      
    </NavigationContainer>
  )
}