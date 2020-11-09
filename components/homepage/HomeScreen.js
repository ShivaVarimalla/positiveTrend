import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import React from 'react'
import Home from './Home';
import FakeQuizMain from './FakeQuizMain';
import FakeQuizAddiction from './FakeQuizAddiction';
import FakeQuizOcd from './FakeQuizOcd';
import FakeQuizStress from './FakeQuizStress';



const Screen = ({ mainScores,
    addictionScores,
    ocdScores,
    stressScores,
    changeMainScores,
    changeAddictionScores,
    changeOcdScores,
    changeStressScores})=>{
    const HomeStack = createStackNavigator();
    return(
            <HomeStack.Navigator initialRouteName = "Home">
                <HomeStack.Screen name="Home" component={Home}/>
                <HomeStack.Screen name="Quiz-Main" >{props => <FakeQuizMain {...props} 
                 changeMainScores={changeMainScores} />}</HomeStack.Screen>

                  <HomeStack.Screen name="Quiz-Addiction" >{props => <FakeQuizAddiction {...props} 
                 changeAddictionScores={changeAddictionScores} />}</HomeStack.Screen>

                  <HomeStack.Screen name="Quiz-Ocd" >{props => <FakeQuizOcd {...props} 
                 changeOcdScores={changeOcdScores} />}</HomeStack.Screen>
                 
                  <HomeStack.Screen name="Quiz-Stress" >{props => <FakeQuizStress {...props} 
                 changeStressScores={changeStressScores} />}</HomeStack.Screen>
                
              
            </HomeStack.Navigator>
    )
}
export default Screen;