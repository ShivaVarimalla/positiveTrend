import React from 'react';
import { Text, View, StyleSheet,FlatList, SafeAreaView, Dimensions } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { MaterialIcons } from '@expo/vector-icons';

const width = Dimensions.get('window').width;

const Settings = ({changeLog,navigation})=>{
    const options = [
        {
            id:'1',
            option:'View Profile',
            icon:'person',
            event:()=>{}
        },
        {
            id:'2',
            option:'Edit Profile',
            icon:'edit',
            event:()=>{}
        },
        {
            id:'3',
            option:'Change Password',
            icon:'edit'
        },
        {
            id:'4',
            option:'Logout',
            icon:'exit-to-app',
            event:()=>{changeLog()}
        }
    ]
    return (
        <View style={styles.main}>
            <View style={styles.container}>
                <SafeAreaView style={{marginHorizontal:10}}>
                    <FlatList
                        data = {options}
                        renderItem = {({item})=>{
                            return (
                                <TouchableOpacity style={styles.listItem} onPress={item.event}>
                                    <MaterialIcons name={item.icon} size={24} color="#55BF98" />
                                    <Text style={styles.listText}> 
                                        {item.option}
                                    </Text>
                                </TouchableOpacity>
                            )
                        }}
                        keyExtractor={item => item.id}
                        style={{paddingTop:20}}
                    />
                </SafeAreaView>
            </View>
        </View>
    );
}

const SettingsScreen = ({changeLog})=>{
    console.log(changeLog)
    const SettingsStack = createStackNavigator();
    return (
            <SettingsStack.Navigator initialRouteName = "Settings">
                <SettingsStack.Screen name="Settings">
                    {props => <Settings {...props} changeLog={changeLog} />}
                </SettingsStack.Screen>
            </SettingsStack.Navigator>
    );
}


const styles = StyleSheet.create({
    main:{
        flex:1
    },
    container:{
        flex:1,
        backgroundColor:"white"
    },
    listItem:{
        width:width,
        paddingHorizontal:10,
        paddingVertical:10,
        flexDirection:'row',
        alignItems:'center',
        elevation:3
    },
    listText:{
        fontSize:14,
        marginLeft:10,
        color:'black',
        fontFamily:'monospace'
    }
})

export default SettingsScreen;