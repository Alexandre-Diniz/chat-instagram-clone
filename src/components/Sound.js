import React from 'react'
import {
  View
} from 'react-native'

export default function ({ n, send }) {
  let aux = []
  for (let i = 0; i < n; i++) {
    aux.push(
      <View 
      key={`${i}`}
      style={{
        width: 3,
        height: Math.round(Math.random() * 40),
        borderRadius: 4,
        backgroundColor: send ? '#000' : '#FFF',
        marginHorizontal: 1
      }} />
    )
  }
  return (
    aux
  )
}