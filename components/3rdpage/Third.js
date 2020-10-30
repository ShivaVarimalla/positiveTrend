import React from 'react'
import { View,Text} from 'react-native'
import Navigation from '../navigation/Navigation'

const Third =({navigation})=>(
    <View>
         <View>
            <Text>Third</Text>
        </View>
    <View><Navigation navigation={navigation}/></View>
    </View>
)
export default Third;