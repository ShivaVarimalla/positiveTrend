import React from 'react';
import {StyleSheet,TextInput,TouchableOpacity,View,Text,Dimensions} from 'react-native';
var width = Dimensions.get('window').width; //full width
var height = Dimensions.get('window').height; //full

const Input = ({})=>(
    <View style={styles.view}>
    <TextInput style= {styles.Input}>
</TextInput>
<TouchableOpacity style={styles.button}><Text style={styles.text}>Send</Text></TouchableOpacity>
</View>
)
const styles = StyleSheet.create({
    view:{
        height : height*0.1,
        width : width,
        flexDirection: 'row',
        justifyContent: 'space-between',
        borderRadius: 4,
    },
Input:{
    width : width-(width/7),
    alignSelf: 'stretch',
    backgroundColor: 'gray',
    borderRadius: 4,
    height: 50
},
button:{
    width: (width/7),
    backgroundColor:'pink',
    flexDirection:"row",
    justifyContent:"center",
    height: 50,
    alignItems: 'center',
    borderRadius: 4
}
})
export default Input;