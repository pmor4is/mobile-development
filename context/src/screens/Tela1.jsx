import { View, Text, Button } from 'react-native'
import React, { useContext } from 'react'
import { useNavigation } from '@react-navigation/native'
import { AuthContext } from '../context/AutenticationContext';


export default function Tela1(props) {

    const nav = useNavigation();

    const {data, setData} = useContext(AuthContext);

    return (
        <View>
            <Text>Tela1</Text>
            <Button
                title='Next Page'
                onPress={() => props.navigation.navigate("Tela2")}
            />
            <Text>{data.name}</Text>
            <Text>{data.status}</Text>

            <Button 
                title='Muda nome'
                onPress={() => setData({
                    name:"Primeiro da silva",
                    status: "inativo"
                })}
            />
        </View>
    )
}