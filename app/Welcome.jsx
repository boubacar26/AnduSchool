import { Image, StatusBar, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import { wp } from '../helpers/common'
import Bouton from '../components/Bouton'
import { useNavigation } from 'expo-router'

const Welcome = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper>
      <StatusBar style="dark" />
      <View style={styles.container}>
        <View style={styles.sect1}>
          <Image
            style={styles.welcomeImage}
            resizeMode="contain"
            source={require("../assets/images/logo_vert.png")}
          />
        </View>
        <View style={styles.sect2}>
          <Image
            source={require("../assets/images/image-removebg-preview 1.png")}
          />
          <Text style={styles.texte}>
            Le suivi éducatif de vos enfants à portée de main
          </Text>
        </View>
        <View style={styles.footer}>
          <Bouton
            style={styles.btn}
            title="Commencer"
            onPress={() => navigation.navigate("Otp")}
          />
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Welcome

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "space-around",
    backgroundColor: "#fff",
    paddingHorizontal: wp(4),
    // marginTop: '5%'
  },
  sect1: {
    // marginTop: "-50%",
  },
  sect2: {
    // marginTop: "-115%",
  },
  texte: {
    fontSize: "18px",
    color: "#009688",
    textAlign: "center",
  },
  footer: {
    width: "60%",
  },
  bottomTextContainer: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 5,
  },
  loginText: {
    textAlign: "center",
    color: "#009688",
  },
});