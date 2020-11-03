import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo } from '@expo/vector-icons';
import Home from './components/homepage/Home'
import Chat from './components/Chatapp/Chat'
import Calendar from './components/calendar/Calendar';
import Graph from './components/graph/Graph';



export default function App() {
  const Tab = createBottomTabNavigator();
  return (
    <NavigationContainer >
    <Tab.Navigator screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
let iconName;
if (route.name === 'Home') {
iconName = focused ? 'home' : 'home';
color = focused ? 'coral' : 'black';
} else if (route.name === 'Chat') {
iconName = focused ? 'chat' : 'chat';
color = focused ? 'coral' : 'black';
}
else if (route.name === 'graph') {
  iconName = focused ? 'area-graph' : 'area-graph';
  color = focused ? 'coral' : 'black';
  }
  else if (route.name === 'calendar') {
    iconName = focused ? 'calendar' : 'calendar';
    color = focused ? 'coral' : 'black';
    }


// You can return any component that you like here!
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
