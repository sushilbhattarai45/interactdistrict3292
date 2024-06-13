import React, { useState, useEffect, useRef } from "react";
import { StyleSheet, View, Text, Image, Animated, Easing } from "react-native";
import appColors from "./components/colors/colors";
import { router } from "expo-router";
import * as Updates from "expo-updates";

const Index = () => {
  const [spinValue] = useState(new Animated.Value(0));
  async function onFetchUpdateAsync() {
    try {
      const update = await Updates.checkForUpdateAsync();

      if (update.isAvailable) {
        await Updates.fetchUpdateAsync();
        await Updates.reloadAsync();
      }
    } catch (error) {
      // You can also add an alert() to see the error message in case of an error when fetching updates.
      console.log(`Error fetching latest Expo update: ${error}`);
    }
  }
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
    }, 6000);
  }, []);

  useEffect(() => {
    onFetchUpdateAsync();
  }, []);

  const FadeInView = (props: any) => {
    const fadeAnim = useRef(new Animated.Value(0)).current; // Initial value for opacity: 0

    useEffect(() => {
      Animated.timing(fadeAnim, {
        toValue: 1,
        duration: 3000,
        useNativeDriver: true,
      }).start();
    }, [fadeAnim]);

    return (
      <Animated.View // Special animatable View
        style={{
          ...props.style,
          opacity: fadeAnim, // Bind opacity to animated value
        }}
      >
        {props.children}
      </Animated.View>
    );
  };

  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FEFEFE",
        flexDirection: "column",
      }}
    >
      <View
        style={{
          flex: 0.5,
          justifyContent: "flex-end",
        }}
      >
        <FadeInView style={{}}>
          <Image
            style={{
              objectFit: "contain",
              width: 250,
              height: 200,
            }}
            source={require("../assets/theme.gif")}
          />
        </FadeInView>
      </View>

      <View
        style={{
          flex: 0.5,
          justifyContent: "flex-end",
          alignItems: "center",
        }}
      >
        <FadeInView style={{}}>
          <Animated.Image
            style={{
              width: 40,
              height: 40,
              alignSelf: "center",
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
              marginBottom: 60,
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
        </FadeInView>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Index;
