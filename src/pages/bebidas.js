import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";
import Secao from "../components/secao";


export default function Bebidas(props){
    const {data, TotalLitrosAdultos, TotalLitrosCrianca, DivideCarne, DivideBebida, SeparaExtra, ContaChurrasco } = useContext(MainContext);

    TotalLitrosAdultos();
    TotalLitrosCrianca();
    
    return(
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}>
              <Text style={styles.litros}>Total de litros para Adultos: {data.pessoas.totallitrosa }L</Text>
              <Text style={styles.litrosc}>Total de litros para Crianças: {data.pessoas.totallitrosc}L</Text>            
                  
                  <Secao classe="Bebidas" /> 

              <TouchableOpacity style={styles.avancar}  
                  title="Avançar" 
                  onPress={() => {props.navigation.navigate('lista')
                                  DivideBebida();
                                  DivideCarne();
                                  SeparaExtra(); 
<<<<<<< Updated upstream
=======
                                  ContaChurrasco();
>>>>>>> Stashed changes
                              }}>
                  <Text style={styles.textAvancar}>Avançar</Text>
              </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
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
    },
    avancar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        width: '100%',
        height: '100%',
    },
    litros:{
        fontWeight:'bold',
        color:'#fff',
        textAlign: 'center',
    },
    litrosc:{
        fontWeight:'bold',
        color:'#fff',
        textAlign: 'center',
    }
})