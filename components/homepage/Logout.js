import React from 'react'
import { View,Button} from 'react-native'

class Logout extends React.Component{

        render(){
            return(
                <View style={{BackgroundColor:"#0000FF", justifyContent:"flex-end", alignItems:"flex-end"}}>
            <Button title="Logout"></Button>
                </View>
            )
        }

}

export default Logout;
