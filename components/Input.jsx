import { StyleSheet, TextInput, View } from 'react-native'
import React from 'react'


const Input = (props) => {
  return (
    <View style={[styles.container, props.containerStyles && props.containerStyles ]}>
        {
            props.icon && props.icon
        }
        <TextInput style={styles.ipt} placeholderTextColor='grey' ref={props.inputRef &&  props.inputRef} {...props} />
    </View>
  )
}

export default Input

const styles = StyleSheet.create({
    container:{
        flexDirection: 'row',
        height: 50,
        width: 300,
        padding: 20,
        // alignItems: 'start',
        // justifyContent: 'center',
        borderWidth: 0.3, 
        borderColor: '#000',
        // borderCurve: 'continuous',
        borderRadius: '20px',
        // backgroundColor: 'red'
        marginBottom: 18
    },
    ipt:{
      width: '100%'
    }

})