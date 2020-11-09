import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Login from '../Auth/Login.js'
import SignUp from '../Auth/SignUp.js';

const Screen = ({changeLog})=>{
    const HomeStack = createStackNavigator();
    return(
        <NavigationContainer>
            <HomeStack.Navigator initialRouteName = "Login">
                <HomeStack.Screen name="Login">
                    {props => <Login {...props} changeLog={changeLog}/>}
                </HomeStack.Screen>
                    <HomeStack.Screen name="SignUp" component={SignUp} />
                
            </HomeStack.Navigator>
        </NavigationContainer>
    )
}
export default Screen;