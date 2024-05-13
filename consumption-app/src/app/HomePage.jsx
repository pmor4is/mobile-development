import { Text, Button } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppButton from '../components/AppButton'

export default function HomePage(props) {
  return (
    <SafeAreaView>
      <Text>Olá</Text>
      <AppButton 
        title={'Iniciar'}
        nav={'QuestionsFistPage'}
      />

      
      <Button 
            title='Iniciar'
            onPress={() => props.navigation.navigate('QuestionsFirstPage')}
            color={'green'}
      />
    </SafeAreaView>
  )
}