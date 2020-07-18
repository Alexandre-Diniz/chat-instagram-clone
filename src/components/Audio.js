import React from 'react'
import {
  View,
  Image
} from 'react-native'
import {
  LinearGradient
} from 'expo-linear-gradient'
import { FontAwesome5 } from '@expo/vector-icons'

import Sound from './Sound'

export default function ({ send, n, last }) {
  function profile() {
    if (!send) {
      if (last) {
        return (
          <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center', alignSelf: 'flex-end' }} >
            <View style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: '#FFF', overflow: 'hidden', }} >
              <Image source={require('../assets/images/profile.jpeg')} style={{ width: 30, height: 30, resizeMode: 'stretch' }} />
            </View>
          </View>
        )
      }
      return (
        <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: '#FFF', justifyContent: 'center', alignItems: 'center' }} >
        </View>
      )
    }
  }
  return (
    <View 
      style={{
        flexDirection:'row',
        borderColor: '#EFEFEF',
        borderRadius: 20,
        justifyContent: 'center',
        marginVertical: 2,
        paddingHorizontal: 15,
        alignSelf: send ? 'flex-end' : 'flex-start',
        height: 80
      }}
    >
      {profile()}
      <LinearGradient
      colors={send ? ['#EFEFEF', '#EFEFEF'] : ['#0A73E1', '#3EB8F5']}
      start={[0, 0.5]}
      end={[1, 0.5]}
      style={{
        borderWidth: 1,
        borderColor: '#EFEFEF',
        borderRadius: 20,
        justifyContent: 'center',
        marginVertical: 2,
        paddingHorizontal: 15,
        alignSelf: send ? 'flex-end' : 'flex-start',
        height: 80
      }}
    >
      <View style={{ flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }} >
        <FontAwesome5 name="play" size={16} color={send ? '#000' : '#FFF'} />
        <View style={{width:15}} />
        <Sound send={send} n={n} />
      </View>
    </LinearGradient>
    </View>
  )
}