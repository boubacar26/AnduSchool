import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import BackButton from '../components/BackButton';
import { wp } from '../helpers/common';
import { router } from 'expo-router';
import NavTabs from '../components/NavTabs';
import ScreenWrapper from '../components/ScreenWrapper';


const DetailEnfant = () => {
  return (
    <ScreenWrapper bg="white">
      <View style={styles.container}>
        <View style={styles.header}>
          <BackButton/>
          <Text style={styles.enfant}>Fiche de Mamadou Diop</Text>
        </View>
        <View>
          <NavTabs/>
        </View>
      </View>
    </ScreenWrapper>
  );
}

export default DetailEnfant

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
  },
  carte: {
    borderColor: "#009688",
    margin: 2,
    borderStyle: "solid",
    borderWidth: 1,
    padding: 5,
    borderRadius: 15,
  },
  btn: {
    alignItems: "center",
  },
  nom: {
    color: "#009688",
    fontSize: 20,
    fontWeight: "bold",
  },
  classe: {
    fontSize: 13,
    color: "grey",
  },
  bouton: {
    backgroundColor: "red",
  },
  perso: {
    marginLeft: 15,
    marginTop: 5,
  },
});