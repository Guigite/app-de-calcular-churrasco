
import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native-web";


import AuthProvider from "./src/context/mainContext";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Participantes from "./src/pages/Participantes";


const Stack = createStackNavigator();


export default function App(props){
    return(
        <NavigationContainer>
            <AuthProvider>

                <Stack.Navigator>
                <Stack.Screen name="home" component={Home} 
                    options={{title:'Churrascada', 
                    headerTitleAlign: 'center', 
                    headerStyle: { 
                        height: '35px',
                        backgroundColor: '#FF4F4F', 
                        },
                    }} />
                    <Stack.Screen name="pessoas" component={Pessoas} 
                    options={{title: 'Voltar', 
                    headerTintColor: 'white', 
                    headerStyle: {
                        backgroundColor: 'black', 
                        },
                    }} />
                    <Stack.Screen name="Participantes" options={{headerTitleAlign:'center'}} component={Participantes}/>
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}

