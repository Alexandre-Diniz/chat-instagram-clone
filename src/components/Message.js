import React from 'react'
import {
  View,
  Text,
  Image
} from 'react-native'

export default function ({ send, text, last }) {
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
        flexDirection: 'row',
        backgroundColor: send ? '#EFEFEF' : '#FFF',
        borderColor: '#EFEFEF',
        borderRadius: 100,
        justifyContent: 'center',
        marginVertical: 2,
        paddingHorizontal: 10,
        alignSelf: send ? 'flex-end' : 'flex-start',
      }}>
      {profile()}
      <View
        style={{
          backgroundColor: send ? '#EFEFEF' : '#FFF',
          borderWidth: 1,
          borderColor: '#EFEFEF',
          borderRadius: 100,
          justifyContent: 'center',
          marginVertical: 2,
          paddingHorizontal: 10,
          alignSelf: send ? 'flex-end' : 'flex-start',
        }}
      >
        <Text
          style={{
            padding: 10,
          }} >
          {text}
        </Text>
      </View>
    </View>
  )
}