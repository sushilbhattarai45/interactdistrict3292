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
  Entypo,
} from "@expo/vector-icons";

import moment from "moment";
type Props = {
  data: {
    name: string;
    designation: string;
    mail: string;
    homeClub: string;
    image: string;
  };
};
const capitalizeFirstLetter = (text: string) => {
  return text
    .split(" ")
    .map((word: string) => {
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    })
    .join(" ");
};

export default function ListTeamComponent(props: Props) {
  let designation = capitalizeFirstLetter(props.data.designation);
  return (
    <View
      style={{
        marginBottom: 6,
        alignSelf: "center",
        width: Dimensions.get("window").width - 30,
        height: 90,
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
          // source={{
          //   uri: props.data._links.self[0].href,
          // }}
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
        <View
          style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            width: "100%",
            alignItems: "center",
          }}
        >
          <View>
            <Text
              numberOfLines={1}
              style={{
                fontSize: 15,
                color: appColors.grey,
                fontWeight: "800",
                width: "100%",
              }}
            >
              {/* {props.data?.title?.rendered} */}
              {props.data.name}
            </Text>
          </View>
          {/* <View
            style={{
              alignItems: "flex-end",
            }}
          >
            <Entypo name="globe" size={12} color={appColors.blue} />
          </View> */}
        </View>

        <View
          style={{
            justifyContent: "center",
            flexDirection: "row",
            alignContent: "center",
            alignItems: "center",
          }}
        >
          <Text
            numberOfLines={1}
            style={{
              color: appColors.grey,
              fontSize: 12,
              fontWeight: "500",
            }}
          >
            {designation}
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
          <View>
            <Entypo name="home" size={12} color={appColors.blue} />
          </View>
          <View>
            <Text
              numberOfLines={1}
              style={{
                color: appColors.grey,
                fontSize: 12,
                marginLeft: 10,
                fontWeight: "500",
              }}
            >
              {props.data.homeClub} {/* {props.data?.content?.rendered}{" "} */}
            </Text>
          </View>
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
          <View style={{}}>
            <Entypo name="mail" size={12} color={appColors.blue} />
          </View>
          <View style={{}}>
            <Text
              numberOfLines={1}
              style={{
                color: appColors.grey,
                fontSize: 12,
                marginLeft: 10,
                fontWeight: "500",
              }}
            >
              {props.data.mail}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
