import React, { useContext } from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Lista(props){
    const {data} = useContext(MainContext);
    
    return(
        <View>
            <Text>{data.pessoas.homens}</Text>
            <Text>{data.pessoas.mulher}</Text>
            <Text>{data.pessoas.crianca}</Text>
            <Text>{data.pessoas.total}</Text>
            <Text>{data.pessoas.totalsemcrianca}</Text>
        
            <View>
                <TouchableOpacity title="Avançar" onPress={() => props.navigation.navigate('carne')}>
                    <Text>Avançar</Text>
                </TouchableOpacity>
            </View>
        </View>   
    );
}