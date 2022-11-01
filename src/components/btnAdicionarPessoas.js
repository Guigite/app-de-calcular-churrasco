import React, {useContext, useState} from "react";
import { View, Button, Text, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";

export default function BotaoMudanca(props){
    const {AddPessoas, ValorTotal, ValorSemCrianca} = useContext(MainContext);
    const [valor, setValor] = useState(0); 

    AddPessoas(props.pessoa, valor);
    ValorTotal();
    ValorSemCrianca();

    return (
        <View>
            <TouchableOpacity onPress={() => {
                if(valor > 0){
                    setValor(valor - 1) 
                }else{
                    setValor(valor - 0)}
                }}
                ><Text>{props.decrementa}</Text></TouchableOpacity> 
                <Text>{valor}</Text>
            <TouchableOpacity onPress={() => setValor(valor + 1)}><Text>{props.incrementa}</Text></TouchableOpacity>
        </View>
);
}

