import React, { useContext } from "react";
import { View, Text, TouchableOpacity, FlatList } from "react-native";
import Listar from "../components/listar";
import { MainContext } from "../context/mainContext";

export default function Lista(props){
    const {data, Conta} = useContext(MainContext);

    return(
        <View>

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