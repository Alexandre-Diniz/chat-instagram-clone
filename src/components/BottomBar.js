import React from 'react'
import {
  View,
  TextInput
} from 'react-native'
import {
  LinearGradient
} from 'expo-linear-gradient'
import {
  MaterialIcons,
  SimpleLineIcons,
  Ionicons,
  Feather
} from '@expo/vector-icons'

export default function () {
  return (
    <LinearGradient
    colors={['#F0EEF0', '#EEEEEE']}
    start={[0, 0.5]}
    end={[1, 0.5]}
      style={{
        flexDirection: 'row',
        height: 50,
        width: '90%',
        backgroundColor: '#EFEFEF',
        borderRadius: 25,
        marginTop: 5,
        alignItems: 'center',
        paddingHorizontal: 7,
      }} >
      <LinearGradient
        colors={['#0A73E1', '#3EB8F5']}
        start={[0, 0.7]}
        end={[1, 0.3]}
        style={{
          width: 38,
          height: 38,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center'
        }}
      >
        <MaterialIcons name="photo-camera" size={24} color='#FFF' />
      </LinearGradient>
      <View style={{ paddingHorizontal: 4, height: 38, flex: 3, justifyContent: 'center' }} >
        <TextInput
          style={{ fontSize: 16 }}
          placeholderTextColor='#B8B8B8'
          placeholder='Mensagem...'
        />
      </View>
      <View style={{ paddingHorizontal: 4, height: 38, flex: 2, justifyContent: 'space-between', alignItems: 'center', flexDirection: 'row' }} >
        <SimpleLineIcons name="microphone" size={24} color="black" />
        <Feather name="image" size={24} color="black" />
        <Ionicons name="ios-add-circle" size={28} color="black" />
      </View>
    </LinearGradient>
  )
}