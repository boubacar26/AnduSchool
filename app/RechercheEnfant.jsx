import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import ScreenWrapper from "../components/ScreenWrapper";
import BackButton from "../components/BackButton";
// import { useNavigation } from "expo-router";
import { wp } from "../helpers/common";
import Input from "../components/Input";
import Bouton from "../components/Bouton";
import DropdownComponent from "../components/Dropdown";

const RechercheEnfant = () => {
  // const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <View style={styles.container}>
        <BackButton router={router} />

        <View style={styles.logo}>
          <Image source={require("../assets/images/logo_vert.png")} />
        </View>
        <View>
          <Text style={styles.text}>Cherchez votre enfant</Text>
        </View>
        <View style={styles.ipt}>
          <Input placeholder="Code de verification" />
        </View>
        <View style={styles.btn}>
          <Bouton style={styles.test} title="Verifier" />
        </View>
      </View>
        <DropdownComponent/>
    </ScreenWrapper>
  );
};

export default RechercheEnfant;

const styles = StyleSheet.create({
  container: {
    gap: 45,
    paddingHorizontal: wp(5),
    alignItems: "center",
  },
  text: {
    marginTop: 50,
    textAlign: "center",
    fontSize: 30,
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
