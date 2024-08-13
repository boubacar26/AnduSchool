import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import Loading from './Loading';


const Bouton = ({ 
    buttonStyle, 
    textStyle, 
    title='', 
    onPress = () => {}, 
    loading = false, 
    hasShadow = true
    }) => {

    const shadowStyle = {} ;

    if(loading){
      return(
        <View style={[styles.button, buttonStyle, {backgroundColor: 'white'}]} >
          <Loading/>
        </View>
      )
    }



  return (
    <Pressable onPress={onPress} style={[styles.button, buttonStyle, hasShadow && shadowStyle]} >
      <Text style={[styles.text, textStyle]}>{title}</Text>
    </Pressable>
  )
}

export default Bouton

const styles = StyleSheet.create({
  button: {
    backgroundColor: "#009688",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "25%",
    paddingRight: "25%",
    borderRadius: "20px",
    marginBottom: 15
  },
  text:{
    color: "white",
    textAlign: 'center'
  }
});