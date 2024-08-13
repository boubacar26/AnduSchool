import { View, Text, StyleSheet } from 'react-native'
import React from 'react'

const InfoEnfant = () => {
  return (
    <View style={styles.container}>
      <View style={styles.div}>
        <Text style={styles.texte1}>Prenom et Nom</Text>
        <Text style={styles.texte2}>Mamadou Diop</Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.texte1}>Date et Lieu de Naissance</Text>
        <Text style={styles.texte2}>09-04-1998 à Mbao</Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.texte1}>Nom du Tuteur</Text>
        <Text style={styles.texte2}>Abdou Diop</Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.texte1}>Niveau</Text>
        <Text style={styles.texte2}>CM2</Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.texte1}>Adresse</Text>
        <Text style={styles.texte2}>Grand Mbao</Text>
      </View>
      <View style={styles.div}>
        <Text style={styles.texte1}>Telephone</Text>
        <Text style={styles.texte2}>77 200 00 00</Text>
      </View>
    </View>
  );
}

export default InfoEnfant

const styles = StyleSheet.create({
    container:{
        padding: 13
    },
  texte1: {
    fontSize: 12,
    fontWeight: "300",
  },
  texte2: {
    fontSize: 20,
    fontWeight: "400",
  },
  div: {
    marginBottom: 15,
  },
});
