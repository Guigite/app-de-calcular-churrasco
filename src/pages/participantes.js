import React, { useContext, useState } from "react";
import BotaoMudanca from "../components/btnAdicionarPessoas";
import { View, Text, TouchableOpacity, StyleSheet, ImageBackground } from "react-native";
import { MainContext } from "../context/mainContext";

    export default function Participantes(props){
    const {data, ZeraCarne} = useContext(MainContext);
    const [ninguem, setNinguem] = useState(false);
    
    return(
        <View style={styles.container}>
            <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}>

                <Text style={styles.text}>Homens</Text>
                <BotaoMudanca pessoa="homem"/>
                <Text style={styles.text}>Mulheres</Text>
                <BotaoMudanca pessoa="mulher"/>
                <Text style={styles.text}>Crianças</Text>
                <BotaoMudanca pessoa="crianca"/>

                {ninguem ? <Text style={styles.text1}>Adicione pessoas ao churrasco</Text> : null}

                <View>
                <TouchableOpacity style={styles.avancar}  
                    title="Avançar" 
                    onPress={() => { 
                        if (data.pessoas.total == 0) {
                            setNinguem(true)
                        } else {
                            setNinguem(false);
                            props.navigation.navigate('carne');
                        }
                        ZeraCarne();
                    }}
                >
                    <Text style={styles.textAvancar}>Avançar</Text>
                </TouchableOpacity>
                </View>
            </ImageBackground>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    },
    text1:{
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#F02',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: "center",
    },
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
    avancar: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
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
    },
    image:{
        width: '100%',
        height: '100%',
    },
});