import React from 'react'
import {
  Image,
  View
} from 'react-native'

export default function ({ uri, send, last }) {
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
        marginVertical: 2,
        paddingHorizontal: 15,
        overflow:'hidden',
        alignSelf: send ? 'flex-end' : 'flex-start', alignItems: 'flex-start',
      }}
    >
      {profile()}
      <Image
      source={{ uri }}
      style={{
        width: 250,
        height: 167,
        resizeMode: 'contain',
        borderRadius: 25,
        alignSelf: send ? 'flex-end' : 'flex-start', alignItems: 'flex-start'
      }} />
    </View>
  )
}