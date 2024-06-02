import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import appColors from "./colors/colors";
import {
  Fontisto,
  Ionicons,
  EvilIcons,
  MaterialCommunityIcons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";

import moment from "moment";
import { router } from "expo-router";
type Props = {
  data: {
    title: {
      rendered: string;
    };
    date: string;
    club: string;
    type: string;
    featured_image_urls: {
      thumbnail: [string, number, number, boolean];
    };
  };
};
export default function ListProjectComponent(props: Props) {
  return (
    <Pressable
      onPress={() => {
        router.push("screens/viewProject");
      }}
      style={{
        marginBottom: 3,
        alignSelf: "center",
        width: Dimensions.get("window").width - 30,
        // height: 85,
        borderRadius: 6,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        elevation: 5,
        shadowColor: appColors.purple,
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        padding: 5,
        backgroundColor: appColors.white,
      }}
    >
      <View
        style={{
          justifyContent: "center",
          alignContent: "center",
          flex: 0.3,
        }}
      >
        <Image
          style={{
            // margin: 10,
            width: 90,
            height: "90%",
            resizeMode: "cover",
            borderRadius: 6,
          }}
          source={{
            uri: props.data.featured_image_urls.thumbnail[0],
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
          style={{
            fontFamily: "Roboto",
            fontSize: 15,
            color: appColors.black,
            fontWeight: "600",
            width: "100%",
          }}
        >
          {props.data.title.rendered}
        </Text>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="time-outline" size={12} color={appColors.purple} />
          <Text
            numberOfLines={1}
            style={{
              color: appColors.grey,
              fontSize: 12,
              marginLeft: 10,
              fontWeight: "500",
            }}
          >
            Release Date: {moment(props.data.date).format("Do MMMM YYYY")}
          </Text>
        </View>

        <View
          style={{
            // marginTop: 5,
            justifyContent: "center",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Feather name="user" size={12} color={appColors.purple} />
          <Text
            numberOfLines={1}
            style={{
              color: appColors.grey,
              fontSize: 12,
              marginLeft: 10,
              fontWeight: "500",
            }}
          >
            Club: Interact Club of XYZ
          </Text>
        </View>
      </View>
    </Pressable>
  );
}
