import React from 'react';
import {StyleSheet, ImageBackground, View} from 'react-native';
import {createSwitchNavigator, createAppContainer} from 'react-navigation';
import {createBottomTabNavigator} from 'react-navigation-tabs';
import {createStackNavigator} from "react-navigation-stack";
import Icon from "react-native-vector-icons/FontAwesome";

// Screens
import WelcomeScreen from './src/components/Welcome/WelcomeScreen';
import LoginScreen from './src/components/Login/LoginScreen';
import HomeScreen from "./src/components/Home/HomeScreen";
import BookingScreen from "./src/components/Booking/BookingScreen";
import SearchScreen from "./src/components/Search/SearchScreen";
import ProfileScreen from "./src/components/Profile/ProfileScreen";
import RegisterScreen from "./src/components/Login/RegisterScreen";

class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <AppContainer />
      </View>
    )
  }
}

export default App;

const AppTabNavigator = createBottomTabNavigator({
  Home: {
    screen: HomeScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" size={25} color={tintColor} />
      )
    }
  },
  Booking: {
    screen: BookingScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="th-large" size={25} color={tintColor} />
      )
    }
  },
  Search: {
    screen: SearchScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="search" size={25} color={tintColor} />
      )
    }
  },
  Profile: {
    screen: ProfileScreen,
    navigationOptions: {
      tabBarIcon: ({ tintColor }) => (
        <Icon name="user" size={25} color={tintColor} />
      )
    }
  }
}, {
  initialRouteName: 'Booking',
  tabBarOptions: {
    activeTintColor: '#9f57ff',
    inactiveTintColor: 'gray',
    style: {
      backgroundColor: 'white',
    }
  },
});

const AppStack = createStackNavigator({
  Tabs: AppTabNavigator,
});

const AuthStack = createStackNavigator({
  Welcome: {
    screen: AppTabNavigator,
    navigationOptions: {
      header: null,
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      header: null,
    },
  },
  Register: {
    screen: RegisterScreen,
    navigationOptions: {
      headerStyle: {
        backgroundColor: '#1c313a',
      },
      headerTintColor: '#ffffff',
    },
  },
}, {
  initialRouteName: 'Welcome',
});

const AppSwitchNavigator = createSwitchNavigator({
  Auth: AuthStack,
  App: AppStack,
});

const AppContainer = createAppContainer(AppSwitchNavigator);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: '#455a64',
  }
});