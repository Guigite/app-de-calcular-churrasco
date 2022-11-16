import React, {useContext, useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, StyleSheet} from "react-native";
import { MainContext } from "../context/mainContext";

export default function Opcoes(props){
    const {data, MudaStatus, ModificaItem} = useContext(MainContext);
    const [checkboxState, setCheckboxState] = useState(data[props.classe][props.posicao].status);

    MudaStatus(props.classe, props.posicao, checkboxState);
    
    return(   
      <View style={styles.container1}>
        <View style={styles.container2}>    

           <BouncyCheckbox
                size={25}
                fillColor="#62462B"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 3 }}
                textStyle={{ fontFamily: "Poppins, Sans-serif", fontWeight: 'bold', }}
                onPress={() => {
                    ModificaItem(props.classe, props.nome, checkboxState);
                    setCheckboxState(!checkboxState) 
                }}
            />

            <View styles={styles.container3}>
              <Text style={styles.text}>
                  {props.nome}
              </Text>
            </View>
          </View>
        </View>
    );
}

const styles = StyleSheet.create({
    text:{
        color: "#fff",
        fontWeight: "bold",
    },
    container2: {
        flexDirection: 'row',
        alignItems: 'center',
        width: 100
    },
    container3:{
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center'
    },
    container1: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex'
    }
});
