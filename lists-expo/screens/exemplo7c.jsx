import React, { useEffect, useState } from 'react';
import {
    SafeAreaView, FlatList, StyleSheet,
    TouchableHighlight, Alert, Text
} from 'react-native';
export default function Exemplo7c() {

    const [DATA, setDATA] = useState([]);
    useEffect(() => {
        console.log("useEffect funcionando");

        fetch("https://jsonplaceholder.typicode.com/users")
            .then(resp => resp.json())
            .then(json => setDATA(json));
    }, [])
    return (
        <SafeAreaView style={styles.container}>
            <FlatList
                data={DATA}
                renderItem={({ item, index,
                    separators }) => (
                    <TouchableHighlight
                        key={item.id}
                        onPress={() => { Alert.alert("Clique: " + item.name) }}
                        style={styles.container}
                    >
                        <Text
                            style={{
                                ...styles.item,
                                ...styles.name
                            }}>{item.name}</Text>
                    </TouchableHighlight>
                )}
                keyExtractor={item => item.id}
            />
        </SafeAreaView >
    );
};

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
    name: {
        fontSize: 34,
    },
});