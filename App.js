import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native-web";

import AuthProvider from "./src/context/mainContext";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Participantes from "./src/pages/participantes";
import Home from "./src/pages/Home";
import Pessoas from "./src/pages/Pessoas";
import Lista from "./src/pages/lista";


const Stack = createStackNavigator();


export default function App(props){
    return(
        <NavigationContainer>
            <AuthProvider>

                <Stack.Navigator>
                    {/* <Stack.Screen name="home" component={Home} 
                    options={{title:'Churrascada', 
                    headerShown: false, 
                    }} /> */}
                    <Stack.Screen name="participantes" component={Participantes} 
                    options={{title: 'Voltar', 
                    headerTintColor: 'white', 
                    headerStyle: {
                        backgroundColor: 'black', 
                        },
                    }} />
                    <Stack.Screen name="lista" component={Lista} 
                    options={{title: 'Voltar', 
                    headerTintColor: 'white', 
                    headerStyle: {
                        backgroundColor: 'black', 
                        },
                    }} />
                    
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}

