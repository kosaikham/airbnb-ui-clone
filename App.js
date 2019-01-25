import React from "react";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";
import Expore from "./src/screens/Expore";
import Inbox from "./src/screens/Inbox";
import Profile from "./src/screens/Profile";
import Saved from "./src/screens/Saved";
import Trips from "./src/screens/Trips";

export default class App extends React.Component {
  render() {
    return <AppContainer />;
  }
}

const bottomTabNavigator = createBottomTabNavigator({
  Expore: {
    screen: Expore
  },
  Saved: {
    screen: Saved
  },
  Trips: {
    screen: Trips
  },
  Inbox: {
    screen: Inbox
  },
  Profile: {
    screen: Profile
  }
});

const AppContainer = createAppContainer(bottomTabNavigator);
