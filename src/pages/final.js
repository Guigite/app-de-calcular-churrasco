import React, { useContext } from "react";
import { View, Text, ImageBackground, StyleSheet, ScrollView } from "react-native";
import { MainContext } from "../context/mainContext";
import Lista2 from "../components/listafinalo";

export default function Final(){
    const {data} = useContext(MainContext);
    
    return(
        <View>
          <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}>

          <View style={styles.container}>
            <Text style={styles.text}>Nome do Organizador:</Text>
            <Text style={styles.text}>{data.info.nome}</Text>
            <Text style={styles.text}>Numero do Organizador:</Text>
            <Text style={styles.text}>{data.info.numero}</Text>
            
            <Lista2/>

            <Text style={styles.text}>Localização(cep): <Text>{data.info.cep}</Text></Text>
          </View>
          </ImageBackground>        
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        backgroundColor: 'black',
        margin: 20,
        marginTop: 100,
        borderRadius: 15
    },
    image:{
        width: '100%',
        height: '100%',
    },
    text:{
        marginTop: 8,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#FFF',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center',
    },
});
