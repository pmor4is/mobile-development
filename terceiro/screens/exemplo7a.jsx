import React, { useState } from 'react';
import {
  SafeAreaView, 
  FlatList, 
  Text,
  Alert
} from 'react-native';
let dados = [
  {
    id: '1',
    name: 'Primeiro item',
  },
  {
    id: '2',
    name: 'Segundo item',
  },
  {
    id: '3',
    name: 'Terceiro item',
  },
];
export default function Exemplo7a() {

  const [DATA, setDATA] = useState(dados);
  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item, index, separators }) => (
          <Text onPress={() => { Alert.alert("Clique " + item.name) }}>
            {item.name}
          </Text>
        )}
      />
    </SafeAreaView >
  );
};