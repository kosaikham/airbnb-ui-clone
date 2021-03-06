import React, { Component } from "react";
import {
  View,
  Text,
  SafeAreaView,
  TextInput,
  Platform,
  StatusBar,
  ScrollView,
  Image,
  Dimensions,
  Animated
} from "react-native";
import Icon from "react-native-vector-icons/Ionicons";
import Category from "../components/Category";
import Home from "../components/Home";
import Tag from "../components/Tag";

const { width } = Dimensions.get("window");

class Explore extends Component {
  componentWillMount() {
    this.scrollY = new Animated.Value(0);

    this.startHeaderHeight = 80;
    this.endHeaderHeight = 50;
    this.startTagTop = 8;
    if (Platform.OS == "android") {
      this.startHeaderHeight = 90 + StatusBar.currentHeight;
      this.endHeaderHeight = 50 + StatusBar.currentHeight;
      this.startTagTop = 15;
    }

    this.animatedHeaderHeight = this.scrollY.interpolate({
      inputRange: [0, 50],
      outputRange: [this.startHeaderHeight, this.endHeaderHeight],
      extrapolate: "clamp"
    });

    this.animatedTagOpacity = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [0, 1],
      extrapolate: "clamp"
    });

    this.animatedTagTop = this.animatedHeaderHeight.interpolate({
      inputRange: [this.endHeaderHeight, this.startHeaderHeight],
      outputRange: [-8, this.startTagTop],
      extrapolate: "clamp"
    });
  }

  render() {
    return (
      <SafeAreaView style={{ flex: 1 }}>
        <View style={{ flex: 1 }}>
          <Animated.View
            style={{
              height: this.animatedHeaderHeight,
              backgroundColor: "white",
              borderBottomWidth: 1,
              borderBottomColor: "#dddddd",
              marginTop:
                Platform.OS == "android" ? StatusBar.currentHeight : null
            }}
          >
            <View
              style={{
                flexDirection: "row",
                padding: 10,
                marginHorizontal: 20,
                alignItems: "center",
                backgroundColor: "white",
                shadowOffset: { width: 0, height: 0 },
                shadowColor: "#000",
                shadowOpacity: 0.2,
                elevation: 2,
                marginTop: Platform.OS == "android" ? 15 : null
              }}
            >
              <Icon name="ios-search" size={20} style={{ marginRight: 10 }} />
              <TextInput
                underlineColorAndroid="transparent"
                placeholder="Try Yangon "
                placeholderTextColor="grey"
                style={{
                  flex: 1,
                  fontWeight: "700",
                  backgroundColor: "white"
                }}
              />
            </View>
            <Animated.View
              style={{
                flexDirection: "row",
                marginLeft: 20,
                position: "relative",
                top: this.animatedTagTop,
                opacity: this.animatedTagOpacity
              }}
            >
              <Tag name="Guest" />
              <Tag name="Date" />
            </Animated.View>
          </Animated.View>
          {/* headerView */}
          <ScrollView
            scrollEventThrottle={16}
            onScroll={Animated.event([
              {
                nativeEvent: {
                  contentOffset: {
                    y: this.scrollY
                  }
                }
              }
            ])}
          >
            <View
              style={{
                flex: 1,
                backgroundColor: "white",
                paddingTop: 20
              }}
            >
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700",
                  paddingHorizontal: 20
                }}
              >
                What can we help you find, Andrew?
              </Text>

              <View
                style={{
                  height: 130,
                  marginTop: 20
                }}
              >
                <ScrollView
                  horizontal={true}
                  showsHorizontalScrollIndicator={false}
                >
                  <Category
                    imageUri={require("../../assets/home.jpg")}
                    name="Home"
                  />
                  <Category
                    imageUri={require("../../assets/experiences.jpg")}
                    name="Experiences"
                  />
                  <Category
                    imageUri={require("../../assets/restaurant.jpg")}
                    name="Restaurant"
                  />
                </ScrollView>
              </View>

              <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
                <Text
                  style={{
                    fontSize: 24,
                    fontWeight: "700"
                  }}
                >
                  Introducing Airbnb Plus
                </Text>
                <Text
                  style={{
                    fontWeight: "100",
                    marginTop: 10
                  }}
                >
                  A new selection of homes verified for quality & comfort
                </Text>

                <View
                  style={{
                    width: width - 40,
                    height: 200,
                    marginTop: 20
                  }}
                >
                  <Image
                    source={require("../../assets/home.jpg")}
                    style={{
                      flex: 1,
                      width: null,
                      height: null,
                      resizeMode: "cover",
                      borderRadius: 5,
                      borderWidth: 1,
                      borderColor: "#dddddd"
                    }}
                  />
                </View>
              </View>
            </View>

            <View style={{ marginTop: 40, paddingHorizontal: 20 }}>
              <Text
                style={{
                  fontSize: 24,
                  fontWeight: "700"
                }}
              >
                Homes around the world
              </Text>
              <View
                style={{
                  marginTop: 20,
                  flexDirection: "row",
                  flexWrap: "wrap",
                  justifyContent: "space-between"
                }}
              >
                <Home
                  width={width}
                  name="The Cozy Palace"
                  type="PRIVATE ROOM - 2 BEDS"
                  price="82"
                  rating={4}
                />
                <Home
                  width={width}
                  name="The Cozy Palace"
                  type="PRIVATE ROOM - 2 BEDS"
                  price="82"
                  rating={4}
                />
                <Home
                  width={width}
                  name="The Cozy Palace"
                  type="PRIVATE ROOM - 2 BEDS"
                  price="82"
                  rating={4}
                />
              </View>
            </View>
          </ScrollView>
        </View>
      </SafeAreaView>
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

export default Explore;
