import React from 'react'
import { View,Text,StyleSheet,TouchableOpacity,Dimensions} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Emergency from './Emergency'
const Height = Dimensions.get('window').height;



const HomeStack = createStackNavigator();

function Home({navigation}) {
return (
  <View style={styles.con}>
     <View style = {styles.container}>
     <Emergency/>
     <View style={styles.View}>
     <Text style={styles.header}>Take the Below Test for understanding yourself better</Text>
     </View>
          <TouchableOpacity style={styles.questionbutton}
            title="General Questionnaire"
            onPress={() =>  navigation.navigate('Quiz-Main')}><Text style = {styles.Text}>General Questionnaire</Text>
          </TouchableOpacity>
            <TouchableOpacity style={styles.questionbutton}
            title="Addiction Questionnaire"
            onPress={() =>  navigation.navigate('Quiz-Addiction')}><Text style = {styles.Text}>Addiction Questionnaire</Text>
              </TouchableOpacity>
          <TouchableOpacity style={styles.questionbutton}
            title="OCD Questionnaire"
            onPress={() =>  navigation.navigate('Quiz-Ocd')}><Text style = {styles.Text}>OCD Questionnaire</Text>
              </TouchableOpacity>
          <TouchableOpacity style={styles.questionbutton}
            title="Stress Questionnaire"
            onPress={() =>  navigation.navigate('Quiz-Stress')}><Text style = {styles.Text}>Stress Questionnaire</Text>
              </TouchableOpacity> 
     </View>
     </View>
);
} 
const styles = StyleSheet.create({
  questionbutton:{
    flexDirection: 'row',
    backgroundColor:'#55BF98',
    padding: 10,
    margin : 10,
    justifyContent: 'center',
    elevation: 4,
    borderRadius: 6
   },
   container: {
     backgroundColor: 'white',
     alignContent: 'center',
     flex: 1,

   },
   Text:{
    fontSize: 18,
    fontFamily: 'monospace'
   },
   View:{
     alignSelf: 'center',
     padding: 10,
     paddingVertical: 30, 
     borderRadius: 5,
     backgroundColor: '#f4f4f4',
     marginVertical: 30,
     elevation: 4
   },
   con:{
     backgroundColor: 'white',
     flex: 1
   },
   header:{
     fontWeight: 'bold',
     fontSize: 16
   }
})
export default Home;

