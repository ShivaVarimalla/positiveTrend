import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'


class Login extends Component {
    constructor(props) {
        super(props);
        this. state = {
            email: '',
            password: ''
         }
    }
  
   handleEmail = (text) => {
      this.setState({ email: text })
   }
   handlePassword = (text) => {
      this.setState({ password: text })
   }
   login = (email, pass) => {
      alert('email: ' + email + ' password: ' + pass)
   }
   render() {
      return (
         <View style = {styles.container}>
             {/* <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Login Form</Text> */}
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Enter User Name"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            <TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Password"
               secureTextEntry = {true}
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () =>{ 
                    if(this.state.email === "capstone" && this.state.password ==='capstone'){
                  this.props.navigation.replace('Home')}
                  else{
                      alert("Check")
                  }
                }
               }>
               <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
            <TouchableOpacity
             onPress={
                 ()=>{ this.props.navigation.navigate('SignUp')
              
             }}
             >
            <Text style={styles.Text}>Dont have an Account? <Text style={styles.Register}>Register</Text></Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default Login

const styles = StyleSheet.create({
   container: {
      paddingTop: 23
   },
   input: {
      borderRadius: 10,
      margin: 15,
      height: 40,
      borderColor: 'coral',
      borderWidth: 1,
      textAlign:'center'
   },
   submitButton: {
      borderRadius: 10,
      backgroundColor: 'coral',
      padding: 10,
      margin: 15,
      height: 40,
   },
   submitButtonText:{
      color: 'white',
      textAlign:'center'
   },
   Text: {
      alignSelf: 'center',
      fontWeight : 'bold'
   },
   Register: {
      color: 'blue',
      fontWeight: 'bold'
   }
})