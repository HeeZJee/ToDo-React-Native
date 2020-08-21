import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const Header = () => {
    return (
        <View>
            <Text style={styles.header}>
                To-Do App
            </Text>
        </View>
    )
}

export default Header

const styles = StyleSheet.create({
    header: {
        marginHorizontal: 20,
        marginBottom: 10,
        padding: 10,
        color: 'dodgerblue',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 40,
        borderBottomWidth: 1,
        borderColor: '#999'
    },
})
