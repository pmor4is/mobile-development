import { Text, Button, FlatList, TouchableHighlight, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'

let questions = [
  {
    id: '1',
    question: 'Na casa em que você vive com sua família, nos cômodos em que a luzes ficam acesas por mais de 4 horas, as lâmpadas são econômicas(led)?'
  },
  {
    id: '2',
    question: 'Quando você toma banho, você demora mais do que 10 minutos?'
  },
  {
    id: '3',
    question: 'Você deixa a torneira aberta ao escovar os dentes?'
  },
  {
    id: '4',
    question: 'Na casa ou prédio em que você vive com sua família, a calçada é limpa com vassoura ao invés de água?'
  },
  {
    id: '5',
    question: 'Você e sua família dão preferência às frutas e verduras da estação?'
  }
]

export default function QuestionsFirstPage(props) {

  const [DATA, setDATA] = useState(questions);

  return (
    <SafeAreaView>
      <FlatList
        data={DATA}
        renderItem={({ item, index, separators }) => (
          <TouchableHighlight
            key={item.id}
            onPress={() => { Alert.alert("Clique: " + item.question) }}
            style={styles.container}
          >
            <Text
              style={{
                ...styles.item,
                ...styles.name
            }}
            >{item.question}</Text>
          </TouchableHighlight>
        )}
      />

      <Button
        title='Continuar perguntas'
        onPress={() => props.navigation.navigate('QuestionsSecondPage')}
        color={'green'}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
      flex: 1,
  },
  item: {
      backgroundColor: 'lightblue',
      padding: 10,
      marginVertical: 1,
      marginHorizontal: 1,
      // borderStyle: 'solid',
      // borderWidth: 1
  },
  question: {
      fontSize: 60,
  },
});