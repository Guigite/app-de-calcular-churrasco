// import React, { useState, useContext } from "react";
// import { TextInput} from "react-native-gesture-handler";
// import { Text, View, TouchableOpacity } from "react-native";
// import { MainContext } from "../context/mainContext";

// export default function Info(props){
//     const {data, SetNome, SetNumero, SetCep} = useContext(MainContext);
//     const [text, setText] = useState(data.info.nome);
//     const [number, setNumber] = useState(data.info.numero);
//     const [cep, setCep] = useState(data.info.cep);
    
//     return(
//         <View>
//             <Text>Digite seu nome:</Text>
//             <TextInput
//                 label="Seu nome"
//                 value={text}
//                 onChangeText={text => setText(text)}
//             />
//             <Text>Digite se número:</Text>
//             <TextInput
//                 label="Numero celular"
//                 value={number}
//                 onChangeText={number => setNumber(number)}
//             />
//             <Text>Digite seu cep:</Text>
//             <TextInput
//                 label="Seu cep"
//                 value={cep}
//                 onChangeText={cep => setCep(cep)}
//             />
        
//             <View>
//                 <TouchableOpacity title="Avançar" 
//                 onPress={() => {
//                     props.navigation.navigate('final');
//                     SetCep(setCep(cep));
//                     SetNome(setText(text));
//                     SetNumero(setNumber(number));
//                 }}>
//                     <Text>Avançar</Text>
//                 </TouchableOpacity>
//             </View>
        
//         </View>
//     )
// }