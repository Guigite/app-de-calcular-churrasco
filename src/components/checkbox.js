import React, {useContext, useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, TouchableOpacity, StyleSheet} from "react-native";
import { MainContext } from "../context/mainContext";

export default function Opcoes(props){
    const {data,AddItem,AddBebidaCrianca} = useContext(MainContext);
    const [checkboxState, setCheckboxState] = useState(false);
    
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
                    if(checkboxState == false){
                        AddItem(props.opcao1);
                        AddBebidaCrianca(props.opcao3);
                    }
                    else if(checkboxState == true){
                        AddItem(props.opcao2);
                        AddBebidaCrianca(props.opcao4);
                    }
                    setCheckboxState(!checkboxState) 
                }}
            />
            <Text style={styles.text}>
                {props.opcoes}
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color: "#fff",
    }
})