import { StyleSheet, Text, View , Image, Pressable} from 'react-native'
import React from 'react'

const DossierEnfant = () => {
  return (
    <View>
      <View style={styles.carte}>
        <Pressable style={styles.detail} >
          <Image source={require("../assets/images/calendar.png")} />
          <Text style={styles.text}>Emploi du temps</Text>
        </Pressable>
        <View style={styles.detail}>
          <Image source={require("../assets/images/file-text.png")} />
          <Text style={styles.text}>Bulletins de note</Text>
        </View>
      </View>
      <View style={styles.carte}>
        <View style={styles.detail}>
          <Image source={require("../assets/images/printer.png")} />
          <Text style={styles.text}>Emploi du temps</Text>
        </View>
        <View style={styles.detail}>
          <Image source={require("../assets/images/briefcase.png")} />
          <Text style={styles.text}>Bulletins de note</Text>
        </View>
      </View>
    </View>
  );
}

export default DossierEnfant

const styles = StyleSheet.create({
  carte:{
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 60
  },
  detail:{
    justifyContent: 'center',
    borderWidth: 1,
    borderColor: '#009688',
    borderRadius: 10,
    padding: 20,
    alignItems: 'center',
    // fontSize: 20
  },
  text:{
    marginTop: 15,
    // fontSize: 0
  }
})