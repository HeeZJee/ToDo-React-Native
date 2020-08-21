import React, { useState } from 'react'
import { StyleSheet, View, TextInput, Button } from 'react-native'

const InputItem = ({ addHandler }) => {
    const [newTodo, setNewTodo] = useState('')


    return (
        <View>
            <TextInput
                style={styles.input}
                placeholder='e.g. Start Exercise'
                onChangeText={(val) => setNewTodo(val)}
            />
            <Button title={'ADD To-Do'} onPress={() => addHandler(newTodo)} />
        </View>
    )
}

export default InputItem

const styles = StyleSheet.create({
    input: {
        position: 'absolute',
        padding: 20,
        marginVertical: 50,
        backgroundColor: '#fff',
        bottom: 0,
        borderWidth: 2,
        borderRadius: 10,
        borderColor: 'dodgerblue',
        width: '100%',
        fontSize: 21,
    },

})
