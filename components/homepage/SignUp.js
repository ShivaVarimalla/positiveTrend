import React from 'react'
import {Text, View,StyleSheet,TextInput,TouchableOpacity,Dimensions,ScrollView} from 'react-native'
import { useState } from 'react'
import AwesomeAlert from 'react-native-awesome-alerts';
const windowWidth = Dimensions.get('window').width;
const Height = Dimensions.get('window').height;



const Signup = ({navigation})=>{
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [ReEnterPassword, setReEnterPassword] = useState('');
    const [email, setEmail] = useState('')
    const [Mobile, setMobile] = useState('');
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
if(Mobile.length!=10 || parseInt(Mobile)==NaN){
   setTitle('Some error occured')
   setMessage('Invalid mobile Number ')
   setCancelText('Ok')
   setErrorAlert(true)
   return;
    }
}
    return(
    <View style= {styles.RegisterContainer}>
        <ScrollView>
    <View style = {styles.Container}>
        <View style = {styles.Register}>
        <Text style= {styles.Text}>Registration Form</Text>
        <TextInput style = {styles.TextInput} placeholder = "userName"
        underlineColorAndroid={'transparent'} text={username} onChangeText={(text)=>{setUsername(text)}}/>
         <TextInput style = {styles.TextInput} placeholder = "password"
        underlineColorAndroid={'transparent'}  secureTextEntry = {true} text={Password} onChangeText={(text)=>{setPassword(text)}} />
         <TextInput style = {styles.TextInput} placeholder = "Re-Enterpassword"
        underlineColorAndroid={'transparent'}  secureTextEntry = {true} text={ReEnterPassword} onChangeText={(text)=>{setReEnterPassword(text)}} />
         <TextInput style = {styles.TextInput} placeholder = "email"
        underlineColorAndroid={'transparent'} text={email} onChangeText={(text)=>{setEmail(text)}}/>
         <TextInput style = {styles.TextInput} placeholder = "Mobile no"
        underlineColorAndroid={'transparent'} text={Mobile} onChangeText={(text)=>{setMobile(text)}}/>
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
        backgroundColor: '#c7c1c2',
        justifyContent: 'center',
        alignItems: 'center',
     
    },
 Container:{
     justifyContent: "center",
     backgroundColor: 'white',
     paddingLeft: 70,
     paddingRight: 70,
     height: (3*Height)/4,
     borderRadius: 10,
     shadowColor: 'blue',
     shadowOffset: { width: 2, height: 2 },
     shadowOpacity: 0.8,
     shadowRadius: 2,
     elevation: 2,
     marginTop: 50

 },
 Register: {
    alignSelf: 'stretch'
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
     alignSelf: 'stretch',
     height : 40,
     marginBottom: 30,
     color: 'black',
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