import React, { useContext } from "react";
import { View, Text } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Lista(){
    const {data} = useContext(MainContext);
    
    return(
        <View>
            <Text>{data.pessoas.homens}</Text>
            <Text>{data.pessoas.mulher}</Text>
            <Text>{data.pessoas.crianca}</Text>
            <Text>{data.pessoas.total}</Text>
            <Text>{data.pessoas.totalsemcrianca}</Text>
        </View>  
    );
    
   
}