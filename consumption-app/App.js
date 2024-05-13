import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { NavigationContainer } from '@react-navigation/native'

import HomePage from './src/app/HomePage';
import QuestionsFirstPage from './src/app/QuestionsFirstPage';
import QuestionsSecondPage from './src/app/QuestionsSecondPage';
import ResultsPage from './src/app/ResultsPage';
import QuestionsProvider from './src/context/QuestionsContext';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <QuestionsProvider>
        <Stack.Navigator>
          <Stack.Screen name='Home' component={HomePage} />
          <Stack.Screen name='QuestionsFirstPage' component={QuestionsFirstPage} />
          <Stack.Screen name='QuestionsSecondPage' component={QuestionsSecondPage} />
          <Stack.Screen name='ResultsPage' component={ResultsPage} />
        </Stack.Navigator>
      </QuestionsProvider>
    </NavigationContainer>
  )
}