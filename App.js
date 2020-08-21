import React, { useState } from 'react';
import { StyleSheet, Text, View, StatusBar, Alert, TouchableWithoutFeedback, Keyboard } from 'react-native';
import ItemList from './components/ItemList';
import Header from './components/Header';
import InputItem from './components/InputItem';
export default function App() {

  initialState = []

  const [todos, setTodos] = useState(initialState)

  const delHandler = (key) => {
    setTodos((prevState) => prevState.filter(item => item.key != key)
    )
  }

  const addHandler = (todo) => {
    if (todo.length > 2 && todo.length < 19) {
      setTodos(() => [...todos, { todo, key: Math.random().toString() }])
    }
    else {
      Alert.alert(
        'Oops!',
        `To-do Must be 3 characters long or 19 characters short.

         Dream Big, Type Short! 😀
        `,
        [{ text: 'Understood', onPress: () => { } },],
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
    marginBottom: '30%',
  },
  list: {
    marginBottom: 20,
  }
});
