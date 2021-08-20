import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

function Header(){
    return(
        <View style={styles.headerContainer}>
            <Text style={styles.title}>Ma Liste de courses</Text>
        </View>
    )
}

export default Header;

const styles = StyleSheet.create({
    headerContainer: {
        alignItems: 'center',
        backgroundColor: '#4169e1',
        height: '12%',
        justifyContent: 'center',
        paddingTop: 20,
    },
    title: {
        color: '#fff',
    },
})
