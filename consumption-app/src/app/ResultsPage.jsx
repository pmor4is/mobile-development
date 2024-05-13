import { Button, Text } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import AppButton from '../components/AppButton'

export default function ResultsPage(props) {
  return (
    <SafeAreaView>
      <Text>ResultsPage</Text>
      
      <Button 
            title='Homepage'
            onPress={() => props.navigation.navigate('HomePage')}
            color={'green'}
      />
    </SafeAreaView>
  )
}