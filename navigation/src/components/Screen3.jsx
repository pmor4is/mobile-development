import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Tela3(props) {
    return (
        <View>
            <Text>Tela3</Text>
            <Button
                title='Próxima tela'
                onPress={() => props.navigation.navigate("Homepage")}
                color={'green'}
            />
        </View>
    )
}