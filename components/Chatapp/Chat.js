
import React, { useState, useEffect } from "react";

import Messages from './Messages';
import Infobar from './Infobar';
import Input from './Input';
import { View,StyleSheet } from "react-native";


let socket;

const Chat = ({ }) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([{
    user:'shiva', text: 'Hello'
  },  
  {
user:'amruth', text:'hello'}]);
  const [flag, setFlag]=useState(0);

  return (
    
    <View>
       
      <View style = {styles.container}>
          <Infobar room={room} />
          <Messages />
        
          <Input/>
      </View>
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