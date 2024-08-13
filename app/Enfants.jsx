import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import ScreenWrapper from '../components/ScreenWrapper'
import BackButton from '../components/BackButton'
import { wp } from '../helpers/common'
import Bouton from '../components/Bouton'
import { useNavigation } from 'expo-router'


const Enfants = () => {
  const navigation = useNavigation();

  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton />
          <Text style={styles.enfant}>Enfants</Text>
        </View>
        <View style={styles.carte}>
          <View style={styles.info}>
            <Image source={require("../assets/images/avatar.png")} />
            <View style={styles.perso}>
              <Text style={styles.nom}>Mamadou Diop</Text>
              <Text style={styles.classe}>5ieme - Nourou Tall</Text>
            </View>
          </View>
          <View style={styles.btn}>
            <Bouton title="Details" buttonStyle={{backgroundColor: '#fff', borderColor: '#009688', borderWidth: '1px'}} textStyle={{color: '#009688'}} style={styles.bouton} onPress={()=> navigation.navigate('DetailEnfant')} />
          </View>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default Enfants

const styles = StyleSheet.create({
  container: {
    gap: 45,
    paddingHorizontal: wp(5),
    // alignItems: "center",
  },
  enfant: {
    // color: '#009688'
    marginTop: 16,
    marginLeft: 40,
    fontSize: 18,
  },
  header: {
    display: "flex",
    flexDirection: "row",
  },
  info: {
    display: "flex",
    flexDirection: "row",
    marginTop: 4,
  },
  carte: {
    borderColor: "#009688",
    margin: 2,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    borderRadius: 15,
    width: "95%",
    marginHorizontal: "auto",
    // shadowColor: "#000",
    // shadowOffset: { width: -2, height: 4 },
    // shadowOpacity: 0.5,
    // boxShadow: '5px  10px'
  },
  btn: {
    // width: 250,
    alignItems: "center",
    marginTop: 15,
  },
  nom: {
    color: "#009688",
    fontSize: 20,
    fontWeight: "bold",
  },
  classe: {
    fontSize: 13,
    color: "grey",
    // fontWeight: 'ultralight'
  },
  bouton: {
    backgroundColor: "red",
  },
  perso: {
    marginLeft: 15,
    marginTop: 5,
  },
});