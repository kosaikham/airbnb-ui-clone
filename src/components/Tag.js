import React, { Component } from "react";
import { View, Text } from "react-native";

class Tag extends Component {
  render() {
    return (
      <View
        style={{
          minHeight: 20,
          minWidth: 40,
          backgroundColor: "white",
          padding: 5,
          borderWidth: 1,
          borderColor: "#dddddd",
          marginRight: 5
        }}
      >
        <Text
          style={{
            fontWeight: "bold",
            fontSize: 10
          }}
        >
          {this.props.name}
        </Text>
      </View>
    );
  }
}

export default Tag;
