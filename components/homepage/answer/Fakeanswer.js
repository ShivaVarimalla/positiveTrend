import React, { Fragment } from 'react'
import {TouchableOpacity,View,StyleSheet,Text} from 'react-native'


const Fakeanswer =(props)=>{
    let answers = Object.keys(props.answer)
    .map((qAnswer, i)=>(
        <TouchableOpacity style={styles.button} onPress={()=> props.checkAnswer(qAnswer)}
        key={i}><Text>
            {props.answer[qAnswer]}
            </Text>
        </TouchableOpacity>
    ))
    return(
        <View style = {styles.answers}>
                {answers}
        </View>
    )
}
const styles = StyleSheet.create({
    answers:{

    },
    button:{
        padding: 10,
        margin: 5,
        backgroundColor: '#f4f4f4',
        borderRadius: 6,
        elevation: 5
    }
})
export default Fakeanswer;