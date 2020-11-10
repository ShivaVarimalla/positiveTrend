import React from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native'
import Fakeanswer from './answer/Fakeanswer'
import FakeQuestion from './question/FakeQuestion'

class FakeQuizAddiction extends React.Component{
    state = {
        questions: {
            1: 'How often do you consciously think about a habit',
            2: 'How frequently have you spent time on habit in the last month',
            3: 'Do you experience the need to constantly divert towards your habit?',
            4:  'How hard would it be to avoid the habit',
            5:  'Does your habit put you in danger?',
            6:  'Do you experience withdrawl if you havent performed your habit?',
            7:  'Do you compartively indulge more in your habits than others',
            8:  'Has you habit afftected your work/home/social life?',
        },
        answers: {
            1: {
                1: 'Often',
                2: 'Mostly',
                3: 'Sometimes',
                4: 'Never'
            },
            2: {
               1: 'Often',
               2: 'Mostly',
               3: 'Sometimes',
               4: 'Never'
            },
            3: {
                1: 'Often',
                2: 'Mostly',
                3: 'Sometimes',
                4: 'Never'
            },
            4: {
                1: 'Very Hard',
                2: 'Hard',
                3: 'Not hard',
                4: 'under my control'
           },
           5: {
            1: 'Often',
            2: 'Mostly',
            3: 'Sometimes',
            4: 'Never'
           },
           6: {
              1: 'Often',
              2: 'Ocasionally',
              3: 'Rare',
              4: 'Never'
           },
           7: {
            1: 'By great margin',
            2: 'By small margin',
            3: 'Equally',
            4: 'Fewer'
         },
           8: {
            1: 'Great extent',
            2: 'Affected',
            3: 'Small Extent',
            4: 'No change'
         }
        },
        
        correctAnswer: 0,
        clickedAnswer: 0,
        step: 1,
        score: 0
    }

    checkAnswer = answer =>{
        const {correctAnswer, step, score} = this.state;
        if(answer == 1){
            this.setState({
                score : score + 1,
                clickedAnswer: answer
            });
        }
        else if(answer == 2){
            this.setState({
                score: score + 0.5,
                clickedAnswer: answer
            });
        }
        else{
            this.setState({
                correctAnswer: 0,
                clickedAnswer: answer
            });
        }
        if(Object.keys(this.state.questions).length==this.state.step){
            var d = new Date();
            var n = d.getDay()
            let arr = [0,0,0,0,0,0,0]
            arr[n] = score
            this.props.changeAddictionScores(arr)
        }
    }

    nextStep =(step)=>{
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        })
    }
  render(){
    function displayJsxMessage(){
    if (score > 4) {
        return <Text> We had detected a high addiction.We advice you to talk to your family to work things out,understand the reason of re-occurance, consult our therpaist for more procedure</Text>;
    } else {
        return <Text>  We have detected moderate addiction.We advice you to try spending more time away from your habit,find productive work,try to keep up your intergrity</Text>;
    }
}
      let { questions, answers, correctAnswer, clickedAnswer, step, score} = this.state;
    return(
        <View style ={styles.main}>
        <View style ={styles.Quiz}>
            {step <= Object.keys(questions).length ?
            (<View>
                <FakeQuestion question={questions[step]}/>
                <Fakeanswer 
                answer={answers[step]}
                step={step}
                checkAnswer={this.checkAnswer}
                correctAnswer={correctAnswer}
                clickedAnswer={clickedAnswer}
                />
                <TouchableOpacity style={styles.Button}
                title = 'next'
                disabled= {
                    clickedAnswer && Object.keys(questions).length >= step
                    ? false : true
                }
                onPress={() => this.nextStep(step)}
                ><Text style={styles.Text}>Next</Text></TouchableOpacity>
                </View>) : (
                    <View style = {styles.complete}> 
                        <Text>you have completed the qustionnaire</Text>
                        <Text>{ displayJsxMessage()} </Text>
                <Text>Check out graphs tab</Text>
                    </View>
                
                )}
                
        </View>
    </View>
    )
    }
}
const styles = StyleSheet.create({
    Quiz:{
        backgroundColor: 'white',
        flex: 1
    },
    main:{
        flex: 1
    }, 
    Button : {
        flexDirection: 'row',
        backgroundColor:'#55BF98',
        padding: 10,
        margin : 10,
        justifyContent: 'center',
        elevation: 4,
        borderRadius: 6,
        color: 'black'
    },
    Text:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    complete:{
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 5,
        backgroundColor: '#f4f4f4',
        marginTop: 100,
        margin: 10,
        padding: 20,
        elevation: 5,

    }
    
})
export default FakeQuizAddiction;