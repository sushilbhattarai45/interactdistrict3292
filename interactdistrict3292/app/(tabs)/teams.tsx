import {
  Animated,
  Easing,
  Dimensions,
  Platform,
  StatusBar as RNStatusBar,
} from "react-native";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import ListTeamComponent from "../components/lisDistrictTeam";
import Header from "../components/header";
import appColors from "../components/colors/colors";
import TeamData from "../components/teamsJson.json";
export default function Teams() {
  const [spinValue] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 5000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startAnimation();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          padding: 10,
        }}
      >
        <View
          style={{
            flex: 1,
            paddingTop:
              Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
          }}
        >
          <Header />
          <View
            style={{
              alignContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <View
              style={{
                width: Dimensions.get("window").width - 20,
                backgroundColor: appColors.white,
                borderRadius: 6,
                justifyContent: "center",
                padding: 10,
                marginBottom: 10,
                height: 60,
                elevation: 5,
                shadowColor: appColors.blue,
                shadowOffset: { width: 0, height: 2 },
              }}
            >
              <Text
                style={{
                  fontSize: 16,
                  fontWeight: "bold",
                  color: appColors.black,
                  marginLeft: 10,
                }}
              >
                District Team For 2022-23
              </Text>
              <View
                style={{
                  position: "absolute",
                  justifyContent: "center",
                  alignContent: "center",
                  alignItems: "center",
                  right: 0,
                  padding: 10,
                }}
              >
                <Animated.Image
                  style={{
                    width: 40,
                    height: 40,
                    resizeMode: "cover",
                    borderRadius: 25,
                    transform: [
                      {
                        rotate: spinValue.interpolate({
                          inputRange: [0, 1],
                          outputRange: ["0deg", "360deg"],
                        }),
                      },
                    ],
                  }}
                  source={require("../../assets/images/interact-wheel.png")}
                />
              </View>
            </View>
            <FlatList
              style={{
                zIndex: 1,
              }}
              showsVerticalScrollIndicator={false}
              data={TeamData}
              initialNumToRender={10}
              renderItem={({ item }) => <ListTeamComponent data={item} />}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}
