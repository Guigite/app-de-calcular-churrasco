import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native-web";

import { AppLoading } from 'expo';
import { useFont, Poppins_400Regular, useFonts } from '@expo-google-fonts/poppins';
import AuthProvider from "./src/context/mainContext";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Participantes from "./src/pages/participantes";
import Home from "./src/pages/home";
import Pessoas from "./src/pages/Pessoas";
import Lista from "./src/pages/lista";

const Stack = createStackNavigator();

export default function App(props){
    
    let [fontsLoaded, error] = useFonts({
        Poppins_400Regular
    });
    
    if (!fontsLoaded){
        return <AppLoading />
    }

    return(
        <NavigationContainer>
            <AuthProvider>

                  <Stack.Navigator>
                    <Stack.Screen name="home" component={Home} 
                    options={{title:'Churrascada', 
                    headerShown: false, 
                    }} />
                    <Stack.Screen name="participantes" component={Participantes} 
                    options={{title: 'Participantes', 
                    headerTintColor: 'white', 
                    headerStyle: {
                        backgroundColor: 'black',
                        width: '100%',
                        
                        },
                    headerBackTitleVisible: false,
                    headerTitleAlign: 'center',
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

