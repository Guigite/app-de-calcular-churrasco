import React, { useContext } from "react";
import { StyleSheet , Text, View } from "react-native-web";
import { TouchableOpacity } from "react-native";

export default function Home(props){
    return(
        <View>
            <TouchableOpacity style={styles.container} title="Avançar" onPress={() => props.navigation.navigate('participantes')}>
                <Text style={styles.texto}>Avançar</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container:{
        alignCenter: 'center',
        justifyContent: 'center',
        backgroundColor: '#000',
        height: '30px',
        width: '250px auto',
    },
    texto: {
        color: '#FFF',
    },
});