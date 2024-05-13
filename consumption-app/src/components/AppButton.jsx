import { View, Text, Button } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native'

export default function AppButton({ title, nav }) {

  const navigation = useNavigation();

  return (
    <Button
        title={title}
        onPress={() => navigation.navigate(nav)}
        color={'green'}
    />
  )
}