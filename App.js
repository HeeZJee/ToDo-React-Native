import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ItemList from './components/ItemList';
import Header from './components/Header';
import InputItem from './components/InputItem';
export default function App() {

  initialState = [
    { todo: `Make breakfast`, key: '1', },
    { todo: `Buy groceries`, key: '2', },
    { todo: `Learn coding`, key: '3', },
    { todo: `Start coding`, key: '4', },
  ]

  const [todos, setTodos] = useState(initialState)

  const delHandler = (key) => {
    setTodos((prevState) => prevState.filter(item => item.key != key)
    )
  }

  const addHandler = (todo) => {
    if (todo.length > 2 && todo.length < 20) {
      setTodos(() => [...todos, { todo, key: Math.random().toString() }])
    }
    else {
      Alert.alert(
        'Oops!',
        'To-do Must be 3 characters long or 20 characters short.',
        [{ text: 'Understood', onPress: () => console.log('alert closed') },],
      )
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <Header />
        <View style={styles.text}>
          <ItemList todos={todos} delHandler={delHandler} />
        </View>
        <View style={styles.list}>
          <InputItem addHandler={addHandler} />
        </View>
      </View>

    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
    marginHorizontal: 20,
  },
  text: {
    flex: 1,
    // backgroundColor: 'red',
    marginBottom: '30%',
  },
  list: {
    marginBottom: 20,
    // flex: 1,
    // marginBottom: 30,
  }
});
