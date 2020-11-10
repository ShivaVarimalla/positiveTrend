import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const InfoBar = ({room})=>(
    <View style = {styles.InfoBar}>
        <View style={styles.leftInnerContainer}>
               <FontAwesome name="group" size={24} color="#cb9bf2" />
                <Text style={styles.chathead}>Chat</Text>
        </View>
       
    </View>
)

const styles = StyleSheet.create({
    chathead:{
  
        fontFamily:'serif',
        fontWeight: 'bold',
        color: '#3391a6'
    },
    InfoBar : {
        alignSelf: 'stretch',
        flexDirection: 'row',
        justifyContent: 'space-between',
        backgroundColor: '#dae4ed',
        borderRadius: 5,
        height: 50,
        marginTop: 40,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center'      },
    leftInnerContainer :{
        width: 50,
        flexDirection: 'row',
        marginLeft: 1,
        color: 'white',
      }
})
export default InfoBar;