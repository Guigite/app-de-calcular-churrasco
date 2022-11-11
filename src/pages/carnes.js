import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground, ScrollView } from "react-native";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import Secao from "../components/secao";

export default function Carnes(props){
    const {data, TotalCarnes, ZeraBebida} = useContext(MainContext);
    
    TotalCarnes();

    return(
      <ScrollView>
        <View>
            <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}>
                <Text style={styles.kg}>Total de kilos: {data.pessoas.totalkilos}kg</Text>
                
                <Secao classe="Cortes"/>
                <Secao classe="Extras"/>
                
                <View style={styles.botoes}>
                  <TouchableOpacity style={styles.avancar} 
                      title="Avançar" 
                      onPress={() => {props.navigation.navigate('bebidas'); ZeraBebida();}}>
                      <Text style={styles.textAvancar}>Avançar</Text>
                  </TouchableOpacity>
                  <TouchableOpacity 
                      title="Avançar" 
                      onPress={() => {props.navigation.navigate('receitas'); ZeraBebida();}}>
                      <Text style={styles.textAvancar}>Receitas</Text>
                  </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
      </ScrollView>
    );
}

const styles = StyleSheet.create({
    botoes: {
        flexDirection: 'row',
        display: 'flex',
        alignItems: "center",
        justifyContent: "center",
        marginBottom: 35
    },
    textAvancar:{
        backgroundColor: '#62462B',
        borderRadius: 10,
        padding: 8,
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#eecc60',
        fontWeight: 'bold',
        fontSize: 25,
        width: 120,
        textAlign: 'center',
        marginBottom: 330,
    },
    avancar: {
        marginRight: 20
    },
    image:{
        width: '100%',
        height: '100%'
    },
    kg:{
        fontWeight:'bold',
        color: '#fff',
        alignItems:'center',
        justifyContent: 'center',
        justifyContent: 'center',
        textAlign: 'center',

    }
})