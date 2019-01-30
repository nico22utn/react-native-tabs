import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import HomeComponent from './components/HomeComponent';
import { createBottomTabNavigator, createAppContainer  } from 'react-navigation';
import InfoComponent from './components/InfoComponent';
import SettingsComponent from './components/SettingsComponent';
import CloudComponent from './components/CloudComponent';
import Ionicons from 'react-native-vector-icons/Ionicons';

let routeConfigs = {
  Home: HomeComponent,
  Info: InfoComponent,
  Settings: SettingsComponent,
  Cloud: CloudComponent
};
let iconsConfig ={
  defaultNavigationOptions: ({ navigation }) => ({
    tabBarIcon: ({ focused, tintColor }) =>
      getTabBarIcon(navigation, focused, tintColor),
  }),
  tabBarOptions: {
    activeTintColor: 'tomato',
    inactiveTintColor: 'gray',
  }
}
const TabNavigator = createBottomTabNavigator(routeConfigs,iconsConfig);
const AppContainer = createAppContainer(TabNavigator);
export default class App extends React.Component {
  render() {
    return (
      <AppContainer/>
    );
  }
}
const getTabBarIcon = (navigation, focused, tintColor) => {
  const { routeName } = navigation.state;
  let IconComponent = Ionicons;
  let iconName;
  if (routeName === 'Home') {
    iconName = `ios-information-circle-outline`;
  } else if (routeName === 'Settings') {
    iconName = `ios-information-circle-outline`;
  } else if ( routeName === 'Cloud') {
    iconName = `ios-information-circle-outline`;
  }
  else {
    iconName = `ios-information-circle-outline`;
  }

  // You can return any component that you like here!
  return <IconComponent name={iconName} size={25} color={tintColor} />;
};