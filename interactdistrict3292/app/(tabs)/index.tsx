import React, { useEffect } from "react";
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
  FlatList,
} from "react-native";
import { StatusBar } from "expo-status-bar";
import ListProjectComponent from "../components/listprojects";
import appColors from "../components/colors/colors";
import axios from "axios";
import { getProjects } from "../components/api/hitApi";
import SearchBar from "../components/searchBar";
import Header from "../components/header";

export default function HomeScreen() {
  const [projects, setProjects] = React.useState([]);
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

  useEffect(() => {
    getProjectsInfo();
  }, []);

  async function getProjectsInfo() {
    let projectss = await getProjects();
    setProjects(projectss);
    // console.log("Projects", projects);
  }

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
          <Header />
          <View
            style={{
              flex: 0.94,
              justifyContent: "flex-start",
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
              <ScrollView
                showsHorizontalScrollIndicator={false}
                horizontal
                style={{
                  flex: 0.5,
                  // marginTop: 10,
                }}
              >
                {filterOptions.map((filterOption, index) => (
                  <TouchableOpacity
                    onPress={() => {
                      setChoosenFilter(filterOption.name);
                    }}
                    key={index}
                    style={{
                      paddingHorizontal: 20,
                      paddingVertical: 10,
                      // elevation: 5,
                      shadowColor: appColors.blue,
                      // shadowOffset: { width: 2, height: 2 },
                      shadowOpacity: 0.25,
                      shadowRadius: 3.84,

                      backgroundColor:
                        filterOption.name === choosenFilter
                          ? appColors.blue
                          : appColors.white,
                      borderRadius: 20,
                      justifyContent: "center",
                      alignItems: "center",
                    }}
                  >
                    <Text
                      style={{
                        color:
                          filterOption.name === choosenFilter
                            ? appColors.white
                            : appColors.black,
                        fontSize: 12,
                        fontWeight: "700",
                      }}
                    >
                      {filterOption.name}
                    </Text>
                  </TouchableOpacity>
                ))}
              </ScrollView>
            </View>
            <View
              style={{
                flex: 0.3,
                justifyContent: "flex-start",
                alignItems: "flex-start",
              }}
            >
              <FlatList
                initialNumToRender={10}
                showsHorizontalScrollIndicator={false}
                horizontal
                data={projects}
                renderItem={({ item, index }) => (
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
                        uri: item.featured_image_urls.full[0],
                      }}
                    />
                    <Text
                      style={{
                        fontFamily: "Roboto",
                        fontSize: 15,
                        elevation: 5,
                        shadowColor: appColors.blue,
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.25,
                        shadowRadius: 3.84,
                        margin: 10,
                        marginTop: -50,
                        width: 270,
                        fontWeight: "800",
                        color: appColors.white,
                        alignSelf: "flex-start",
                      }}
                    >
                      {item.title.rendered}
                    </Text>
                  </TouchableOpacity>
                )}
                keyExtractor={(item, index) => index.toString()}
              />
              {/* <ScrollView
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
              </ScrollView> */}
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
                  marginBottom: 5,
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
                  marginBottom: 10,
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <SearchBar />
              </View>

              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  alignContent: "center",
                  flex: 0.3,
                }}
              >
                <FlatList
                  initialNumToRender={10}
                  data={projects}
                  renderItem={({ item, index }) => (
                    <ListProjectComponent data={item} />
                  )}
                  keyExtractor={(item, index) => index.toString()}
                />
                {/* {projects.map((project: any, index) => (
                  <Text>{project.title.rendered}</Text>
                ))} */}
              </ScrollView>
            </View>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
}

const styles = StyleSheet.create({});
