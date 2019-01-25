import React, { Component } from "react";
import { View, Text } from "react-native";

class Inbox extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <View style={styles.containerStyle}>
        <Text> Inbox </Text>
      </View>
    );
  }
}

const styles = {
  containerStyle: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default Inbox;
