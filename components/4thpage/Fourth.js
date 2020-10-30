import React from 'react'
import { View,Text} from 'react-native'
import Navigation from '../navigation/Navigation'

const Fourth =({navigation})=>{
    return (
    <View>
         <View>
            <Text>Fourth</Text>
        </View>
    <View><Navigation navigation={navigation}/></View>
    </View>
    )}
export default Fourth;