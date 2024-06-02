import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
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
type Props = {
  data: {
    name: string;
    email: string;
    club: string;
    post: string;
    image: string;
  };
};
export default function ListTeamComponent(props: Props) {
  return (
    <View
      style={{
        marginBottom: 6,
        alignSelf: "center",
        width: Dimensions.get("window").width - 30,
        height: 85,
        borderRadius: 6,
        flex: 1,
        display: "flex",
        flexDirection: "row",
        elevation: 5,
        shadowColor: appColors.blue,
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
            uri: props.data.image,
          }}
        />
      </View>

      <View
        style={{
          flex: 0.7,
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
            fontSize: 14,

            color: appColors.black,
            fontWeight: "600",
            width: "100%",
          }}
        >
          {props.data.name}
        </Text>
        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Ionicons name="time-outline" size={12} color={appColors.blue} />
          <Text
            numberOfLines={1}
            style={{
              color: appColors.grey,
              fontSize: 10,
              marginLeft: 10,
              fontWeight: "500",
            }}
          >
            {props.data.post}
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
          <Feather name="user" size={12} color={appColors.blue} />
          <Text
            numberOfLines={1}
            style={{
              color: appColors.grey,
              fontSize: 10,
              marginLeft: 10,
              fontWeight: "500",
            }}
          >
            {props.data.club}{" "}
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
          <Feather name="user" size={12} color={appColors.blue} />
          <Text
            numberOfLines={1}
            style={{
              color: appColors.grey,
              fontSize: 10,
              marginLeft: 10,
              fontWeight: "500",
            }}
          >
            {props.data.email}
          </Text>
        </View>
      </View>
    </View>
  );
}
