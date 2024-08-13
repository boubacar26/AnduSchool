import { Image, StyleSheet, Text, View } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/BackButton";
import { useNavigation } from "expo-router";
import { wp } from "../helpers/common";
import Input from "../components/Input";
import Bouton from "../components/Bouton";

const ForgotPassword = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton router={router} />

        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_vert.png")} />
        </View>
        <Text style={styles.text}>Vérifiez votre numéro de téléphone</Text>
        <View>
          <Input placeholder="Numero de Téléphone" />
        </View>
        <View>
          <Bouton title="Envoyer le code" style={styles.btn} />
          {/* <Bouton
            title="S'inscrire"
            onPress={() => router.push("signUp")}
            style={styles.btn}
          /> */}
        </View>
      </View>
    </ScreenWrapper>
  );
};

export default ForgotPassword;

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
    // marginTop: '15px',
    fontSize: 30,
    color: "#009688",
    textAlign: 'center',
    marginTop: 60
  },
  forgotpsw: {
    display: "flex",
    justifyContent: "flex-end",
  },
  btn: {
    textTransform: "uppercase",
    fontWeight: "bold",
    // padding: '40%'
  },
});
