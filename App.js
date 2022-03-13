import React from 'react'
import { Text, View, StyleSheet, SafeAreaView } from 'react-native'
import Title from './src/components/Title/'
import Main from './src/components/Main/'

export default () => {
  return (
    <View>
      <Title />
      <Main />
    </View>
  )
}

const styles = StyleSheet.create({
  page: {
    width: 200,
    height: 200,
    backgroundColor: '#ff0000'
  },
  texto: {
    color: '#fff', fontSize: 25
  }
})