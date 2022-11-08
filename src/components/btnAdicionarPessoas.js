import React, {useContext, useState} from "react";
import { View, StyleSheet, Text, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";

export default function BotaoMudanca(props){
    const {AddPessoas, ValorTotal, ValorSemCrianca} = useContext(MainContext);
    const [valor, setValor] = useState(0); 

    AddPessoas(props.pessoa, valor);
    ValorTotal();
    ValorSemCrianca();

    return (
        <View style={styles.btns}>
            <TouchableOpacity onPress={() => {
                if(valor > 0){
                    setValor(valor - 1) 
                }else{
                    setValor(valor - 0)}
                }}
                ><Text style={styles.textos}>-</Text>
            </TouchableOpacity> 
            <Text style={styles.textos}>{valor}</Text>
            <TouchableOpacity onPress={() => {
              setValor(valor + 1)  
            }}>
                <Text style={styles.textos}>+</Text>
            </TouchableOpacity>
        </View>
);
}

const styles = StyleSheet.create({
    btns:{
        margin: 5,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
    },
    textos:{
        fontSize: 25,
        margin: 5,
        color: '#FFF',
    }
})