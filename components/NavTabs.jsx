import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import InfoEnfant from "./InfoEnfant";
import DossierEnfant from "./DossierEnfant";


const NavTabs = () => {
  const [activeTab, setActiveTab] = useState("Infos");

  return (
    <View>
      <View style={styles.tabs}>
        <Pressable onPress={() => setActiveTab("Infos")}>
          <Text
            style={[styles.text, activeTab === "Infos" && styles.activeTab]}
          >
            Infos personnelles
          </Text>
        </Pressable>
        <Pressable onPress={() => setActiveTab("Dossier")}>
          <Text
            style={[styles.text, activeTab === "Dossier" && styles.activeTab]}
          >
            Dossier scolaire
          </Text>
        </Pressable>
      </View>
      {activeTab === "Infos" ? <InfoEnfant/> : <DossierEnfant/>}
    </View>
  );
};

export default NavTabs;

const styles = StyleSheet.create({
  tabs: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  text: {
    padding: 15,
  },
  activeTab: {
    fontWeight: "bold",
    borderBottomWidth: 2,
    borderBottomColor: "#009688",
    color: "#009688",
  },
});
