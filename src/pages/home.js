import React, { useContext } from "react";
import { StyleSheet , Text, View, TouchableOpacity, ImageBackground } from "react-native";

export default function Home(props){
    return(
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}>
                <View style={styles.container}>
                    <TouchableOpacity style={styles.botao} title="Avançar" onPress={() => props.navigation.navigate('participantes')}>
                        <Text style={styles.texto}>Calcular</Text>
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
    container:{
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    botao:{
        borderColor: '#000',
        borderWidth: 3,
        borderRadius: 20,
        display: 'flex',
        alignCenter: 'center',
        justifyContent: 'center',
        backgroundColor: '#62462B',
        height: 75,
        width: 170,
    },
    texto: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#eecc60',
        display: 'flex',
        alignCenter: 'center',
        justifyContent: 'center',
        textAlign: 'center',
    },
});