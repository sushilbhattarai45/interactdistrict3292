import { Animated, Easing, Dimensions, Platform } from "react-native";
import Constants from "expo-constants";
import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import ListTeamComponent from "../components/lisDistrictTeam";
import Header from "../components/header";
import appColors from "../components/colors/colors";

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

  const myTeam = [
    {
      name: "Itr. Aman Singh",
      email: "xyz@gmail.com",
      club: "Interact Club of Delhi Public School, R.K. Puram",
      post: "District Information Technology Officer Head",
      image:
        "https://interactnepal.org/wp-content/uploads/2023/07/Sushil-Bhattarai-768x768.jpg",
    },
    {
      name: "Itr. Aman Singh",
      email: "adsa@g.com",
      club: "Rotaract Club of Delhi Technological University",
      post: "President",
      image:
        "https://interactnepal.org/wp-content/uploads/2022/11/viber_image_2022-08-31_13-43-03-978-500x500.jpg",
    },
  ];

  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          margin: 10,
          marginTop: Platform.OS === "android" ? 25 : 0,
        }}
      >
        <View
          style={{
            flex: 1,
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
              data={myTeam}
              renderItem={({ item }) => <ListTeamComponent data={item} />}
            />
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}