import React from "react";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { View, Text, TouchableOpacity} from "react-native";

export default function Cortes(props){
    return(
        <View>
           <BouncyCheckbox
                size={25}
                fillColor="red"
                unfillColor="#FFFFFF"
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 2 }}
                textStyle={{ fontFamily: "Poppins, Sans-serif", display: 'flex', fontWeight: 'bold', }}
            />
            <Text>
                {props.corte}
            </Text>
        </View>
    );
}