import {  StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Icon from '../assets/icons'
import { useNavigation } from "expo-router";




const BackButton = ({size = 26}) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()} style={styles.btn}>
      <Icon name="arrowLeft" strokeWidth={2.5} size={size} color="#009688" />
    </TouchableOpacity>
  );
}

export default BackButton

const styles = StyleSheet.create({
  btn:{
    alignSelf: 'flex-start',
    padding: 15,
    borderRadius: '5px',
  }
})