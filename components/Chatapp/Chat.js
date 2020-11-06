import React, { useState, useCallback, useEffect,Fragment } from 'react'
import { View } from 'react-native';
import { GiftedChat,Bubble } from 'react-native-gifted-chat'
import InfoBar from './InfoBar'
 
export default function Chat() {
  const [messages, setMessages] = useState([]);
 
  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello shiva',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'shiva',
          avatar: 'https://placeimg.com/140/140/any',
        },
      },
    ])
  }, [])
 
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages))
  }, [])
 
  return (
  <Fragment>
      <InfoBar/>
    <GiftedChat
      messages={messages}
      onSend={messages => onSend(messages)}
      user={{
        _id: 1,
      }}
      renderBubble={renderBubble}
    />
  </Fragment>
  )
    }

function renderBubble(props) {
  return (
    // Step 3: return the component
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
  );
}
