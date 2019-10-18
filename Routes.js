import React from "react";
import { View } from "react-native";
import Home from "./src/components/Home";
import DashboardTabRoutes from "./src/components/Dashboard/Routes";
import { createStackNavigator } from "react-navigation";
import CustomHeader from "./src/components/TabBar/CustomHeader";
import HeaderStyles from "./HeaderStyles";

const Routes = createStackNavigator(
  {
    Home: {
      screen: Home,
      navigationOptions: {
        headerTitle: "Home",
        header: props => <CustomHeader {...props} />
      }
    },
    Dashboard: {
      screen: DashboardTabRoutes,
      navigationOptions: {
        header: null
      }
    }
  },
  {
    initialRouteName: "Dashboard",
    navigationOptions: {
      ...HeaderStyles,
      animationEnabled: true
    }
  }
);

export default Routes;
