import { Button, Dimensions, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { TextInput } from 'react-native'
import ButtonView from './ButtonView'
import { useState } from 'react'


const LoginScreen = () => {
  const [user, setUsername] = useState("");
const [password, setPassWord] = useState();
  return (
    <View style={styles.container}>
      <Text style={styles.tilte}>LoginScreen</Text>
      <TextInput style={styles.inPutText}
      placeholder='userName'
      onChangeText={(text)=>setUsername(text)}></TextInput>
      <TextInput style={styles.inPutText}
      placeholder='password' 
      secureTextEntry = {true}
      onChangeText={(text)=>setPassWord(text)}></TextInput>
      <Button onPress={()=>{console.log({user});
      console.log({password})}}
      title='Login'><Text>Login</Text></Button>

      <ButtonView  user={user} password={password}></ButtonView>
    </View>

  )
}

export default LoginScreen

const styles = StyleSheet.create({

  container:{
    flex:1,
    backgroundColor:"blue",
    alignItems:"center",


  }
,
tilte:{
  fontStyle:'bold',
  fontSize:30,
  margin:50,
  color:"white",
  marginTop:50,
},
inPutText:{
  width:Dimensions.get("window").width/100*90,
  height:60,
  borderWidth:2,
  borderColor:"yellow",
  padding:10,
  margin:12,
  borderRadius:10,
  marginTop:10,
  padding:10,
  color:"white"
 // backgroundColor:"white",

}
})