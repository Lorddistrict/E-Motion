import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';

// Screens
import WelcomeScreen from './src/components/Welcome/WelcomeScreen';
import DashboardScreen from './src/components/Dashboard/DashboardScreen';
import LoginScreen from './src/components/Login/LoginScreen';
import HomeScreen from "./src/components/Home/HomeScreen";
import BookingScreen from "./src/components/Booking/BookingScreen";
import SearchScreen from "./src/components/Search/SearchScreen";
import ProfileScreen from "./src/components/Profile/ProfileScreen";
import RegisterScreen from "./src/components/Login/RegisterScreen";
import {createStackNavigator} from "react-navigation-stack";
import {createDrawerNavigator} from "react-navigation-drawer";


class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <ImageBackground source={{uri: 'https://mfiles.alphacoders.com/638/638263.png'}} style={styles.bg}>
          <AppContainer/>
        </ImageBackground>
      </View>
    )
  }
}

export default App;

const DashboardTabNavigator = createBottomTabNavigator({
  Home: HomeScreen,
  Booking: BookingScreen,
  Search: SearchScreen,
  Profile: ProfileScreen
});

const DashboardStackNavigator = createStackNavigator({
  DashboardTabNavigator: DashboardTabNavigator
});

const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }
});

const AppSwicthNavigator = createSwitchNavigator({
  Welcome: {
    screen: WelcomeScreen
  },
  Login: {
    screen: LoginScreen
  },
  Register: {
    screen: RegisterScreen
  },
  Test: {
    screen: AppDrawerNavigator
  }
});

const AppContainer = createAppContainer(AppSwicthNavigator)


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