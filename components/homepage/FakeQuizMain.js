import React from 'react'
import {View,Text,Button} from 'react-native'
import Fakeanswer from './answer/Fakeanswer'
import FakeQuestion from './question/FakeQuestion'

class FakeQuizMain extends React.Component{
    state = {
        questions: {
            1: 'How often do you socalize?',
            2: 'How do you like your environment?',
            3: 'How happy are you',
            4:  'Do you “blank out” or have trouble concentrating',
            5:  'How often do you feel restless or fidgety?',
            6:  'Do you have difficulty unwinding and relaxing when you have time to yourself'
        },
        answers: {
            1: {
                1: 'Often',
                2: 'Ocasionally',
                3: 'Rare',
                4: 'Never'
            },
            2: {
               1: 'Love it',
               2: 'Its Fine',
               3: 'Not really',
               4: 'Dislike it'
            },
            3: {
               1: 'Very Happy',
               2: 'Content',
               3: 'Not really',
               4: 'Not happy'
            },
            4: {
               4: 'Often',
               3: 'Ocasionally',
               2: 'Rare',
               1: 'Never'
           },
           5: {
              4: 'Often',
              3: 'Sometimes',
              2: 'Rare',
              1: 'Never'
           },
           6: {
              1: 'Often',
              2: 'Ocasionally',
              3: 'Rare',
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
            this.props.changeMainScores(arr)
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
export default FakeQuizMain