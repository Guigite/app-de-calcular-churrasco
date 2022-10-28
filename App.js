import React from "react";
import { Text, View, Pressable, StyleSheet } from "react-native-web";


import AuthProvider from "./src/context/mainContext";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Participantes from "./src/pages/participantes";

const Stack = createStackNavigator(); 

export default function App(props){
    return(
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator>
                    <Stack.Screen name="Participantes" options={{headerTitleAlign:'center'}} component={Participantes}/>
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>
    );
}
