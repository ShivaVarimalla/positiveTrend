import React, { Fragment } from 'react'
import {TouchableOpacity,View,Text} from 'react-native'


const Fakeanswer =(props)=>{
    let answers = Object.keys(props.answer)
    .map((qAnswer, i)=>(
        <TouchableOpacity onPress={()=> props.checkAnswer(qAnswer)}
        key={i}><Text>
            {props.answer[qAnswer]}
            </Text>
        </TouchableOpacity>
    ))
    return(
        <Fragment>
                {answers}
        </Fragment>
    )
}
export default Fakeanswer;