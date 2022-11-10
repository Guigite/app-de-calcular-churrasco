import React, { useContext } from "react";
import { View, Text, FlatList } from "react-native";
import { MainContext } from "../context/mainContext";

export default function Listar(props){

    const {data, DivideCarne, DivideBebida, SeparaExtra} = useContext(MainContext);
    
    return(
        <FlatList 
                data={data[props.classe]}
                renderItem={({item}) => {
                    if(item.status == true){
                        return (<View>
                                    <Text>{item.nome}</Text>
                                    <Text>R${item.precototal}</Text>
                                </View>)
                    }
                }}
            />
    );
}