import React, { useState,useContext } from "react";
import { TextInput} from "react-native-gesture-handler";
import { Text, View, TouchableOpacity, ImageBackground, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Info(props){
    const {data, SetNome, SetNumero, SetCep} = useContext(MainContext);
    const [text, setText] = useState(data.info.nome);
    const [number, setNumber] = useState(data.info.numero);
    const [cep, setCep] = useState(data.info.cep);
    
    return(
        <View>
          <ImageBackground resizeMode="cover" style={styles.image}source={require("../imgs/churrascada.jpg")}>

            <Text style={styles.text}>Digite seu nome:</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu nome"
                onChangeText={setText}
                value={text}
            />
            <Text style={styles.text}>Digite se número:</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu número"
                onChangeText={setNumber}
                value={number}
            />
            <Text style={styles.text}>Digite seu cep:</Text>
            <TextInput
                style={styles.input}
                placeholder="Seu cep"
                onChangeText={setCep}
                value={cep}
            />
        
            <View>
                <TouchableOpacity title="Avançar" 
                style={styles.avancar}
                onPress={() => {
                    props.navigation.navigate('final');
                    SetNome(text);
                    SetNumero(number);
                    SetCep(cep);
                }}>
                    <Text style={styles.textAvancar}>Avançar</Text>
                </TouchableOpacity>
            </View>
        
          </ImageBackground>
        </View>
    )
}

const styles = StyleSheet.create({
    image:{
        width: '100%',
        height: '100%',
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
    input:{
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: 'black',
        fontSize: 25,
        textAlign: 'center',
        backgroundColor: 'white',
        marginRight: 120,
        marginLeft: 120,
        borderRadius: 5,
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
        textAlign: 'center',
    },
});
