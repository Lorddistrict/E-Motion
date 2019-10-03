import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createAppContainer } from "react-navigation";
// import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/components/HomeScreen';
import BookingScreen from './src/components/BookingScreen';
import SearchScreen from './src/components/SearchScreen';
import ProfileScreen from './src/components/ProfileScreen';

export default class App extends React.Component {
    render() {
        return <AppContainer />;
    }
}

// const AppNavigator = createStackNavigator({
const AppNavigator = createBottomTabNavigator({
    Home: {
        screen: HomeScreen
    },
    Booking: {
        screen: BookingScreen
    },
    Search: {
        screen: SearchScreen
    },
    Profile: {
        screen: ProfileScreen
    }
}, {
    initialRouteName: "Home",
    defaultNavigationOptions: ({ navigation }) => ({
        tabBarIcon: ({ focused, horizontal, tintColor }) => {
            const { routeName } = navigation.state;
            let IconComponent = Ionicons;
            let iconName;
            
            if (routeName === 'Home') {
                iconName = `ios-home`;
            } 
            else if (routeName === 'Booking') {
                iconName = `ios-list`;
            }
            else if (routeName === 'Search') {
                iconName = `ios-search`;
            }
            else if (routeName === 'Profile') {
                iconName = `ios-contact`;
            }
            
            return <IconComponent name={iconName} size={25} color={tintColor} />;
        },
    }),
    tabBarOptions: {
        activeTintColor: 'darkblue',
        inactiveTintColor: 'gray',
    },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});