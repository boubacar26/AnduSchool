import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/BackButton";
import { useNavigation } from "expo-router";
import { wp } from "../helpers/common";
import Input from "../components/Input";
import Bouton from "../components/Bouton";

const CodeVerification = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton />

        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_vert.png")} />
        </View>
      </View>
      <Text style={styles.text}>Entrez le code de verification</Text>
      <View style={styles.ipt}>
        <Input placeholder="Code de verification" />
      </View>
      <View style={styles.btn}>
        <Bouton style={styles.test} title="Verifier" onPress={()=> navigation.navigate('Enfants')} />
      </View>
    </ScreenWrapper>
  );
};

export default CodeVerification;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // gap: 45,
    paddingHorizontal: wp(5),
    alignItems: "center",
  },
  text: {
    marginTop: 80,
    textAlign: "center",
    fontSize: 30,
    padding: 13
    // marginLeft:
  },
  ipt: {
    display: "flex",
    alignItems: "center",
    marginTop: 80,
  },
  btn: {
    display: "flex",
    alignItems: "center",
    marginTop: 80,
  },
});
