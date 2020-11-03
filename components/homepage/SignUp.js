import React, { Component } from 'react'
import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'

class SignUp extends Component {
   state = {
      email: '',
      password: ''
   }
   handleEmail = (text) => {+
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
             <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}>Registration form</Text>
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
            
<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "ReEnterPassword"
               secureTextEntry = {true}
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handlePassword}/>            

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Email Id"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>

<TextInput style = {styles.input}
               underlineColorAndroid = "transparent"
               placeholder = "Phone Number"
               placeholderTextColor = "black"
               autoCapitalize = "none"
               onChangeText = {this.handleEmail}/>
            
            
            <TouchableOpacity
               style = {styles.submitButton}
               onPress = {
                  () => this.login(this.state.email, this.state.password)
               }>
               <Text style = {styles.submitButtonText}> SignUp </Text>
            </TouchableOpacity>

            <TouchableOpacity
             style = {styles.submitButton}
             onPress={
                 ()=>{ this.props.navigation.replace('Login')
             }}
             >
            <Text style = {styles.submitButtonText}> Login </Text>
            </TouchableOpacity>
         </View>
      )
   }
}
export default SignUp

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
   }
})