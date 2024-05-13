import React, { useState } from 'react';
import {
    SafeAreaView,
    FlatList,
    StyleSheet,
    Text,
    TouchableHighlight,
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
export default function Exemplo7b() {

    const [DATA, setDATA] = useState(dados);
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item, index, separators }) => (
                    <TouchableHighlight
                        key={item.id}
                        onPress={() => {
                            Alert.alert("Clique: " + item.name)
                        }}
                        style={styles.container}
                        onShowUnderlay={separators.highlight}
                        onHideUnderlay={separators.unhighlight}
                    >
                        <Text style={styles.item}>{item.name}</Text>
                    </TouchableHighlight>
                )
                }
                keyExtractor={item => item.id}
            />
        </SafeAreaView >
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#ABABAB'
    },
    item: {
        backgroundColor: '#B3D9C3',
        padding: 10,
        marginVertical: 1,
        marginHorizontal: 1,
        borderStyle: 'solid',
        borderWidth: 1
    },
    name: {
        fontSize: 32,
    },
});