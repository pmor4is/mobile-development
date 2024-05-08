import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AutenticationContext';
import { SafeAreaView } from 'react-native-safe-area-context';

export default function Tela3(props) {

    const nav = useNavigation();
    const { data, setData } = useContext(AuthContext)

    return (
        <SafeAreaView>
            <Text>Tela3</Text>
            <Button
                title='Next Page'
                onPress={() => props.navigation.navigate("Tela1")}
            />
            <Text>{data.name}</Text>
            <Text>{data.status}</Text>
        </SafeAreaView>
    )
}