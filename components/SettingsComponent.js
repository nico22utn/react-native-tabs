import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
const backgroundColor = "#e97600";
export default class SettingsComponent extends Component {

    static navigatorOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Info';
        let tabBarIcon = () => {
            <Image source = {require('../icons/settings-icon.png')} style = {{ width: 26, height: 26, tintColor: backgroundColor}}/>
        }
        return {tabBarLabel,tabBarIcon};
    }
    render() {
        return (
        <View style = {styles.container}>
            <Text style = {styles.textStyle}> Ësta es la pantalla de Settings </Text>
        </View>
        );
    }
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: backgroundColor,
        alignItems: 'center',
        justifyContent: 'center'
    },
    textStyle: {
        fontWeight: 'bold',
        fontSize: 22,
        color: 'white'
    }
})