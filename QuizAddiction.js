import React, {Component} from 'react';
import Question from './question/Question';
import Answer from './answer/Answer';
import './QuizMain.css';

export default class QuizMain extends Component {

    // initiating the local state
    state = {
        quiestions: {
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