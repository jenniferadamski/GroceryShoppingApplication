import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

function Input(props) {
    const data = props.data;

    return(
        <View style={styles.elementView}>
            <Text style={styles.elementLabel}>{props.title}</Text>
            <TextInput 
                style={styles.textInput} 
                onChangeText={props.handleChange(data)} 
                value={data}
                keyboardType={props.numeric ? 'numeric' : 'default' }
            />
        </View>
    )
}

const styles = StyleSheet.create({
    elementLabel: {
        marginBottom: 10,
    },
    elementView: {
        marginBottom: 20,
    },
    textInput: {
        backgroundColor: '#fff',
        borderRadius: 10,
        height: 40,
        padding: 10,
    },
});

export default Input;
