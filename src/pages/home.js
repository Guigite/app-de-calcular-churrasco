import React, { useContext } from "react";
import { StyleSheet , Text, View, TouchableOpacity, ImageBackground } from "react-native";

export default function Home(props){
    return(
        <View>
            <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.botao} title="Avançar" onPress={() => props.navigation.navigate('participantes')}>
                        <Text style={styles.texto}>Avançar</Text>
                    </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({

    image:{
        width: '100vw',
        height: '100vh',
    },

    container:{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        // // padding: '150px 75px 1000px 75px',
        // paddingTop: '150px',
        // paddingLeft: '75px',
        // paddingRight: '75px',
        // paddingBottom: '100%',
    },
    botao:{
        border: '2px solid #000',
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