import React, { useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Listar from "../components/listar";
import { MainContext } from "../context/mainContext";

export default function Lista(props){
    const {data} = useContext(MainContext);

    return(
        <View>

            <Listar classe="Cortes"/> 
            <Listar classe="Extras"/> 
            <Listar classe="Bebidas"/> 
            <Text>Total: R${parseFloat((data.conta.gastototal).toFixed(2))}</Text>
            <Text>Total de: R${data.conta.rateiosemcrianca} por pessoa s/ crianças</Text>
            <Text>Total de: R${data.conta.rateiocomcrianca} por pessoa</Text>
        
            <View>
                <TouchableOpacity title="Avançar" onPress={() => props.navigation.navigate('info')}>
                    <Text>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>   
    );
}
