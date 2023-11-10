import { View, Text, Pressable } from 'react-native'
import React from 'react'

const Login = ({navigation}) => {
  return (
    <View>
      
      <Pressable onPress={()=> navigation.navigate('Home')}>
         <Text>Login</Text>
      </Pressable>
    </View>
  )
}

export default Login