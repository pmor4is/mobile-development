import { SafeAreaView, Text, Button, ToastAndroid, ScrollView, Switch, Image, TextInput } from 'react-native'
import React, { useState } from 'react'

function message() {
  ToastAndroid.showWithGravity(
    'teste',
    ToastAndroid.LONG,
    ToastAndroid.TOP,
  );
}

export default function App() {

  const [name, setName] = useState("")
  const [isEnable, setisEnable] = useState("")
  // const toggleSwitch = () => setIsEnabled(previousState =>
  //   !previousState);

  return (
    <SafeAreaView>
      <ScrollView>
        <Switch
          trackColor={{ false: '#767577', true: '#81b0ff' }}
          // thumbColor={isEnabled ? '#f5dd4b' : '#f4f3f4'}
          ios_backgroundColor="#3e3e3e"
          // onValueChange={(value) => setisEnable(value)}
          // value={isEnabled}
        />

        <Text>App</Text>
        <Button
          title="clique"
          color="#841584"
          onPressed={() => message()}
        ></Button>
        <Image
          source={{ uri: 'https://reactjs.org/logo-og.png' }}
          style={{ width: 80, height: 80 }}
          fadeDuration={1500}
        />
        <TextInput
          placeholder="Nome"
          keyboardType='default'
          value={name}
          onChangeText={(text) => setName(text)}
        />
      </ScrollView>
    </SafeAreaView>
  )
}