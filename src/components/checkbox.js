import React, {useContext, useState} from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, StyleSheet} from "react-native";
import { MainContext } from "../context/mainContext";

export default function Opcoes(props){
    const {data, MudaStatus, ModificaItem} = useContext(MainContext);
    const [checkboxState, setCheckboxState] = useState(data[props.classe][props.posicao].status);

    MudaStatus(props.classe, props.posicao, checkboxState);
    
    return(
<<<<<<< Updated upstream
      <View style={styles.fora}>
        <View style={styles.container}>    
=======
      <View style={styles.container1}>
        <View style={styles.container2}>    
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
            <View styles={styles.container2}>
=======
            <View styles={styles.container3}>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
        color: "#fff"
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
>>>>>>> Stashed changes
