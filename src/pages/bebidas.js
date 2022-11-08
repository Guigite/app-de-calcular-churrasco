import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Bebidas(props){
    const {data, TotalLitrosAdultos, TotalLitrosCrianca} = useContext(MainContext);

    TotalLitrosAdultos();
    TotalLitrosCrianca();
    
    return(
        <View>
            <Text>{data.pessoas.totallitrosa }L</Text>
            <Text>{data.pessoas.totallitrosc}L</Text>            
            <TouchableOpacity 
                title="Avançar" 
                onPress={() => props.navigation.navigate('lista')}>
                <Text >Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}