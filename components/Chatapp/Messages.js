import React from 'react'
import { StyleSheet,ScrollView,Dimensions,View} from 'react-native';
var height = Dimensions.get('window').height; //full
import Message from './Message'

const Messages = ({messages,name})=>(
<ScrollView style = {styles.messages}>
{messages.map((message, i) => <View key={i}><Message message={message} /></View>)}
</ScrollView>
)
const styles = StyleSheet.create({
messages:{
   height: height-(height*0.15),
   backgroundColor: 'white',

}
})
export default Messages;