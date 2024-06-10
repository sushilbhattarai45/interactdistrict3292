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
    content: {
      rendered: string;
    };

    title: {
      rendered: string;
    };
    // _links: {
    //   self: {
    //     href: string;
    //   }[];
    // };
  };
};
export default function ListTeamComponent(props: Props) {
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
            uri:
              "https://interactnepal.org/wp-content/uploads/2023/07/IMG_2747-scaled-e1692166948864.jpeg",
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
                fontSize: 16,

                color: appColors.black,
                fontWeight: "600",
                width: "100%",
              }}
            >
              {/* {props.data?.title?.rendered} */}
              Sushil Bhattarai
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
            District Information Technology Officer
            {/* {props.data.post} */}
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
              Interact Club of Kalika
              {/* {props.data?.content?.rendered}{" "} */}
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
              sushilbhattarai0054@gmail.com
              {/* {props.data.email} */}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
