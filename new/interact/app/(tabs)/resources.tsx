import React, { useState, useEffect } from "react";
import {
  View,
  Easing,
  Text,
  Platform,
  StatusBar as RNStatusBar,
  SafeAreaView,
  Dimensions,
  Animated,
  ScrollView,
  Pressable,
  Linking,
} from "react-native";
import Header from "../components/header";
import appColors from "../components/colors/colors";
import { Entypo } from "@expo/vector-icons";
const Resources = () => {
  const [spinValue] = useState(new Animated.Value(0));

  const resources = [
    {
      title: "Standard Interact Club Constitution",
      description: "(For Interact Clubs)",
      url:
        "https://interactnepal.org/wp-content/uploads/2023/09/656_interact_club_standard_constitution_en-1.pdf",
    },
    {
      title: "Recommended Interact Club Bylaws",
      description: "(For Interact Clubs)",
      url:
        "http://interactnepal.org/wp-content/uploads/2023/09/657_interact_club_recommended_bylaws_en-3-1.docx",
    },
    {
      title: "Charter Ceremony Format",
      description: "(For Interact Clubs)",
      url:
        "http://interactnepal.org/wp-content/uploads/2023/09/Charter-Ceremony-Format.pdf",
    },
    {
      title: "Example Minutes",
      description: "(For Secretary)",
      url:
        "http://interactnepal.org/wp-content/uploads/2023/09/Example-Minutes.pdf",
    },
    {
      title: "Event Report Format",
      description: "(For Secretary)",
      url:
        "http://interactnepal.org/wp-content/uploads/2023/09/Event-Report-Format-2023-24.pdf",
    },
    {
      title: "Example Report",
      description: "(For Secretary)",
      url:
        "http://interactnepal.org/wp-content/uploads/2022/09/CLub-Installation-Proper-Format.pdf",
    },
    {
      title: "Letterhead Example",
      description: "(For Interact Clubs)",
      url:
        "https://docs.google.com/document/d/1Fwm4bMX8LyMWq7hRGyIn9npDk3JpcmfA/edit?usp=sharing&ouid=107204186249707484312&rtpof=true&sd=true",
    },
    {
      title: "Vibrant Club Calculator",
      description: "(For Interact Clubs)",
      url:
        "https://docs.google.com/spreadsheets/d/1qlEUlNEKakMlBd5BvIofbZYYCMLkX3K9/edit?usp=sharing&ouid=107204186249707484312&rtpof=true&sd=true",
    },
    {
      title: "Meeting Minutes Example",
      description: "(For Interact Clubs)",
      url:
        "http://interactnepal.org/wp-content/uploads/2023/09/Meeting-minutes-Final.pdf",
    },
    {
      title: "District Logos",
      description: "(For Interact Clubs)",
      url:
        "https://drive.google.com/drive/folders/1Hzj5TGYSfsgBvJpXXi54slkrFvmi939j?usp=sharing",
    },
  ];

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
              flex: 1,
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
                Resources For Rotary Year 2023-24
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

            <ScrollView
              showsVerticalScrollIndicator={false}
              style={{
                padding: 10,
              }}
            >
              {resources.map((resource, index) => (
                <View
                  style={{
                    backgroundColor: appColors.white,
                    elevation: 5,
                    shadowColor: appColors.blue,
                    shadowOffset: { width: 5, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    borderRadius: 6,
                    flexDirection: "row",
                    height: 60,
                    padding: 10,
                    marginBottom: 10,
                  }}
                >
                  <View
                    style={{
                      flex: 0.8,
                    }}
                  >
                    <Text
                      style={{
                        marginLeft: 6,
                        fontSize: 14,
                        fontWeight: "600",
                        color: appColors.grey,
                      }}
                    >
                      {resource.title}{" "}
                    </Text>
                    <View>
                      <Text
                        style={{
                          marginLeft: 6,
                          fontSize: 12,
                          color: appColors.grey,
                        }}
                      >
                        {resource.description}{" "}
                      </Text>
                    </View>
                  </View>
                  <Pressable
                    onPress={() => {
                      Linking.openURL(resource.url);
                    }}
                    style={{
                      flex: 0.2,
                      position: "absolute",
                      justifyContent: "center",
                      alignContent: "center",
                      alignItems: "center",
                      right: 10,
                      padding: 10,
                    }}
                  >
                    <Entypo name="download" size={18} color={appColors.blue} />
                  </Pressable>
                </View>
              ))}
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Resources;
