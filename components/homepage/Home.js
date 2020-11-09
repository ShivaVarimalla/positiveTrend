import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'; 
import Emergency from './Emergency';
import Logout from './Logout';


const HomeStack = createStackNavigator();

function Home() {
return (
     <View>
     <Text>Home</Text>
     <Emergency/>
     <Logout/>
     </View>
);
} 

export default Home;
