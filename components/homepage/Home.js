import React from 'react'
import { View,Text,StyleSheet,Button} from 'react-native'
import { createStackNavigator } from '@react-navigation/stack';
import Emergency from './Emergency'



const HomeStack = createStackNavigator();

function Home({navigation}) {
return (
     <View>
     <Text>Home</Text>
     <Emergency/>
     <Button
        title="General Questionnaire"
        onPress={() =>  navigation.navigate('Quiz-Main')}
      />
        <Button
        title="Stress Questionnaire"
        onPress={() =>  navigation.navigate('Quiz-Addiction')}
      />
        <Button
        title="OCD Questionnaire"
        onPress={() =>  navigation.navigate('Quiz-Ocd')}
      />
      <Button
        title="OCD Questionnaire"
        onPress={() =>  navigation.navigate('Quiz-Stress')}
      /> 
     </View>
);
} 
export default Home;

