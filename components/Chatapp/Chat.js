import React, { useState, useCallback, useEffect,Fragment } from 'react'
import { View,Text } from 'react-native';
import { GiftedChat,Bubble } from 'react-native-gifted-chat'
import InfoBar from './InfoBar'
import io from "socket.io-client";
import axios from 'axios'
import AsyncStorage from '@react-native-async-storage/async-storage';
 
let socket 
const ENDPOINT = 'https://positive-trend.herokuapp.com/';
socket = io(ENDPOINT)

export default function Chat() {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [users, setUsers] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);
  const [flag, setFlag]=useState(0);
 
  

  let user;

  useEffect(() => {
   (async()=>{
    let token = await AsyncStorage.getItem('usertoken')
    console.log(token)
    //token = JSON.parse(token)
    var config = {
      method: 'get',
      url: 'https://positive-trend.herokuapp.com/user/profile',
      headers: { 
        'user-token': token
      }
    };
    
    axios(config)
    .then(function (response) {
      console.log(response.data)
      if(response.status == 200){
        user = response.data.body
        let username = user.username
        socket.emit('join', { name:username, room :'soal' }, (error) => {
          if(error) { 
            setFlag(1);
            alert(error);
          }
        });
      }
    })
    .catch(function (error) {
      console.log(error);
    });
   })()
  }, [ENDPOINT]);
  
  useEffect(() => {
    socket.on('message', message => {
     if(message){
      let currentMessage = {
        _id : message.id,
        text : message.text,
        createdAt: new Date(),
        user: {
          _id: message._id,
          name: message.user,
          avatar: 'https://placeimg.com/140/140/any',
        },
      }
      console.log(messages)
      setMessages(previousMessages => [currentMessage, ...previousMessages ])
      console.log(messages)
    }
     });
}, []);

  /*const onSend = () => {
    if(message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  }*/
 
  const onSend = useCallback((messages = []) => {
    console.log(messages)
    socket.emit('sendMessage', messages[0].text, () => setMessage(''));
  }, [])
 
  return (
  <Fragment>
      <InfoBar/>
    <GiftedChat
      messages={messages}
      renderUsernameOnMessage={true}
      onSend={onSend}
      user={{
        _id: socket.id,
      }}
      renderBubble={renderBubble}
    />
  </Fragment>
  )
    }

function renderBubble(props) {
  return (
    <View>
        <Text>{props.currentMessage.user.name}</Text>
    <Bubble
      {...props}
      wrapperStyle={{
        left: {
          // Here is the color change
          backgroundColor: '#8caebd'
        },
        right: {
          // Here is the color change
          backgroundColor: '#85809c'
        }
      }}
      textStyle={{
        right: {
          color: '#fff'
        }
      }}
    />
    </View>
  );
}
