import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native'

import UpperBar from './src/components/UpperBar'
import Conversation from './src/components/Conversation'
import BottomBar from './src/components/BottomBar'

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style='auto' />
      <View style={{ height: 40 }} />
      <View style={{ flex: 1.3 }} >
        <UpperBar />
      </View>
      <View style={{ flex: 15 }} >
        <Conversation />
      </View>
      <View style={{ flex: 2, justifyContent:'flex-start', alignItems:'center' }} >
        <BottomBar/>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
