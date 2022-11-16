import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import Listar from "../components/listar";
import { MainContext } from "../context/mainContext";

export default function Lista(props){
    const {data} = useContext(MainContext);

    return(
        <View>
          <ImageBackground resizeMode="cover" style={styles.image} source={require("../imgs/churrascada.jpg")}>

            <Listar classe="Cortes"/> 
            <Listar classe="Extras"/> 
            <Listar classe="Bebidas"/> 
            
            <View style={styles.totais}>
              <Text style={styles.text}>Total: R${parseFloat((data.conta.gastototal).toFixed(2))}</Text>
              <Text style={styles.text}>Total de: R${data.conta.rateiosemcrianca} por pessoa s/ crianças</Text>
              <Text style={styles.text}>Total de: R${data.conta.rateiocomcrianca} por pessoa</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.avancar} title="Avançar" onPress={() => props.navigation.navigate('info')}>
                    <Text style={styles.textAvancar}>Avançar</Text>
                </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>   
    );
}

const styles = StyleSheet.create({

    image:{
        width: '100%',
        height: '100%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        display: 'flex',
        alignCenter: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    totais: {
      marginTop: 15,
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
        borderWidth: 3,
    },
    avancar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
});