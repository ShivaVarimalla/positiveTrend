import React from 'react'
//import closeIcon from '../../Icons/closeIcon.png';
import images from '../../Icons/images.png';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
//var height = Dimensions.get('window').height; //full
import { FontAwesome } from '@expo/vector-icons';

const InfoBar = ({room})=>(
    <View style = {styles.InfoBar}>
        <View style={styles.leftInnerContainer}>
            
        <FontAwesome name="group" size={24} color="black" />
            
                <Text>Soal</Text>
        </View>
       
    </View>
)

const styles = StyleSheet.create({

    InfoBar : {
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        borderRadius: 4,
        height: 50,
        marginTop: 40
      },
    leftInnerContainer :{
        width: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
        marginLeft: 5,
        color: 'white',
      }
})
export default InfoBar;