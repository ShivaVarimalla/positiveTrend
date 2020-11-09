import React from 'react'
import {View,Text,Button} from 'react-native'
import Fakeanswer from './answer/Fakeanswer'
import FakeQuestion from './question/FakeQuestion'

class FakeQuizOcd extends React.Component{
    state = {
        questions: {
            1: 'Do you ever experience repetitive thoughts that cause you anxiety',
            2: 'Do you ever fear germs or engage in excessive cleaning?',
            3: 'Do you experience the need to constantly check on something or arrange things?',
            4:  'Do you experience intrusive thoughts that are aggressive',
            5:  'Do you struggle to control repetative thoughts or compulsive behaviors?',
            6:  'Do you spend at least one hour a day thinking repetative thoughts ',
            7:  'Are work life, home life, or relationships affected by your repetative thinking ',
          
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
                1: 'Often',
                2: 'Mostly',
                3: 'Sometimes',
                4: 'Never'
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
            1: 'Often',
            2: 'Mostly',
            3: 'Sometimes',
            4: 'Never'
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
            this.props.changeOcdScores(arr)
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
      let { questions, answers, correctAnswer, clickedAnswer, step, score} = this.state;
    return(
        <View>
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
                <Button
                title = 'next'
                disabled= {
                    clickedAnswer && Object.keys(questions).length >= step
                    ? false : true
                }
                onPress={() => this.nextStep(step)}
                />
                </View>) : (
                    <View>
                        <Text>you have completed the qustionnaire</Text>
                <Text>Your score is: {score} of {Object.keys(questions).length}</Text>
                <Text>Check out graphs tab</Text>
                    </View>
                
                )}
                
        </View>
    )
    }
}
export default FakeQuizOcd;