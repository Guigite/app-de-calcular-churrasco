import React, { useContext } from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";
import Opcoes from "../components/checkbox";


export default function Bebidas(props){
    const {data, TotalLitrosAdultos, TotalLitrosCrianca} = useContext(MainContext);

    TotalLitrosAdultos();
    TotalLitrosCrianca();
    
    return(
        <View>
            <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}>
            <Text style={styles.litros}>Total de litros para Adultos: {data.pessoas.totallitrosa }L</Text>
            <Text style={styles.litrosc}>Total de litros para Crianças: {data.pessoas.totallitrosc}L</Text>            
                <Opcoes opcao1="addBebida" opcao2="tiraBebida" opcao3="addBebidas" opcao4="tiraBebidas" opcoes="Água"/>
                <Opcoes opcao1="addBebida" opcao2="tiraBebida" opcao3="addBebidas" opcao4="tiraBebidas" opcoes="Suco"/>
                <Opcoes opcao1="addBebida" opcao2="tiraBebida" opcao3="addBebidas" opcao4="tiraBebidas" opcoes="Refrigerante"/>
                <Opcoes opcao1="addBebida" opcao2="tiraBebida" opcoes="Cerveja"/>
            <TouchableOpacity style={styles.avancar}  
                title="Avançar" 
                onPress={() => props.navigation.navigate('lista')}>
                <Text style={styles.textAvancar}>Avançar</Text>
            </TouchableOpacity>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
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
    },
    avancar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    image:{
        flex: 1,
        height: 700,
    },
    litros:{
        fontWeight:'bold',
        color:'#fff',
    },
    litrosc:{
        fontWeight:'bold',
        color:'#fff',
    }
})