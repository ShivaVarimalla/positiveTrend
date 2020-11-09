import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class QuizMain extends Component {

    // initiating the local state
    state = {
        quiestions: {
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

    // the method that checks the answers
    checkAnswer = answer => {
        const { correctAnswers, step, score } = this.state;
        if(answer == 1){
            this.setState({
                score: score + 1,
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
    }

    // method to move to the next question
    nextStep = (step) => {
        this.setState({
            step: step + 1,
            correctAnswer: 0,
            clickedAnswer: 0
        });
    }

    render(){
        let { quiestions, answers, correctAnswer, clickedAnswer, step, score } = this.state;
        return(
            <div className="Content">
                {step <= Object.keys(quiestions).length ? 
                    (<>
                        <Question
                            question={quiestions[step]}
                        />
                        <Answer
                            answer={answers[step]}
                            step={step}
                            checkAnswer={this.checkAnswer}
                            correctAnswer={correctAnswer}
                            clickedAnswer={clickedAnswer}
                        />
                        <button
                        className="NextStep"
                        disabled={
                            clickedAnswer && Object.keys(quiestions).length >= step
                            ? false : true
                        }
                        onClick={() => this.nextStep(step)}>Next</button>
                    </>) : (
                        <div className="finalPage">
                            <h1>You have completed the questionnaire</h1>
                            <p>Your score is: {score} of {Object.keys(quiestions).length}</p>
                            <p>Check out graphs tab</p>
                        </div>
                    )
                }
            </div>
        );
    }
}