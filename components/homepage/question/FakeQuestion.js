import React from 'react'
import {StyleSheet,Text} from 'react-native'

const FakeQuestion =(props)=>{
    return (
    <Text style={styles.heading}>{props.question}</Text>
    )
}
const styles = StyleSheet.create({
    heading:{
        fontSize: 29,
        margin: 15,
    }
})
export default FakeQuestion;