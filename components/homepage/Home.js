import React from 'react'
import { View,Text,StyleSheet,Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Emergency from './Emergency'



const HomeStack = createStackNavigator();

function Home({navigation}) {
return (
     <View>
     <Emergency/>
     <Button style={styles.questionbutton}
        title="General Questionnaire"
        onPress={() =>  navigation.navigate('Quiz-Main')}
      />
        <Button style={styles.questionbutton}
        title="Addiction Questionnaire"
        onPress={() =>  navigation.navigate('Quiz-Addiction')}
      />
        <Button style={styles.questionbutton}
        title="OCD Questionnaire"
        onPress={() =>  navigation.navigate('Quiz-Ocd')}
      />
      <Button style={styles.questionbutton}
        title="Stress Questionnaire"
        onPress={() =>  navigation.navigate('Quiz-Stress')}
      /> 
     </View>
);
} 
const styles = StyleSheet.create({
  Main:{
    alignSelf: 'flex-end',
    marginRight:20
  },
  questionbutton:{
    color: '#c23033',
    fontWeight: "bold",
    position:'relative',
    flexDirection:'row',
    borderWidth:1,
    borderColor:'red',
    paddingBottom:10,
    paddingTop:10,
    paddingLeft: 10,
    backgroundColor:'#fc9a9f'
   }
})
export default Home;

