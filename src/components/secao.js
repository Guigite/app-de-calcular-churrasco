import React, {useContext, useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, TouchableOpacity, StyleSheet, FlatList} from "react-native";
import { MainContext } from "../context/mainContext";
import Opcoes from "./checkbox";

export default function Secao(props){
    const {data,AddItem,AddBebidaCrianca, MudaStatus} = useContext(MainContext);
  
    return(
        <View>
           <Text style={styles.text}>{props.classe}</Text>
           <FlatList 
                data={data[props.classe]}
                renderItem={({item, index}) => {
                    return <Opcoes classe={props.classe} posicao={index} nome={item.nome}/>
                }}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        marginTop: 20,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 25,
        textAlign: 'center'
    }
})