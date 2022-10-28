import React from 'react';
import { StyleSheet, Text, View, Pressable } from 'react-native';

import AuthProvider from './src/context/MainContext';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/pages/home';
import Pessoas from './src/pages/Pessoas';

const Stack = createStackNavigator();

export default function App(props){
    return(
        <NavigationContainer>
            <AuthProvider>
                <Stack.Navigator initialRouteName="home">
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
                </Stack.Navigator>
            </AuthProvider>
        </NavigationContainer>       
    );
}