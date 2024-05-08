import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native';
import { AuthContext } from '../context/AutenticationContext';

export default function Tela2(props) {

    const nav = useNavigation();
    const {data,setData} = useContext(AuthContext);

    return (
        <View>
            <Text>Tela2</Text>
            <Button
                title='Next Page'
                onPress={() => props.navigation.navigate("Tela3")}
            />
            <Text>{data.name}</Text>
            <Text>{data.status}</Text>
        </View>
    )
}