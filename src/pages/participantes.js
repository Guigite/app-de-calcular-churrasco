import React, { useContext, useState } from "react";
import BotaoMudanca from "../components/btnAdicionarPessoas";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";

    export default function Participantes(props){
    const {data} = useContext(MainContext);
    const [ninguem, setNinguem] = useState(false);
    
    return(
        <View>
            <Text>Homens</Text>
            <BotaoMudanca pessoa="homem" incrementa= "+" decrementa= "-"/>
            <Text>Mulheres</Text>
            <BotaoMudanca pessoa="mulher" incrementa= "+" decrementa= "-"/>
            <Text>Crianças</Text>
            <BotaoMudanca pessoa="crianca" incrementa= "+" decrementa= "-"/>

            {ninguem ? <Text>Adicione pelo menos uma pessoa</Text> : null}

            <View>
            <TouchableOpacity  
                title="Avançar" 
                onPress={() => { 
                    if (data.pessoas.total == 0) {
                        setNinguem(true)
                    } else {
                        setNinguem(false);
                        props.navigation.navigate('lista');
                    }
                }}
            >
                <Text >Avançar</Text>
            </TouchableOpacity>
            </View>        
        </View>

    );
}