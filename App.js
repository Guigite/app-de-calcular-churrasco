import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native-web";

import AuthProvider from "./src/context/mainContext";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Participantes from "./src/pages/participantes";
import Home from "./src/pages/Home";
import Lista from "./src/pages/lista";
import Carnes from "./src/pages/carnes";
import Bebidas from "./src/pages/bebidas";


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
                    {/* <Stack.Screen name="participantes" component={Participantes} 
                    options={{title: 'Participantes', 
                    headerTintColor: 'white', 
                    headerStyle: {
                        backgroundColor: 'black',
                        height: 40, 
                        },
                    headerTitleAlign: 'center',
                    }} /> */}
                    <Stack.Screen name="carne" component={Carnes} 
                    options={{title: 'Carnes', 
                    headerTintColor: 'white', 
                    headerStyle: {
                        backgroundColor: 'black',
                        height: 40, 
                        },
                    headerTitleAlign: 'center',
                    }} />
                    <Stack.Screen name="bebidas" component={Bebidas} 
                    options={{title: 'Bebidas', 
                    headerTintColor: 'white', 
                    headerStyle: {
                        backgroundColor: 'black',
                        height: 40, 
                        },
                    headerTitleAlign: 'center',
                    }} />
                    
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}

