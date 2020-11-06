import React, { useState } from 'react'
import {Text, View,TouchableOpacity,StyleSheet,TextInput,Image,Dimensions,ScrollView} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';
import Trend from '../../Icons/Trend.png';
const Height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;


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
<View>
   <ScrollView>
     <View style= {styles.LoginRoom} >   
       <View style = {styles.Container}>
         <View style={{flexDirection:'row',justifyContent:'center'}}>
                  <Image
                     style={{height:200,width:200}}
                     source={Trend}
                  />
         </View>
         <View style = {styles.Login}>
            <Text style= {styles.Text}>Login</Text>
                  <TextInput style = {styles.TextInput} placeholder = "Username"  placeholderTextColor='white'
                   underlineColorAndroid={'transparent'} text={username} onChangeText={(text)=>{setUsername(text)}}/>
                   <TextInput style = {styles.TextInput} placeholder = "Password"  placeholderTextColor='white'
                   underlineColorAndroid={'transparent'}  secureTextEntry = {true} text={Password} onChangeText={(text)=>{setPassword(text)}} />
                   <TouchableOpacity onPress={()=>{loginHandler()}} style={styles.Log}><Text>LogIn</Text></TouchableOpacity>
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
        paddingTop: 40
     },

     Register: {
        color: 'coral',
        fontWeight: 'bold'
     },

     LoginRoom:{
        backgroundColor:'white',
        height:Height+75,
        flexDirection:'column',
        justifyContent:'space-around',
        alignItems:'center',
        overflow:'hidden'
       
     },

     Container:{
        paddingTop:10,
        justifyContent: "center",
        backgroundColor: '#0F2D57',
        paddingLeft: 70,
        paddingRight: 70,
        borderRadius: 10,
        height: (3*Height)/4.5,
        marginBottom: 70
     },

     Login: {
        alignSelf: 'flex-start'
     },

     TextInput: {
        alignSelf: 'stretch',
        height : 40,
        marginBottom: 30,
        color: 'white',
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
         
     },

     logo:{
         height:500,
         width: 300,
     }
})
export default Login;