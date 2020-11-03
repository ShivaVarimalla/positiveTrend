import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'; 
import Login from './Login.js'
import SignUp from './SignUp.js';

const HomeStack = createStackNavigator();

function Home() {
return (
<HomeStack.Navigator initialRouteName = "Login">
<HomeStack.Screen name="Login" component={Login} />
<HomeStack.Screen name="SignUp" component={SignUp} />
</HomeStack.Navigator>
);
} 

export default Home;