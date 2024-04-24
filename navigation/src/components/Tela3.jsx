import { View, Text, Button } from 'react-native'
import React from 'react'

export default function Tela3(props) {
    return (
        <View>
            <Text>Tela1</Text>
            <Button
                title='Próxima tela'
                onPress={() => props.navigation.navigate("TelaSecundaria")}
                color={'green'}
            />
        </View>
    )
}