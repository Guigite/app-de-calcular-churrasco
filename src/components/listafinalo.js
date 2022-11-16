import React, { useContext } from "react";
import { View, Text, StyleSheet} from "react-native";
import Listar from "../components/listar";
import { MainContext } from "../context/mainContext";

export default function Lista2(){
    const {data} = useContext(MainContext);

    return(
        <View>

            <Listar classe="Cortes"/> 
            <Listar classe="Extras"/> 
            <Listar classe="Bebidas"/> 
            <Text style={styles.text}>Total: R${parseFloat((data.conta.gastototal).toFixed(2))}</Text>
            <Text style={styles.text}>Total de: R${data.conta.rateiosemcrianca} por pessoa s/ crianças</Text>
            <Text style={styles.text}>Total de: R${data.conta.rateiocomcrianca} por pessoa</Text>
        
        </View>   
    );
}

const styles = StyleSheet.create({
    text:{
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
});