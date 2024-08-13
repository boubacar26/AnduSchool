import { Image, Pressable, StyleSheet, Text, View, Alert } from "react-native";
import React, {useRef, useState} from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/BackButton";
import { useNavigation } from "expo-router";
import { wp } from "../helpers/common";
import Input from "../components/Input";
import Bouton from "../components/Bouton";

const SignUp = () => {
  const navigation = useNavigation();
      const nameRef = useRef("");
      const emailRef = useRef("");
      const telRef = useRef("");
      const passwordRef = useRef("");
      const [loading, setLoading] = useState(false);

      const onSubmit = async () => {
        if (!nameRef || !emailRef.current || !telRef || !passwordRef.current) {
          Alert.alert("S'inscrire", "Remplissez tous les champs d'abord");
        }
      };

  return (
    <ScreenWrapper bg='white'>
      <View style={styles.container}>
        <BackButton router={router} />

        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_vert.png")} />
        </View>
        <Text style={styles.text}>Créer un compte</Text>
        <View>
          <Input placeholder="Nom complet"  onChangeText={(value) => (nameRef.current = value)}/>
          <Input placeholder="Adresse mail" onChangeText={(value) => (emailRef.current = value)} />
          <Input placeholder="Numero de Téléphone" onChangeText={(value) => (telRef.current = value)}  />
          <Input placeholder="Mot de passe" secureTextEntry onChangeText={(value) => (passwordRef.current = value)} />
          <Input placeholder="Confirmer votre mot de passe" secureTextEntry onChangeText={(value) => (passwordRef.current = value)} />
        </View>
        <View>
          <Bouton title="Creer un compte" style={styles.btn} onPress={onSubmit} loading={loading} />
          <View style={styles.forgotpsw}>
            <Text>Déja inscrit ? </Text><Pressable onPress={() => navigation.navigate("Login")}><Text style={styles.login} > Se connecter </Text></Pressable>
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    gap: 45,
    paddingHorizontal: wp(5),
    alignItems: "center",
  },
  logo: {
    width: 25,
    alignItems: "center",
  },
  text: {
    fontSize: 30,
    color: "#009688",
  },
  forgotpsw: {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'flex-end',
    marginTop: 5
  },
  btn: {
    textTransform: "uppercase",
    fontWeight: "bold",
  },
  login: {
    color: "#009688",
    fontWeight: 'bold'
  },
});
