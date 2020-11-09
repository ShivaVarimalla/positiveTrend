import React, { useState } from 'react'
import {Text, View,TouchableOpacity,StyleSheet,TextInput,Image,Dimensions,ScrollView} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import Positive from '../../Icons/Positive.png';
const Height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios'
import qs from 'qs'


const Login = ({navigation,changeLog})=>{
    const [username, setUsername] = useState('');
    const [Password, setPassword] = useState('');
    const [errorAlert, setErrorAlert]  = useState(false);
    const [message, setMessage]  = useState('');
    const [title, setTitle]  = useState('');
    const [cancelText, setCancelText]  = useState('Ok');

    const loginHandler =()=>{
      if(username.length<6){
         setTitle('Some error occured')
         setMessage('Invalid username')
         setErrorAlert(true)
         return;
      }
      if(Password.length<6){
         setTitle('Some error occured')
         setMessage('Invalid password!')
         setCancelText('Ok')
         setErrorAlert(true)
         return;
      }
      var data = qs.stringify({
         'username': username,
        'password': Password 
        });
        var config = {
          method: 'post',
          url: 'https://positive-trend.herokuapp.com/user/login',
          headers: { },
          data : data
        };
        
        axios(config)
        .then(async function (response) {
          if(response.status == 200){
            await AsyncStorage.setItem('usertoken', response.data.token)
            changeLog()
          }
        })
        .catch(function (error) {
          console.log(error);
        });
    }
    return(
<View>
   <ScrollView>
     <View style= {styles.LoginRoom} >   
       <View style = {styles.Container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
                  <Image
                     style={{height:200,width:200}}
                     source={Positive}
                  />
         </View>
         <View style = {styles.Login}>
            <Text style= {styles.Text}>Login</Text>
                  <TextInput style = {styles.TextInput} placeholder = "Username"  placeholderTextColor='white'
                   underlineColorAndroid={'transparent'} text={username} onChangeText={(text)=>{setUsername(text)}}/>
                   <TextInput style = {styles.TextInput} placeholder = "Password"  placeholderTextColor='white'
                   underlineColorAndroid={'transparent'}  secureTextEntry = {true} text={Password} onChangeText={(text)=>{setPassword(text)}} />
                   <TouchableOpacity onPress={()=>{loginHandler()}} style={styles.Log}><Text>Login</Text></TouchableOpacity>
                   <TouchableOpacity onPress = {()=>{navigation.navigate('SignUp')}}>
            <Text style={styles.Account}>Dont have an Account? <Text style={styles.Register}>Register</Text></Text></TouchableOpacity>
        </View>
       </View>
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
          color: 'white',
          paddingTop: 20,
          paddingBottom:20
       },
       Register: {
          color: 'coral',
          fontWeight: 'bold'
       },
       LoginRoom:{
          backgroundColor:'white',
          height:Height,
          justifyContent:'center',
          alignItems:'center'
       },
       Container:{
          paddingTop:10,
          justifyContent: "center",
          backgroundColor: '#0F2D57',
          paddingLeft: 80,
          paddingRight: 80,
          borderRadius: 10,
          width:width-50,
          alignContent: 'center'
       },
       Login: {
          alignSelf: 'center'
       },
       TextInput: {
          alignSelf: 'stretch',
          height : 40,
          marginBottom: 30,
          color: 'white',
          borderEndWidth: 1,
         
       
       },
       Text: {
          fontSize: 24,
          color: 'coral',
          paddingBottom: 10,
          marginBottom: 40,
          borderBottomColor: 'red',
          borderBottomWidth: 1,
       
       },
       Log:{
           alignSelf: 'flex-end',
           fontWeight: 'bold',
           backgroundColor: 'coral',
           padding: 10,
           borderRadius:3,
       },
       logo:{
           height:500,
           width: 300,
       }
  })
export default Login;