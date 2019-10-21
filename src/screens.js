import {Navigation} from 'react-native-navigation';

export function registerScreens() {
  Navigation.registerComponent('Booking', () => require('./components/Booking/BookingScreen').default);
  Navigation.registerComponent('Home', () => require('./components/Home/HomeScreen').default);
  Navigation.registerComponent('Initializing', () => require('./components/Init/Initializing').default);
  Navigation.registerComponent('Login', () => require('./components/Login/LoginScreen').default);
  Navigation.registerComponent('Register', () => require('./components/Login/RegisterScreen').default);
  Navigation.registerComponent('Profile', () => require('./components/Profile/ProfileScreen').default);
  Navigation.registerComponent('Search', () => require('./components/Search/SearchScreen').default);
  Navigation.registerComponent('Welcome', () => require('./components/Welcome/WelcomeScreen').default);
}