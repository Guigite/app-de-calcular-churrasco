import React, { useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Listar from "../components/listar";
import { MainContext } from "../context/mainContext";

export default function Lista(props){
    const {data, Conta} = useContext(MainContext);

    
    return(
        <View>
            <Text>Homens: {data.pessoas.homens}</Text>
            <Text>Mulheres: {data.pessoas.mulher}</Text>
            <Text>Crianças: {data.pessoas.crianca}</Text>
            <Text>Total c/ Crianças: {data.pessoas.total}</Text>
            <Text>Total s/ Crianças: {data.pessoas.totalsemcrianca}</Text>
            <Text>Total de Cortes: {data.quantidade.qntCarne}</Text>
            <Text>Total de Bebidas p/ Adultos: {data.quantidade.qntBebida}</Text>
            <Text>Total de Bebidas p/ Crianças: {data.quantidade.qntBebidac}</Text>
            <Text>Total de Extra: {data.quantidade.qntExtra}</Text>

            <Listar classe="Cortes"/> 
            <Listar classe="Bebidas"/> 
            <Listar classe="Extras"/> 
        
            <View>
                <TouchableOpacity title="Avançar" onPress={() => props.navigation.navigate('home')}>
                    <Text>Terminar</Text>
                </TouchableOpacity>
            </View>
        </View>   
    );
}