import React from 'react'
import {
  View,
  Text
} from 'react-native'
import {
  Ionicons,
  AntDesign,
  Feather
} from '@expo/vector-icons'
import {
  LinearGradient
} from 'expo-linear-gradient'
import ProfilePicture from './ProfilePicture'

export default function () {
  return (
    <View style={{flex:1}} >
      <View style={{ flexDirection: 'row', width: '100%', height: '76%', }} >
        <View style={{ justifyContent: 'center', alignItems: 'center', flex: 1.5 }} >
          <Ionicons name="ios-arrow-round-back" size={40} color="black" />
        </View>
        <View style={{ flex: 1.2 }} >
          <ProfilePicture />
        </View>
        <View style={{ flex: 4, justifyContent: 'center' }} >
          <Text style={{ fontWeight: 'bold' }} > AlexandreDiniz </Text>
          <Text style={{ color: '#A3A3A3', fontSize: 13 }} > alexandre </Text>
        </View>
        <View style={{ flex: 1.3, height: '100%', justifyContent: 'center', alignItems: 'center' }} >
          <AntDesign name="videocamera" size={25} color="black" />
        </View>
        <View style={{ flex: 1.3, height: '100%', justifyContent: 'center', alignItems: 'center' }} >
          <Feather name="info" size={25} color="black" />
        </View>
      </View>
      <View style={{height:'20%', width:'100%'}} />
      <LinearGradient
        colors={['#E3E3E3', '#FFF']}
        start={[0, 0]}
        end={[0, 1]}
        style={{ width: '100%', height: '4%', }}
      />
    </View>
  )
}