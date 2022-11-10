import React, {useContext, useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, StyleSheet} from "react-native";
import { MainContext } from "../context/mainContext";

export default function Opcoes(props){
    const {data, MudaStatus, ModificaItem} = useContext(MainContext);
    const [checkboxState, setCheckboxState] = useState(data[props.classe][props.posicao].status);

    MudaStatus(props.classe, props.posicao, checkboxState);
    
    return(
        <View>
           <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "Poppins, Sans-serif", display: 'flex', fontWeight: 'bold', }}
                onPress={() => {
                    ModificaItem(props.classe, props.nome, checkboxState);
                    setCheckboxState(!checkboxState) 
                }}
            />
            <Text style={styles.text}>
                {props.nome}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color: "#fff",
    }
})