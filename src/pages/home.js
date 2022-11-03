import React, { useContext } from "react";
import { StyleSheet , Text, View } from "react-native-web";
import { TouchableOpacity } from "react-native";
import Churrascada from '../imgs/Churrascada.jpg';

export default function Home(props){
    return(
        <View style={styles.container}>
            <TouchableOpacity style={styles.botao} title="Avançar" onPress={() => props.navigation.navigate('participantes')}>
                <Text style={styles.texto}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({

    container:{
        // padding: '150px 75px 1000px 75px',
        paddingTop: '150px',
        paddingLeft: '75px',
        paddingRight: '75px',
        background: 'url(../imgs/Churrascada.jgp)',
    },
    botao:{
        border: '3px solid #000',
        borderRadius: '20px',
        display: 'flex',
        alignCenter: 'center',
        justifyContent: 'center',
        backgroundColor: '#62462B',
        height: '75px',
        width: '170px',
    },
    texto: {
        fontWeight: 'bold',
        fontSize: '20px',
        color: '#eecc60',
        display: 'flex',
        alignCenter: 'center',
        justifyContent: 'center',
    },
});