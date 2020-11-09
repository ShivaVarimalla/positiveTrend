import React from 'react'
import {Text, View,StyleSheet,TextInput,TouchableOpacity,Dimensions,ScrollView,Image} from 'react-native'
import { useState } from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';
const Width = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;
import Positive from '../../Icons/Positive.png';
import axios from 'axios'
import qs from 'qs';



const Signup = ({navigation})=>{
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [ReEnterPassword, setReEnterPassword] = useState('');
    const [email, setEmail] = useState('')
    const [errorAlert, setErrorAlert]  = useState(false);
    const [message, setMessage]  = useState('');
    const [title, setTitle]  = useState('');
    const [cancelText, setCancelText]  = useState('Ok');
    const RegisterHandler=()=>{
        function validateEmail(Email) {
            const re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            return re.test(String(Email).toLowerCase());
        }
        
        if(username.length<6){
            setTitle('Some error occured')
            setMessage('Invalid Owner name')
           setErrorAlert(true)
           return;
        }
       
        
        if(Password.length<6){
            setTitle('Some error occured')
            setMessage('Password should be greaterthan 6')
            setErrorAlert(true)
            return;
    }
    if(Password!=ReEnterPassword){
        setTitle('Some error occured')
        setMessage('Password Do not match')
        setErrorAlert(true)
        return;
}
if(!validateEmail(email)){
   setTitle('Some error occured')
   setMessage('Invalid email ')
   setErrorAlert(true)
   return;
}

var data = qs.stringify({
 'username': username,
'email': email,
'password': Password
});
var config = {
  method: 'post',
  url: 'https://positive-trend.herokuapp.com/user/register',
  headers: { },
  data : data
};

axios(config)
.then(function (response) {
 if(response.status == 200){
    setTitle('Success')
    setMessage('Successfully created your account Please Login! ')
    setCancelText('Login')
    setErrorAlert(true)
 }
})
.catch(function (error) {
  console.log(error);
});

}
    return(
 <View style= {styles.RegisterContainer}>
    <ScrollView>
         <View style = {styles.Container}>
            <View style={{flexDirection:'row',justifyContent:'center'}}>
                  <Image
                     style={{height:200,width:200}}
                     source={Positive}
                  />
            </View>
        <View style = {styles.Register}>
                <Text style= {styles.Text}>Registration Form</Text>
                <TextInput style = {styles.TextInput} placeholder = "UserName" placeholderTextColor='white'
                    underlineColorAndroid={'transparent'} text={username} onChangeText={(text)=>{setUsername(text)}}/>
                <TextInput style = {styles.TextInput} placeholder = "Email" placeholderTextColor='white'
                    underlineColorAndroid={'transparent'} text={email} onChangeText={(text)=>{setEmail(text)}}/>
                <TextInput style = {styles.TextInput} placeholder = "Password" placeholderTextColor='white'
                    underlineColorAndroid={'transparent'}  secureTextEntry = {true} text={Password} onChangeText={(text)=>{setPassword(text)}} />
                <TextInput style = {styles.TextInput} placeholder = "Re-Enter Password" placeholderTextColor='white'
                    underlineColorAndroid={'transparent'}  secureTextEntry = {true} text={ReEnterPassword} onChangeText={(text)=>{setReEnterPassword(text)}} />
               
        </View>
        <TouchableOpacity onPress={
            RegisterHandler
        } style={styles.Reg}><Text>Register</Text></TouchableOpacity>
       </View>
    </ScrollView>
    <AwesomeAlert
          show={errorAlert}
          showProgress={false}
          title={title}
          message={message}
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          cancelText={cancelText}
          onCancelPressed={() => {
              if(cancelText == 'Ok'){
                setErrorAlert(false)
                return
              }
                 else{
                  setErrorAlert(false)
                    navigation.navigate('Login')
                     }
          }}
        />
    </View>
    )}
    const styles = StyleSheet.create({
        RegisterContainer:{
            display: 'flex',
            flex: 1,
            backgroundColor: 'white',
            justifyContent: 'center',
            alignItems: 'center',
        },
     Container:{
         justifyContent: "center",
         backgroundColor: '#0F2D57',
         paddingLeft: 80,
         paddingRight: 80,
         paddingTop:10,
         paddingBottom:10,
         borderRadius: 10,
         shadowColor: 'blue',
         shadowOffset: { width: 2, height: 2 },
         shadowOpacity: 0.8,
         shadowRadius: 2,
         elevation: 2
     },
     Text:{
         fontSize: 24,
         color: 'coral',
         paddingBottom: 10,
         marginBottom: 40,
         borderBottomColor: 'red',
         borderBottomWidth: 1
     },
     TextInput : {
         height : 40,
         marginBottom: 30,
         color: 'white',
         borderBottomColor: 'red',
         borderEndWidth: 1
     },
     Reg:{
         alignSelf: 'flex-end',
         backgroundColor: 'coral',
         padding: 10,
         borderRadius:3
     }
    })
export default Signup;