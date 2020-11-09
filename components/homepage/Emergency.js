
import React from 'react'
import { View,Button, Text,Modal} from 'react-native'

class Emergency extends React.Component{

    constructor()
        {
            super();
            this.state={
                show:false
            }
        }

    render() {
        return(
            <View style={{BackgroundColor:"#FF0000", flexDirection: "column", alignItems:"right", top:1}}>
            <Button title="EMERGENCY" onPress={()=>{this.setState({show:true})}}></Button>
            <Modal
            transparent={true}
            visible={this.state.show}
            >
           <View style={{BackgroundColor:"#000000aa", flex:1}}>
            <View style={{BackgroundColor:"#fffffff", margin:50, padding:40, borderRadius:10}}>
            <Text style={{fontSize: 50}}>Do you need help? </Text>
            <Button title="NO" onPress={()=>{this.setState({show:false})}}></Button>
            <Button title="YES" onPress={()=>{this.setState({show:true})}}></Button>
                <Modal
                transparent={true}
                visible={this.state.show}
                >
                <View style={{BackgroundColor:"#000000aa", flex:1}}>
                <View style={{BackgroundColor:"#fffffff", margin:50, padding:40, borderRadius:10}}>
                <Text style={{fontSize: 50}}>Contact 9152987821 </Text>
                </View>
                </View>
                </Modal>
            </View>
            </View>
            </Modal>
            </View>
        )
    }
}

export default Emergency;
