import React from 'react'
import closeIcon from '../../Icons/closeIcon.png';
import onlineIcon from '../../Icons/onlineIcon.png';
import { StyleSheet, Text, View,Image,Dimensions } from 'react-native';
var height = Dimensions.get('window').height; //full

const InfoBar = ({room})=>(
    <View style = {styles.InfoBar}>
        <View style={styles.leftInnerContainer}>
            <Image 
        source={onlineIcon}
             />
                <Text>{room}</Text>
        </View>
        <View style={styles.rightInnerContainer}>
            <Image source={closeIcon} alt="close"/>
        </View>
    </View>
)

const styles = StyleSheet.create({

    InfoBar : {
        height: height*0.1,
        alignSelf: 'stretch',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: 'green',
        borderRadius: 4,
        height: 50
      },
    rightInnerContainer:{
        justifyContent: 'flex-end',
        marginRight: 5,
    },
    leftInnerContainer :{
        width: 50,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: 'space-around',
        marginLeft: 5,
        color: 'white',
      },
})
export default InfoBar;