import React, {useContext} from "react";
import { View, Text, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import Listar from "../components/listar";
import Sugestoes from "../components/sugestoes";
import { MainContext } from "../context/mainContext";

export default function Lista(props){
    const {data} = useContext(MainContext);

    return(
        <View>
          <ImageBackground resizeMode="cover" style={styles.image} source={require("../imgs/churrascada.jpg")}>

            <Listar classe="Cortes"/> 
            <Listar classe="Extras"/> 
            <Listar classe="Bebidas"/> 
            
            <Sugestoes/>

            <View style={styles.descartaveis}>
                <Text style={styles.text}>Descartaveis</Text>
                <Text style={styles.text}>Copos: R$ {(data.descartaveis.precocopos).toFixed(2)} - qtd: {data.descartaveis.qtdcopos}</Text>
                <Text style={styles.text}>Pratos: R$ {(data.descartaveis.precopratos).toFixed(2)} - qtd: {data.descartaveis.qtdpratos}</Text>
                <Text style={styles.text}>Carvao: R$ {data.descartaveis.precocarvao} - qtd: {data.descartaveis.qtdcarvao}</Text>
                <Text style={styles.text}>Sal Grosso: R$ 7,50 - 1kg</Text>
                <Text style={styles.text}>Fósforo: R$ 1,75 - caixinha</Text>
            </View>
            
            <View style={styles.totais}>
              <Text style={styles.text}>Total: R${parseFloat((data.conta.gastototal).toFixed(2))}</Text>
              <Text style={styles.text}>Total de: R${data.conta.rateiosemcrianca} por adulto</Text>
              <Text style={styles.text}>Total de: R${data.conta.rateiocomcrianca} por pessoa</Text>
            </View>

            <View>
                <TouchableOpacity style={styles.avancar} title="Avançar" onPress={() => props.navigation.navigate('info')}>
                    <Text style={styles.textAvancar}>Avançar</Text>
                </TouchableOpacity>
            </View>
          </ImageBackground>
        </View>   
    );
}

const styles = StyleSheet.create({

    image:{
        width: '100%',
        height: '100%',
    },
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        display: 'flex',
        alignCenter: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
    totais: {
      marginTop: 10,
      backgroundColor: 'black',
      borderRadius: 10,
      padding: 5,
      margin: 5,
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
        borderWidth: 3,
        textAlign: 'center',
    },
    avancar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        marginBottom: 5,
    },
    descartaveis: {
      marginTop: 10,
      padding: 5,
      margin: 25,
      backgroundColor: 'black',
      borderRadius: 10,
    }
});