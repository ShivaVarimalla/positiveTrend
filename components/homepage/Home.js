import React from 'react'
import { View,Text,StyleSheet} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack'; 


const HomeStack = createStackNavigator();

function Home() {
return (
     <View>
     <Text>Home</Text>
     <Emergency/>
     </View>
);
} 

export default Home;
