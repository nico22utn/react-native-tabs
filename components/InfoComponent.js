import React, { Component } from 'react';
import { View, Text, StyleSheet,Image } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const backgroundColor = "#007256";
export default class InfoComponent extends Component {
  
    static navigatorOptions = ({navigation}) => {
        const { params = {} } = navigation.state;
        let IconComponent = Ionicons;
        let tabBarLabel = 'Info';
        // let tabBarIcon = () => {
        //     return (<Image source = {require('../icons/info-icon.png')} style = {{ width: 26, height: 26, tintColor: 'red'}}/>);
        // }
        let tabBarIcon = <IconComponent name={`ios-options-outline`} size={25} color={tintColor} />;
        let tabBarOptions = {
            activeTintColor: 'tomato',
            inactiveTintColor: 'gray',
          };
        return {tabBarLabel,tabBarIcon,tabBarOptions};
    }

    render() {
        return (
        <View style = {styles.container}>
            <Text style = {styles.textStyle}> Ésta es la pantalla de Info </Text>
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