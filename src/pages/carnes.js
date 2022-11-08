import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { useContext } from "react";
import { MainContext } from "../context/mainContext";
import Cortes from "../components/checkbox";

export default function Carnes(props){
    const {data, TotalCarnes} = useContext(MainContext);
    
    TotalCarnes();

    return(
        <View>
            {/* <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}> */}
                <Text>{data.pessoas.totalkilos}kg</Text>
                <Text style={styles.text}>
                    Bovina
                </Text>
                <Cortes corte="Picanha"/>
                <Cortes corte="Contra filé"/>
                <Cortes corte="Maminha"/>
                <Text style={styles.text}>
                    Suína
                </Text>
                <Cortes corte="Costelinha"/>
                <Cortes corte="Linguiça"/>
                <Cortes corte="Picanha Suína"/>
                <Text style={styles.text}>
                    Ave
                </Text>
                <Cortes corte="Coxa e Sobrecoxa"/>
                <Cortes corte="Coração"/>
                <Cortes corte="Asa"/>
                <Text style={styles.text}>
                    Extra
                </Text>
                <Cortes corte="Queijo"/>
                <Cortes corte="Pão de alho"/>
                <TouchableOpacity style={styles.avancar} 
                    title="Avançar" 
                    onPress={() => props.navigation.navigate('bebidas')}>
                    <Text style={styles.textAvancar}>Avançar</Text>
                </TouchableOpacity>
            {/* </ImageBackground> */}
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: 25,
    },
    textAvancar:{
        backgroundColor: '#62462B',
        borderRadius: 10,
        padding: 8,
        marginTop: 30,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#eecc60',
        fontWeight: 'bold',
        fontSize: 25,
        width: 120,
    },
    avancar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
})