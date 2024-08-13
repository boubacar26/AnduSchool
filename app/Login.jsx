import { Image, StyleSheet, Text, View , Pressable, Alert} from 'react-native'
import React, { useRef, useState } from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import BackButton from '../components/BackButton'
import { useNavigation } from 'expo-router'
import { wp } from "../helpers/common";
import Input from '../components/Input'
import Bouton from '../components/Bouton'

const Login = () => {
  const navigation = useNavigation();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const [loading, setLoading] = useState(false);


  const onSubmit = async () => {
    if(!emailRef.current || !passwordRef.current){
      Alert.alert('Se connecter', 'Remplissez tous les champs d\'abord')
    }
  }


  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <BackButton router={router} />

        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_vert.png")} />
        </View>
        <Text style={styles.text}>Connectez-vous</Text>
        <View>
          <Input
            placeholder="Adresse mail"
            onChangeText={(value) => (emailRef.current = value)}
          />
          <Input
            placeholder="Mot de passe"
            onChangeText={(value) => (passwordRef.current = value)}
            secureTextEntry
          />
        </View>
        <View style={styles.forgotpsw}>
          <Pressable onPress={() => navigation.navigate("ForgotPassword")}>
            <Text style={styles.login}> Mot de passe oublié ? </Text>
          </Pressable>
        </View>
        <View>
          <Bouton
            title="Se connecter"
            style={styles.btn}
            loading={loading}
            onPress={onSubmit}
          />
          <Bouton
            title="S'inscrire"
            onPress={() => navigation.navigate("signUp")}
            style={styles.btn}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Login

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    gap: 45,
    paddingHorizontal: wp(5),
    alignItems: "center",
  },
  logo: {
    width: 25,
    // height: "10%",
    alignItems: "center",

    // marginBottom: 25
  },
  text: {
    fontSize: 30,
    color: "#009688",
  },
  forgotpsw: {
    display: "flex",
    justifyContent: "flex-end",
  },
  btn: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
});