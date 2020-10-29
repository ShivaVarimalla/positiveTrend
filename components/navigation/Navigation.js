import React from 'react'
import {TouchableOpacity,View,Text, StyleSheet} from 'react-native'

const Navigation = ({navigation})=>{
    return(
<View style={styles.Bottomlist}>
<TouchableOpacity onPress={() => navigation.navigate("Home")}><Text>Home</Text></TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("Chat")}><Text>Chat</Text></TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("Third")}><Text>Third</Text></TouchableOpacity>
<TouchableOpacity onPress={() => navigation.navigate("Fourth")}><Text>Fourth</Text></TouchableOpacity>
</View>
    )}
    const styles = StyleSheet.create({
        
    })
export default Navigation;