import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'; 


const HomeStack = createStackNavigator();

function Home() {
return (
     <Text>Home</Text>
);
} 

export default Home;