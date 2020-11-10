import React from 'react'
import { StyleSheet, Text, View,Image,Dimensions,TouchableOpacity } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';


const InfoBar = ({room,changeDrawer})=>(
    <View style = {styles.InfoBar}>
        <TouchableOpacity onPress={()=>{changeDrawer()}} style={styles.leftInnerContainer}>
               <FontAwesome name="group" size={24} color="black" />
                <Text>Soal</Text>
        </TouchableOpacity> 
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
        backgroundColor: '#55BF98',
        borderRadius: 4,
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