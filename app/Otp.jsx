import { StyleSheet, Text, View, Image, KeyboardAvoidingView } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import BackButton from '../components/BackButton'
import { useNavigation } from 'expo-router'
import { wp } from "../helpers/common";
import Input from '../components/Input'
import Bouton from '../components/Bouton'

const Otp = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <KeyboardAvoidingView behavior='pading'>
        <View style={styles.container}>
          <BackButton/>

          <View style={styles.logo}>
            <Image source={require("../assets/images/OTP1.png")} />
          </View>
        </View>
        <Text style={styles.text}>Vérifiez votre numéro de téléphone</Text>
        <Text style={styles.text2}>
          Nous vous enverrons un mot de passe à usage unique sur votre numéro de
          téléphone portable.
        </Text>
        <View style={styles.ipt}>
          <Input placeholder="Numero de Telephone" />
        </View>
        <View style={styles.btn}>
          <Bouton style={styles.test} title="Envoyer" onPress={()=>navigation.navigate('CodeVerification')} />
        </View>
      </KeyboardAvoidingView>
    </ScreenWrapper>
  );
}

export default Otp

const styles = StyleSheet.create({
  container: {
    gap: 45,
    paddingHorizontal: wp(5),
    alignItems: "center",
    text: {
      marginTop: 50,
      textAlign: "center",
      fontSize: 30,
    },
  },
  logo:{
    marginTop: -60
  },
  text: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
  },
  text2: {
    marginTop: 50,
    textAlign: "center",
    // marginLeft: 10,
    padding: 20,
    // marginRight: 10,
    margin: 'auto'
    // fontSize: 30,
  },
  ipt: {
    display: "flex",
    alignItems: "center",
    marginTop: 60,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    marginTop: 40,
  },
});