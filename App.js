import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Icon from "react-native-vector-icons/Ionicons";

import Explore from "./src/screens/Explore";
import Inbox from "./src/screens/Inbox";
import Profile from "./src/screens/Profile";
import Saved from "./src/screens/Saved";
import Trips from "./src/screens/Trips";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const bottomTabNavigatorConfig = {
  tabBarOptions: {
    activeTintColor: "red",
    inactiveTintColor: "grey",
    style: {
      backgroundColor: "white",
      borderTopWidth: 0,
      shadowOffset: { width: 5, height: 3 },
      shadowColor: "black",
      shadowOpacity: 0.5,
      elevation: 5
    }
  }
};

const bottomTabNavigator = createBottomTabNavigator(
  {
    Explore: {
      screen: Explore,
      navigationOptions: {
        tabBarLabel: "EXPLORE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" size={24} color={tintColor} />
        )
      }
    },
    Saved: {
      screen: Saved,
      navigationOptions: {
        tabBarLabel: "SAVED",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-heart-empty" size={24} color={tintColor} />
        )
      }
    },
    Trips: {
      screen: Trips,
      navigationOptions: {
        tabBarLabel: "TRIPS",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-search" size={24} color={tintColor} />
        )
      }
    },
    Inbox: {
      screen: Inbox,
      navigationOptions: {
        tabBarLabel: "INBOX",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-chatboxes" size={24} color={tintColor} />
        )
      }
    },
    Profile: {
      screen: Profile,
      navigationOptions: {
        tabBarLabel: "PROFILE",
        tabBarIcon: ({ tintColor }) => (
          <Icon name="ios-person" size={24} color={tintColor} />
        )
      }
    }
  },
  bottomTabNavigatorConfig
);

const AppContainer = createAppContainer(bottomTabNavigator);
