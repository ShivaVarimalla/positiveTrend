
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
            <view style={{flex: 1, marginTop:100}}>
            <Button title="EMERGENCY" onPress={()=>{this.setState({show:true})}}></Button>
            <Modal
            transparent={true}
            visible={this.state.show}
            >
           <view style={{BackgroundColor:"#000000aa", flex:1}}>
            <view style={{BackgroundColor:"#fffffff", margin:50, padding:40, borderRadius:10}}>
            <Text style={{fontSize: 50}}>Do you need help? </Text>
            <Button title="NO" onPress={()=>{this.setState({show:false})}}></Button>
            <Button title="YES" onPress={()=>{this.setState({show:true})}}></Button>
                <Modal
                transparent={true}
                visible={this.state.show}
                >
                <view style={{BackgroundColor:"#000000aa", flex:1}}>
                <view style={{BackgroundColor:"#fffffff", margin:50, padding:40, borderRadius:10}}>
                <Text style={{fontSize: 50}}>Contact 9152987821 </Text>
                </view>
                </view>
                </Modal>
            </view>
            </view>
            </Modal>
            </view>
        )
    }
}

export default Emergency;
