import React from 'react'
import {
  View,
  Text,
  ScrollView
} from 'react-native'

import Message from './Message'
import Audio from './Audio'
import Image from './Image'
import HideImage from './HideImage'

export default function(){
  return(
    <ScrollView
      style={{
        paddingHorizontal:10,
        flex:1
      }}
      showsVerticalScrollIndicator={false}
    >
      <Message send text='Hello World' />
      <Message last text='Hello World' />
      <Audio send={true} n={10} />
      <Audio last n={20} />
      <Image
        send
        uri='https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370.jpg'
      />
      <Image
        last
        uri='https://www.infoescola.com/wp-content/uploads/2019/10/paisagem-ouro-preto-1008049370.jpg'
      />
      <Message send text='Hello World' />
      <HideImage last />
      <Audio send={true} n={30} />
      <Audio send={true} n={20} />
      <Audio last n={35} />
    </ScrollView>
  )
}