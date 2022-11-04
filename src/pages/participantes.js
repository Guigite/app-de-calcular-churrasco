import React, { useContext, useState } from "react";
import BotaoMudanca from "../components/btnAdicionarPessoas";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";

    export default function Participantes(props){
    const {data} = useContext(MainContext);
    const [ninguem, setNinguem] = useState(false);
    
    return(
        <View>
            <Text style={styles.text}>Homens</Text>
            <BotaoMudanca pessoa="homem"/>
            <Text style={styles.text}>Mulheres</Text>
            <BotaoMudanca pessoa="mulher"/>
            <Text style={styles.text}>Crianças</Text>
            <BotaoMudanca pessoa="crianca"/>

            {ninguem ? <Text>Adicione pelo menos uma pessoa</Text> : null}

            <View>
            <TouchableOpacity  
                title="Avançar" 
                onPress={() => { 
                    if (data.pessoas.total == 0) {
                        setNinguem(true)
                    } else {
                        setNinguem(false);
                        props.navigation.navigate('lista');
                    }
                }}
            >
                <Text style={styles.textAvancar}>Avançar</Text>
            </TouchableOpacity>
            </View>        
        </View>

    );
}

const styles = StyleSheet.create({
    text:{
        marginTop: '20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#000',
        fontWeight: 'bold',
        fontSize: '25px',
    },
    textAvancar:{
        backgroundColor: '#62462B',
        borderRadius: '20px',
        padding: '5px',
        // height: '10px',
        marginTop: '30px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#eecc60',
        fontWeight: 'bold',
        fontSize: '25px',
    }
})