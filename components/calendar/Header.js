import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default class Header extends React.Component {

    render() {

        return (
            <View style={styles.header}>
                <Text style={styles.text}>{this.props.title}</Text>
            </View>
        );

    }

}

const styles = StyleSheet.create({
    text: {
        
        fontSize: 18,
        letterSpacing: 1,
        fontWeight: 'bold',
        color: '#3391a6',
        fontFamily: 'serif'},
    header: {
        width: '100%',
        height: '18%',
        borderBottomWidth: 8,
        borderBottomColor: "#ddd",
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#dae4ed',
        
    }
   
});