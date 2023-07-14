import { Pressable, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ButtonView = (props) => {
  return (
    <View style={styles.button}>
    <Pressable
    onPress={()=>{
      console.log(props.user);
      console.log(props.password)
    }
    }>{props.title}</Pressable>
    </View>
  )
}

export default ButtonView

const styles = StyleSheet.create({
    button:{
    alignItems: 'center',
    minWidth:100,
    backgroundColor:"yellow",
    padding:10,
    margin:20,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#2196F3'
    }
})