import React, { useState, useContext } from "react";
import { TextInput} from "react-native-gesture-handler";
import { Text, View, TouchableOpacity } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Info(props){
    const {data, SetNome, SetNumero, SetCep} = useContext(MainContext);
    const [text, setText] = useState(data.info.nome);
    const [number, setNumber] = useState(data.info.numero);
    const [cep, setCep] = useState(data.info.cep);
    
    return(
        <View>
            <Text>Digite seu nome:</Text>
            <TextInput
                placeholder="Seu nome"
                onChangeText={setText}
                value={text}
            />
            <Text>Digite se número:</Text>
            <TextInput
                placeholder="Seu número"
                onChangeText={setNumber}
                value={number}
            />
            <Text>Digite seu cep:</Text>
            <TextInput
                placeholder="Seu cep"
                onChangeText={setCep}
                value={cep}
            />
        
            <View>
                <TouchableOpacity title="Avançar" 
                onPress={() => {
                    props.navigation.navigate('final');
                    SetNome(text);
                    SetNumero(number);
                    SetCep(cep);
                }}>
                    <Text>Avançar</Text>
                </TouchableOpacity>
            </View>
        
        </View>
    )
}