import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import Login from './components/homepage/Login'
import SignUp from './components/homepage/SignUp'
import Home from './components/homepage/Home'
import Chat from './components/Chatapp/Chat'
import Third from './components/3rdpage/Third'
import Fourth from './components/4thpage/Fourth'



export default function App() {
  const Stack = createStackNavigator();
  return (
    <NavigationContainer>
    <Stack.Navigator  initialRouteName="Home"
        screenOptions={{
          headerTitleAlign: "center",
          headerStyle: {
            backgroundColor: "#000"
          },
          headerTintColor: "#f4f4f4",
          headerTitleStyle: {
            fontWeight: "bold"
          }
        }}>
      <Stack.Screen name="SignUp" component={SignUp} />
      <Stack.Screen name="Login" component={Login} />
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Chat" component={Chat} />
      <Stack.Screen name="Third" component={Third} />
      <Stack.Screen name="Fourth" component={Fourth} />
    </Stack.Navigator>
    </NavigationContainer>
  );
}
