import React from "react";
import BotaoMudanca from "../components/adionarPessoa";
import { View, Text } from "react-native";

    export default function Participantes(props){
    return(
        <View>
            <Text>Homens</Text>
            <BotaoMudanca incrementa= "+" decrementa= "-"/>
            <Text>Mulheres</Text>
            <BotaoMudanca incrementa= "+" decrementa= "-"/>
            <Text>Crianças</Text>
            <BotaoMudanca incrementa= "+" decrementa= "-"/>
        </View>
    );
}