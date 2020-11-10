import React, { useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import {Entypo } from '@expo/vector-icons';
import Chat from './components/Chatapp/Chat'
import Calendar from './components/calendar/Calendar';
import Graph from './components/graph/GraphHome';
import Screen from './components/screens/Screen'
import HomeScreen from './components/homepage/HomeScreen'
import SettingsScreen from './components/settings/Settings';
import AsyncStorage from '@react-native-async-storage/async-storage';



export default function App() {
  const Tab = createBottomTabNavigator();
    const [isLoggedIn, setIsLoggedin] = useState(false);
    const [mainScores, setMainscores] = useState([0,0,0,0,0,0,0])
    const [addictionScores, setAddictionScores] = useState([0,0,0,0,0,0,0])
    const [ocdScores, setOcdScores] = useState([0,0,0,0,0,0,0])
    const [stressScores, setStressScores] = useState([0,0,0,0,0,0,0])

  let token

    (async()=>{
        token = await AsyncStorage.getItem('usertoken')
        if(token){
          setIsLoggedin(true)
        }
    })()
    const changeLoggedIn =async()=>{
  
      setIsLoggedin(true)
    }
    const logout = async()=>{
      await AsyncStorage.removeItem('usertoken');
      setIsLoggedin(false);
    }
    const changeMainScores =(arr)=>{
      setMainscores(arr)
    }
    const changeAddictionScores =(arr)=>{
      setAddictionScores(arr)
    }
    const changeOcdScores =(arr)=>{
      setOcdScores(arr)
    }
    const changeStressScores =(arr)=>{
      setStressScores(arr)
    }
     if(isLoggedIn){
  return (
    <NavigationContainer >
      <Tab.Navigator screenOptions={({ route }) => ({
tabBarIcon: ({ focused, color, size }) => {
let iconName;
    if (route.name === 'HomeScreen') {
    iconName = 'home' 
    color = focused ? 'coral' : 'black';
} 
  
    else if (route.name === 'Graph') {
    iconName = 'area-graph';
    color = focused ? 'coral' : 'black';
}
    else if (route.name === 'Journal') {
    iconName = 'calendar';
    color = focused ? 'coral' : 'black';
    }
    else if (route.name === 'Chat') {
      iconName = 'chat';
      color = focused ? 'coral' : 'black';
  }
  else if (route.name === 'Settings') {
    iconName = 'tools';
    color = focused ? 'coral' : 'black';
}
return <Entypo name={iconName} size={size} color={color} />;
},
})} >
       <Tab.Screen name="HomeScreen" children={()=><HomeScreen 
            mainScores={mainScores} 
            addictionScores={addictionScores} 
            ocdScores={ocdScores} 
            stressScores={stressScores}
            changeMainScores={changeMainScores}
            changeAddictionScores={changeAddictionScores}
            changeOcdScores={ changeOcdScores}
            changeStressScores={changeStressScores}
       />}/>
       <Tab.Screen name="Graph" children={()=><Graph 
            mainScores={mainScores} 
            addictionScores={addictionScores} 
            ocdScores={ocdScores} 
            stressScores={stressScores}/>} />
       <Tab.Screen name="Journal" component={Calendar}/>
       <Tab.Screen name="Chat" component={Chat} />
       <Tab.Screen name="Settings" children={()=><SettingsScreen 
            changeLog={logout}  />}/>
    </Tab.Navigator>
  </NavigationContainer>
  );
}
else{
  return <Screen changeLog={changeLoggedIn} />
    }
}
