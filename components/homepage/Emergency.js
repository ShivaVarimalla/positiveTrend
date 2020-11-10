
import React, {useState} from 'react';
import { View,Text,StyleSheet,TouchableOpacity} from 'react-native'
import AwesomeAlert from 'react-native-awesome-alerts';


const Emergency=()=>{
const [emergency, setEmergency] = useState(false)
const [contact, setContact] = useState(false)
    return(
        <View style = {styles.Main}> 
        <View style={styles.container}>
            <TouchableOpacity style={{alignSelf: 'flex-end'}}onPress={()=>{setEmergency(true)}}><Text style={styles.emergencytext}>EMERGENCY</Text></TouchableOpacity>
        </View>
        <AwesomeAlert 
                show={emergency}
                showProgress={false}
                title= 'EMERGENCY'
                message= 'Do u need any help?'
                closeOnTouchOutside={false}
                closeOnHardwareBackPress={false}
                showConfirmButton={true}
                cancelText="NO"
                confirmText="Yes"
                confirmButtonColor="#DD6B55"
                showCancelButton={true}
                onCancelPressed={() => {
                    setEmergency(false)
                  }}
                  onConfirmPressed={() => {
                    setEmergency(false)
                    setContact(true);
                  }}
        />
         <AwesomeAlert
          show={contact}
          showProgress={false}
          title="Contact This Number"
          message="9553552935"
          closeOnTouchOutside={true}
          closeOnHardwareBackPress={false}
          showCancelButton={true}
          cancelText="No, cancel"
          onCancelPressed={() => {
            setContact(false)
          }}
        />
        </View>
    )
}

const styles = StyleSheet.create({
  Main:{
    alignSelf: 'flex-end',
    marginTop: 20,
    flexDirection: 'row',
    marginRight: 20
  },
   emergencytext:{
   color: 'black',
    backgroundColor:'#e60918',
    padding: 10,
    borderRadius:6
   }
})
export default Emergency;
