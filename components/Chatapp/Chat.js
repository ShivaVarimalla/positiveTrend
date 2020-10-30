import React, { useState, useEffect } from "react";
import Messages from './Messages';
import Infobar from './Infobar';
import Input from './Input';
import { View,StyleSheet } from "react-native";
import Navigation from '../navigation/Navigation'


let socket;

const Chat = ({navigation}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{
    user:'shiva', text: 'Hello'
  },  
  {
    user:'amruth', text:'hello'},
  {
    user:'vamshi', text:'fhsdkjhfkjds'},
  {
    user:'reddy', text:'dfjsdkjf'}]);
  const [flag, setFlag]=useState(0);

  return (
    <View>
      <View style = {styles.container}>
          <Infobar room={room} />
            <Messages messages={messages}/>
          <Input/>
      </View>
      <Navigation navigation={navigation}/>
    </View>
  );
}
const styles = StyleSheet.create({
  container:{
    display : 'flex',
    flexDirection : 'column',
    justifyContent: 'center',
    alignItems: 'stretch',
  }
})



export default Chat;