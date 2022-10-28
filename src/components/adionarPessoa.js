import React, {useState} from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";

export default function BotaoMudanca(props){
    const [valor, setValor] = useState(0);
    

    return (
        <View>
            <TouchableOpacity onPress={() => setValor(valor + 1)}>{props.incrementa}</TouchableOpacity>
            <Text>{valor}</Text>
            <TouchableOpacity onPress={() => {
                if(valor > 0){
                    setValor(valor - 1)
                   
                }else{
                    setValor(valor - 0)}
                }}
                >{props.decrementa}</TouchableOpacity>       
        </View>
    );
}