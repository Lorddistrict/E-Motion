import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';
import { createAppContainer } from "react-navigation";
import { createBottomTabNavigator } from "react-navigation-tabs";
import Ionicons from 'react-native-vector-icons/Ionicons';

import HomeScreen from './src/components/Home/HomeScreen';
import BookingScreen from './src/components/Booking/BookingScreen';
import SearchScreen from './src/components/Search/SearchScreen';
import ProfileScreen from './src/components/Profile/ProfileScreen';

export default class App extends React.Component {
    render() {
        return (
            <View style={styles.container}>
                <ImageBackground source={{uri: 'https://mfiles.alphacoders.com/638/638263.png'}} style={styles.bg}>
                    <AppContainer />
                </ImageBackground>
            </View>
        )
    }
}

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
        activeTintColor: '#f55555',
        inactiveTintColor: '#0f5073',
        activeBackgroundColor: '#e3e3e3',
        inactiveBackgroundColor: '#e3e3e3'
    },
});

const AppContainer = createAppContainer(AppNavigator);

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    bg: {
        flex: 1,
        width: '100%',
        height: '100%'
    }
});