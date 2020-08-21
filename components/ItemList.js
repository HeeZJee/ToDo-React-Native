import React from 'react'
import { StyleSheet, Text, View, FlatList, TouchableHighlight, TouchableOpacity } from 'react-native'
import { MaterialIcons } from '@expo/vector-icons'

const ItemList = ({ todos, delHandler }) => {
    return (
        <FlatList
            data={todos}
            renderItem={({ item: { todo, key } }) => (
                <View style={styles.todo}>

                    <Text style={styles.text}>
                        {todo}
                    </Text>

                    <View>
                        <TouchableOpacity onPress={() => { delHandler(key) }}>
                            <MaterialIcons style={styles.delete} name='delete' />
                        </TouchableOpacity>
                    </View>
                </View>
            )}
        />
    )
}

export default ItemList

const styles = StyleSheet.create({
    todo: {
        marginTop: 10,
        flexDirection: 'row',
    },
    text: {
        backgroundColor: 'dodgerblue',
        color: 'white',
        fontSize: 21,
        padding: 20,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        flex: 1,
    },
    delete: {
        backgroundColor: 'tomato',
        color: 'white',
        fontSize: 21,
        padding: 24,
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
    }
})
