import React, { useContext } from "react";
import BotaoMudanca from "../components/btnAdicionarPessoas";
import { View, Text } from "react-native";
import { MainContext } from "../context/mainContext";

    export default function Participantes(){
      
    
    return(
        <View>
            <Text>Homens</Text>
            <BotaoMudanca pessoa="homem" incrementa= "+" decrementa= "-"/>
            <Text>Mulheres</Text>
            <BotaoMudanca pessoa="mulher" incrementa= "+" decrementa= "-"/>
            <Text>Crianças</Text>
            <BotaoMudanca pessoa="crianca" incrementa= "+" decrementa= "-"/>

            <View>
            <TouchableOpacity style={styles.container} title="Avançar" onPress={() => props.navigation.navigate('lista')}>
                <Text style={styles.texto}>Avançar</Text>
            </TouchableOpacity>
            </View>        
        </View>

    );
}