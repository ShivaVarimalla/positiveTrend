import React from 'react'
import {View, Text,ScrollView} from 'react-native'
import Graph from './Graph'

const GraphHome =({ mainScores,
    addictionScores,
    ocdScores,
    stressScores})=>{
    return(
        <View>
            <ScrollView>
                    <Text>General-Quiz</Text>
                        <Graph scores = {mainScores} />
                    <Text>Addiction-Quiz</Text>
                        <Graph scores = {addictionScores}/>
                    <Text>Stress-Quiz</Text>
                        <Graph scores = {ocdScores}/>
                    <Text>Ocd-Quiz</Text>
                        <Graph scores = {stressScores}/>
            </ScrollView>
        </View>
    )
}
export default GraphHome