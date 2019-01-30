import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'
import Button from 'react-native-button'

const backgroundColor = '#0067a7';
export default class HomeComponent extends Component {

    static navigatorOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let tabBarLabel = 'Home';
        let tabBarIcon = () => {
            <Image source = {require('../icons/home-icon.png')} style = {{ width: 26, height: 26, tintColor: backgroundColor}}/>
        }
        return {tabBarLabel},tabBarIcon;
    }
    render() {
        return (
        <View style = {styles.container}>
            <Text style = {styles.textStyle}> Ésta es la pantalla de Home </Text>
        </View>
        )
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