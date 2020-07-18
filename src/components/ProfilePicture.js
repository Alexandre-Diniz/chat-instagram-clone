import React from 'react'
import {
  View,
  Image
} from 'react-native'
import {
  LinearGradient
} from 'expo-linear-gradient'

export default function () {
  return (
    <LinearGradient
      colors={['#F5C782','#9B2087']}
      start={[0, 1]}
      end={[1,0]}
      style={{ width: 40, height: 40, borderRadius: 40, justifyContent: 'center', alignItems: 'center' }}
    >
      <View style={{ width: 35, height: 35, borderRadius: 35, backgroundColor: '#FFF',justifyContent:'center',alignItems:'center' }} >
        <View style={{ width: 30, height: 30, borderRadius: 30, backgroundColor: '#FFF', overflow: 'hidden', }} >
          <Image source={require('../assets/images/profile.jpeg')} style={{width:30,height:30,resizeMode:'stretch'}} />
        </View>
      </View>
    </LinearGradient>
  )
}