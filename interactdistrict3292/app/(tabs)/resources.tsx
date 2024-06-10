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
} from "react-native";
import Header from "../components/header";
import appColors from "../components/colors/colors";
import { Entypo } from "@expo/vector-icons";
const Resources = () => {
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
              style={{
                padding: 10,
              }}
            >
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
                    Event Report Format
                  </Text>
                  <View>
                    <Text
                      style={{
                        marginLeft: 6,
                        fontSize: 12,
                        color: appColors.grey,
                      }}
                    >
                      (For Interact Clubs)
                    </Text>
                  </View>
                </View>
                <View
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
                </View>
              </View>
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
                    Event Report Format
                  </Text>
                  <View>
                    <Text
                      style={{
                        marginLeft: 6,
                        fontSize: 12,
                        color: appColors.grey,
                      }}
                    >
                      (For Interact Clubs)
                    </Text>
                  </View>
                </View>
                <View
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
                </View>
              </View>
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
                    Event Report Format
                  </Text>
                  <View>
                    <Text
                      style={{
                        marginLeft: 6,
                        fontSize: 12,
                        color: appColors.grey,
                      }}
                    >
                      (For Interact Clubs)
                    </Text>
                  </View>
                </View>
                <View
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
                </View>
              </View>
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
                    Event Report Format
                  </Text>
                  <View>
                    <Text
                      style={{
                        marginLeft: 6,
                        fontSize: 12,
                        color: appColors.grey,
                      }}
                    >
                      (For Interact Clubs)
                    </Text>
                  </View>
                </View>
                <View
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
                </View>
              </View>
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
                    Event Report Format
                  </Text>
                  <View>
                    <Text
                      style={{
                        marginLeft: 6,
                        fontSize: 12,
                        color: appColors.grey,
                      }}
                    >
                      (For Interact Clubs)
                    </Text>
                  </View>
                </View>
                <View
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
                </View>
              </View>
            </ScrollView>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

export default Resources;
