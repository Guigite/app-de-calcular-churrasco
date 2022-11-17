import React, { useState } from "react";
import { View, Switch, StyleSheet, Text } from "react-native";

export default function Sugestoes(){
  const [verSug, setVerSug] = useState(false);
  const toggleSwitch = () => setVerSug(previousState => !previousState);

  return (
    <View style={styles.container}>
      
      <Text style={styles.text1}>Ver Sugestões de Acompanhamento</Text>

      <Switch
        trackColor={{ false: "#767577", true: "#81b0ff" }}
        thumbColor={verSug ? "#f5dd4b" : "#f4f3f4"}
        ios_backgroundColor="#3e3e3e"
        onValueChange={toggleSwitch}
        value={verSug}
      />

        {verSug ? <View style={styles.minicontainer}>
                    <Text style={styles.text}>Arroz </Text>
                    <Text style={styles.text}>Salada de maionese</Text> 
                    <Text style={styles.text}>Farofa</Text> 
                    <Text style={styles.text}>Vinagrete</Text> 
                    <Text style={styles.text}>Pão</Text>
                </View> : null}

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center"
  },
  text :{
    color: 'white',
    fontWeight: 'bold',
    flexDirection: 'column',
    paddingTop: 3,
    fontSize: 16,
  },
  minicontainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  text1: {
    color: 'white',
    fontWeight: 'bold',
    flexDirection: 'column',
    paddingTop: 10,
    fontSize: 16,
  }
});

