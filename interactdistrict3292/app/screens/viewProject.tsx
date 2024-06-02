import React from "react";
import {
  StyleSheet,
  View,
  Text,
  SafeAreaView,
  Platform,
  Image,
  Dimensions,
} from "react-native";
import Header from "../components/header";
import NavBar from "../components/navBar";
import ListProjectComponent from "../components/listprojects";
const ViewProject = () => {
  return (
    <View style={{ flex: 1 }}>
      <SafeAreaView
        style={{
          flex: 1,
          margin: 10,
          marginTop: Platform.OS === "android" ? 25 : 0,
        }}
      >
        <View style={{ flex: 0.06 }}>
          <NavBar name={"Project"} />
        </View>
        <View
          style={{
            flex: 1,
            display: "flex",
            flexDirection: "column",
          }}
        >
          <View
            style={{
              flex: 0.3,
              alignContent: "center",
              alignItems: "center",
              marginTop: 10,
            }}
          >
            <Image
              source={{
                uri:
                  "https://interactnepal.org/wp-content/uploads/2024/01/Snapinsta.app_396401539_700389271973942_2971069774302851393_n_1080.jpg",
              }}
              style={{
                width: "100%",
                height: "100%",
                alignContent: "center",
                resizeMode: "cover",
                borderRadius: 5,
              }}
            />
          </View>
          <View
            style={{
              flex: 0.1,
              backgroundColor: "red",
            }}
          >
            <Text>Helo</Text>
          </View>
          <View
            style={{
              flex: 0.65,
              width: "100%",
              backgroundColor: "white",
              borderRadius: 6,
              justifyContent: "center",
              padding: 10,
              marginBottom: 10,
              height: 60,
              elevation: 5,
              shadowColor: "blue",
              shadowOffset: { width: 0, height: 2 },
            }}
          >
            <Text
              style={{
                fontSize: 16,
                fontWeight: "bold",
                color: "black",
                marginLeft: 10,
              }}
            >
              Project Name
            </Text>
          </View>
        </View>
      </SafeAreaView>
    </View>
  );
};

const styles = StyleSheet.create({});

export default ViewProject;
