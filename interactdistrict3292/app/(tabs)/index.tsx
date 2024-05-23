import React from "react";
import {
  Image,
  StyleSheet,
  Platform,
  View,
  Text,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  Dimensions,
} from "react-native";
import { StatusBar } from "expo-status-bar";

export default function HomeScreen() {
  const [choosenFilter, setChoosenFilter] = React.useState("All");
  const filterOptions = [
    { name: "All", value: "All" },
    { name: "Community", value: "Community" },
    { name: "Club", value: "Club" },
    { name: "District", value: "District" },
    { name: "International", value: "International" },
    { name: "Other", value: "Other" },
  ];
  const images = [
    { image: "https://source.unsplash.com/1024x768/?nature", title: "Nature" },
    {
      image: "https://source.unsplash.com/1024x500/?girl",
      title: "Water Tree",
    },
    {
      image: "https://source.unsplash.com/1024x768/?tree",
      title: "Water Girl",
    },
    {
      image: "https://source.unsplash.com/1024x768/?girl",
      title: "Water Girl",
    },
    {
      image: "https://source.unsplash.com/1024x768/?tree",
      title: "Water Tree",
    },
  ];

  return (
    <View style={{ flex: 1, backgroundColor: "white" }}>
      <StatusBar style="auto" />
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
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <View
            style={{
              flex: 0.04,
              padding: 10,
              borderBottomWidth: 1,
              justifyContent: "center",

              borderBottomColor: "lightgray",
            }}
          >
            <Text style={{ fontSize: 16, fontWeight: "bold" }}>
              Interact District 3292
            </Text>
          </View>
          <View
            style={{
              flex: 0.94,
              justifyContent: "flex-start",
            }}
          >
            <View
              style={{
                flex: 0.3,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <ScrollView
                horizontal
                contentContainerStyle={{
                  justifyContent: "flex-start",
                  alignItems: "flex-start",
                }}
                showsHorizontalScrollIndicator={false}
                style={{
                  alignContent: "center",
                }}
              >
                {images.map((image, index) => (
                  <TouchableOpacity
                    key={index}
                    style={{
                      // marginTop: 10,
                      flex: 1,
                      width: Dimensions.get("window").width - 50,
                      height: 180,
                      display: "flex",
                      marginRight: 10,
                      alignSelf: "center",
                      borderRadius: 10,
                    }}
                  >
                    <Image
                      style={{
                        borderRadius: 10,
                        width: "100%",
                        resizeMode: "cover",
                      }}
                      height={180}
                      source={{
                        uri: image.image,
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 12,
                        margin: 10,
                        marginTop: -50,
                        width: 270,
                        fontWeight: "bold",
                        color: "white",
                        alignSelf: "flex-start",
                      }}
                    >
                      {image.title}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View
              style={{
                flex: 0.7,
                display: "flex",
                flexDirection: "column",

                // justifyContent: "center",
                // alignItems: "center",
              }}
            >
              <View
                style={{
                  flex: 0.1,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <Text
                  style={{
                    fontSize: 14,
                    fontWeight: "bold",
                  }}
                >
                  Recent Projects
                </Text>
              </View>
              <View
                style={{
                  flex: 0.2,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <ScrollView
                  showsHorizontalScrollIndicator={false}
                  horizontal
                  style={{
                    height: 50,
                    flex: 0.5,
                    marginTop: 10,
                  }}
                >
                  {filterOptions.map((filterOption, index) => (
                    <TouchableOpacity
                      onPress={() => {
                        console.log("Filter Option", filterOption);
                        setChoosenFilter(filterOption.name);
                      }}
                      key={index}
                      style={{
                        width: 100,
                        height: 40,
                        elevation: 5,
                        shadowColor: "black",
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,

                        backgroundColor:
                          filterOption.name === choosenFilter
                            ? "#0098FF"
                            : "white",
                        borderRadius: 5,
                        marginRight: 5,
                        justifyContent: "center",
                        alignItems: "center",
                      }}
                    >
                      <Text
                        style={{
                          color:
                            filterOption.name === choosenFilter
                              ? "white"
                              : "grey",
                          fontSize: 12,
                          fontWeight: "500",
                        }}
                      >
                        {filterOption.name}
                      </Text>
                    </TouchableOpacity>
                  ))}
                </ScrollView>
              </View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  alignContent: "center",
                  flex: 0.3,
                }}
              >
                <View
                  style={{
                    marginVertical: 10,
                    alignSelf: "center",
                    width: Dimensions.get("window").width - 30,
                    height: 85,
                    borderRadius: 6,
                    flex: 1,
                    display: "flex",
                    flexDirection: "row",
                    elevation: 5,
                    shadowColor: "black",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.25,
                    shadowRadius: 3.84,
                    backgroundColor: "white",
                  }}
                >
                  <View
                    style={{
                      flex: 0.23,
                    }}
                  >
                    <Image
                      style={{
                        margin: 10,
                        width: 70,
                        height: 65,
                        resizeMode: "cover",
                        borderRadius: 6,
                      }}
                      source={{
                        uri: "https://source.unsplash.com/1024x768/?nature",
                      }}
                    />
                  </View>

                  <View
                    style={{
                      flex: 0.6,
                      padding: 10,
                      display: "flex",
                      flexDirection: "column",
                      // justifyContent: "center",
                      alignItems: "flex-start",
                    }}
                  >
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 14, fontWeight: "600" }}
                    >
                      Project Name
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 10, fontWeight: "500" }}
                    >
                      Release Date: 12th May 2024
                    </Text>

                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 10, fontWeight: "500" }}
                    >
                      Interact Club of L.R.I
                    </Text>
                    <Text
                      numberOfLines={1}
                      style={{ fontSize: 10, fontWeight: "500" }}
                    >
                      Project Genre: Community Project
                    </Text>
                  </View>
                </View>
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
