import React from 'react';
import {StyleSheet,View,Text} from 'react-native';

const Message =({message})=>{
    return(
        <View style = {styles.Message}>
                <Text>{message.user}</Text>
                <Text>{message.text}</Text>
        </View>
    )}
const styles = StyleSheet.create({
    
})

export default Message
