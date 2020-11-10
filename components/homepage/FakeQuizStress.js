import React from 'react'
import {View,Text,Button,TouchableOpacity,StyleSheet} from 'react-native'
import Fakeanswer from './answer/Fakeanswer'
import FakeQuestion from './question/FakeQuestion'

class FakeQuizStress extends React.Component{
    state = {
        questions: {
            1: 'How is your quality of sleep?',
            2: 'How often do you feel positive about your life?',
            3: 'Been upset because of something that happened unexpectedly?',
            4:  'Felt that you were unable to control important things in your life',
            5:  'Felt nervous and stressed?',
            6:  'Felt confident about your ability to handle your personal problems',
            7:  'Felt that things were going your way',
            8:  'Been able to control irritations in your life?',
            9:  'Been angered because of things that happened that were out of your control?',
            
        },
        answers: {
            1: {
                1: 'Excellent',
                2: 'Good',
                3: 'Irregular',
                4: 'Bad'
            },
            2: {
               1: 'Often',
               2: 'Mostly',
               3: 'Sometimes',
               4: 'Never'
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
           },
           7: {
            1: 'Often',
            2: 'Mostly',
            3: 'Sometimes',
            4: 'Never'
         },
         8: {
            1: 'Under control',
            2: 'Mostly',
            3: 'Sometimes',
            4: 'Never'
         },
         9: {
            4: 'Often',
            3: 'Ocasionally',
            2: 'Rare',
            1: 'Never'
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
            this.props.changeStressScores(arr)
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
        if (score > 3.5) {
            return <Text> We advice you to Eat healthily, Exercise ,Take time to relax and focus on getting good sleep </Text>;
        } else {
            return <Text>  We advice you to Go Easy On Yourself,Eliminate Your Triggers,take a break and indulge in healthy activities</Text>;
        }
    };
      let { questions, answers, correctAnswer, clickedAnswer, step, score} = this.state;
    return(
        <View style ={styles.main}>
        <View style= {styles.Quiz}>
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
                    <View style={styles.complete}>
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
export default FakeQuizStress;