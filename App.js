import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo } from '@expo/vector-icons';
import Home from './components/homepage/Home'
import Chat from './components/Chatapp/Chat'
import Calendar from './components/calendar/Calendar';
import Graph from './components/graph/Graph';
import Screen from './components/screens/Screen'



export default function App() {
  const Tab = createBottomTabNavigator();
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const changeLoggedIn =()=>{
      setIsLoggedin(true)
    }
     if(isLoggedIn){
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
let iconName;
    if (route.name === 'Home') {
    iconName = 'home' 
    color = focused ? 'coral' : 'black';
} 
    else if (route.name === 'Chat') {
    iconName = 'chat';
    color = focused ? 'coral' : 'black';
}
    else if (route.name === 'graph') {
    iconName = 'area-graph';
    color = focused ? 'coral' : 'black';
}
    else if (route.name === 'calendar') {
    iconName = 'calendar';
    color = focused ? 'coral' : 'black';
    }
return <Entypo name={iconName} size={size} color={color} />;
},
})} >
       <Tab.Screen name="Home" component={Home} />
       <Tab.Screen name="Chat" component={Chat} />
       <Tab.Screen name="graph" component={Graph} />
       <Tab.Screen name="calendar" component={Calendar} />
    </Tab.Navigator>
  </NavigationContainer>
  );
}
else{
  return <Screen changeLog={changeLoggedIn}/>
    }
}
