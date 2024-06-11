import React, { useState, useEffect } from "react";
import { StyleSheet, View, Text, Image, Animated, Easing } from "react-native";
import appColors from "./components/colors/colors";
import { router } from "expo-router";

const Index = () => {
  const [spinValue] = useState(new Animated.Value(0));

  const startAnimation = () => {
    Animated.loop(
      Animated.timing(spinValue, {
        toValue: 1,
        duration: 2000,
        easing: Easing.linear,
        useNativeDriver: true,
      })
    ).start();
  };

  useEffect(() => {
    startAnimation();
    setTimeout(() => {
      router.push("(tabs)");
    }, 3000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 0.5,
          justifyContent: "flex-end",
        }}
      >
        <Image
          style={{
            objectFit: "contain",
            width: 300,
            height: 200,
          }}
          source={require("../assets/images/theme.png")}
        />
      </View>

      <View
        style={{
          flex: 0.5,
          justifyContent: "flex-end",
          alignItems: "center",
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
          source={require("../assets/images/interact-wheel.png")}
        />
        <View
          style={{
            marginTop: 10,
            marginBottom: 50,
            alignItems: "center",
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: appColors.black,
              fontWeight: "500",
            }}
          >
            Interact District 3292{" "}
          </Text>
          <Text
            style={{
              alignSelf: "center",
              fontSize: 12,
              color: appColors.grey,
              fontWeight: "500",
              textAlign: "center",
            }}
          >
            A facilitating body of all the Interact clubs in Nepal and Bhutan.
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
