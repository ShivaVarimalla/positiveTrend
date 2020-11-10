import React from 'react'
import {View, Text,ScrollView,StyleSheet} from 'react-native'
import Graph from './Graph'

const GraphHome =({ mainScores,
    addictionScores,
    ocdScores,
    stressScores})=>{
    return(
        <View>
            <ScrollView >
                    <Text style = {styles.Main}>General-Quiz</Text>
                        <Graph scores = {mainScores} />
                    <Text style = {styles.Main}>Addiction-Quiz</Text>
                        <Graph scores = {addictionScores}/>
                    <Text style = {styles.Main} >Ocd-Quiz</Text>
                        <Graph scores = {ocdScores}/>
                    <Text  style = {styles.Main}>Stress-Quiz</Text>
                        <Graph scores = {stressScores}/>
            </ScrollView>
        </View>
    )
}
const styles = StyleSheet.create({
    Main:{
        fontSize:15,
        fontFamily:'sans-serif',
        textAlign: 'center',
        fontWeight: 'bold'
    }
  })
export default GraphHome