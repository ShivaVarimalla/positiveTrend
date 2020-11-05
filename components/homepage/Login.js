import React, { useState } from 'react'
import {Text, View,TouchableOpacity,StyleSheet,TextInput} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';

const Login = ({navigation,changeLog})=>{
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [errorAlert, setErrorAlert]  = useState(false);
    const [message, setMessage]  = useState('');
    const [title, setTitle]  = useState('');
    const [cancelText, setCancelText]  = useState('Ok');

    const loginHandler =()=>{
      if(username<6){
         setTitle('Some error occured')
         setMessage('Invalid username')
         setErrorAlert(true)
         return;
      }
      if(Password<6){
         setTitle('Some error occured')
         setMessage('Invalid password!')
         setCancelText('Ok')
         setErrorAlert(true)
         return;
      }
    }
    return(
        <View style= {styles.LoginRoom}>
    <View style = {styles.Container}>
        <View style = {styles.Login}>
        <Text style= {styles.Text}>Login</Text>
        <TextInput style = {styles.TextInput} placeholder = "Username"
        underlineColorAndroid={'transparent'} text={username} onChangeText={(text)=>{setUsername(text)}}/>
         <TextInput style = {styles.TextInput} placeholder = "password"
        underlineColorAndroid={'transparent'}  secureTextEntry = {true} text={Password} onChangeText={(text)=>{setPassword(text)}} />
         <TouchableOpacity onPress={()=>{loginHandler()}} style={styles.Log}><Text>Login</Text></TouchableOpacity>
        <TouchableOpacity onPress = {()=>{navigation.navigate('SignUp')}}>
        <Text style={styles.Account}>Dont have an Account? <Text style={styles.Register}>Register</Text></Text></TouchableOpacity>
        </View>
    </View>
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
           //changeLog()
        }
     }}
     />
   </View>
    )}
const styles = StyleSheet.create({
    Account: {
        alignSelf: 'center',
        fontWeight : 'bold',
        color: 'black',
        paddingTop: 40
     },
     Register: {
        color: 'blue',
        fontWeight: 'bold'
     },
     LoginRoom:{
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
        borderRadius: 10,
        height:400,
     },
     Login: {
        alignSelf: 'stretch'
     },
     TextInput: {
        alignSelf: 'stretch',
        height : 40,
        marginBottom: 30,
        color: 'black',
        borderEndWidth: 1
     },
     Text: {
        fontSize: 24,
        color: 'coral',
        paddingBottom: 10,
        marginBottom: 40,
        borderBottomColor: 'red',
        borderBottomWidth: 1
     },
     Log:{
         alignSelf: 'flex-end',
         fontWeight: 'bold',
         backgroundColor: 'coral',
         padding: 10,
         borderRadius:3
         
     }
})
export default Login;