import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import Cortes from "../components/checkbox";

export default function Carnes(props){
    const {data, TotalCarnes} = useContext(MainContext);
    
    TotalCarnes();

    return(
        <View>
            <Text>{data.pessoas.totalkilos}kg</Text>
            <Text>
                Bovina
            </Text>
            <Cortes corte="Picanha"/>
            <Cortes corte="Contra filé"/>
            <Cortes corte="Maminha"/>
            <Text>
                Suína
            </Text>
            <Cortes corte="Costelinha"/>
            <Cortes corte="Linguiça"/>
            <Cortes corte="Picanha Suína"/>
            <Text>
                Ave
            </Text>
            <Cortes corte="Coxa e Sobrecoxa"/>
            <Cortes corte="Coração"/>
            <Cortes corte="Asa"/>
            <Text>
                Extra
            </Text>
            <Cortes corte="Queijo"/>
            <Cortes corte="Pão de alho"/>
            <TouchableOpacity 
                title="Avançar" 
                onPress={() => props.navigation.navigate('bebidas')}>
                <Text >Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}