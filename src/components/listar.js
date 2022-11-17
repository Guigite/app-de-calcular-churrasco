import React, { useContext } from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Listar(props){

    const {data, DivideCarne, DivideBebida, SeparaExtra} = useContext(MainContext);
    
    return(
        <FlatList 
                data={data[props.classe]}
                renderItem={({item}) => {
                    if(item.status == true){
                        return (<View style={styles.container}>
                                    <Text style={styles.text}>{item.nome}: </Text>
                                    <Text style={styles.text}> R${item.precototal}</Text>
                                </View>)
                    }
                }}
            />
    );
}

const styles = StyleSheet.create({
    text: {
        fontWeight: 'bold',
        fontSize: 20,
        color: '#fff',
        display: 'flex',
        alignCenter: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginTop: 8,
    },
    container:{
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center'
    }
})