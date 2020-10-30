import React from 'react'
import { View,Text} from 'react-native'
import Navigation from '../navigation/Navigation'

const Home =({navigation})=>{
    return(
    <View>
        <View>
            <Text>Home</Text>
        </View>
    <View><Navigation navigation={navigation}/></View>
    </View>
    )}
export default Home;