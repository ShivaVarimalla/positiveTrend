import React from 'react'
import { View,Text,StyleSheet} from 'react-native'

const Home =({})=>{
    return(
    <View style = {styles.container}>
        <View style = {styles.content}>
            <Text>Home</Text>
        </View>
    </View>
    )}
    const styles = StyleSheet.create({
        container : {
            display : 'flex',
            flexDirection: 'column'
        }
    })

export default Home;