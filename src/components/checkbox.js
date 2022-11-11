import React, {useContext, useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, StyleSheet} from "react-native";
import { MainContext } from "../context/mainContext";

export default function Opcoes(props){
    const {data, MudaStatus, ModificaItem} = useContext(MainContext);
    const [checkboxState, setCheckboxState] = useState(data[props.classe][props.posicao].status);

    MudaStatus(props.classe, props.posicao, checkboxState);
    
    return(
      <View style={styles.fora}>
        <View style={styles.container}>    
           <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "Poppins, Sans-serif", fontWeight: 'bold', }}
                onPress={() => {
                    ModificaItem(props.classe, props.nome, checkboxState);
                    setCheckboxState(!checkboxState) 
                }}
            />
            <View styles={styles.container2}>
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
    },
    container: {
        flexDirection: 'row',
        justifyContent: 'left',
        alignItems: 'center',
        width: 100,
    },
    container2:{
      textAlign: 'center',
      justifyContent: 'center',
      alignItems: 'center',
    },
    fora: {
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
    },
})