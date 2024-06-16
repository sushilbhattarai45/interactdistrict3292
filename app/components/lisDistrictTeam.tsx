import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import appColors from "./colors/colors";
import {
    Entypo,
} from "@expo/vector-icons";

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
                width: "100%",
                marginBottom: 6,
                borderRadius: 6,
                display: "flex",
                flexDirection: "row",
                backgroundColor: appColors.boxGrey,
                overflow: "hidden",
                alignItems: "flex-start",
            }}
        >
            <Image
                style={{
                    width: 90,
                    aspectRatio: 8 / 9,
                    resizeMode: "cover",
                }}
                source={{
                    uri: props.data.image,
                }}
            />
            <View
                style={{
                    padding: 10,
                    display: "flex",
                    flexDirection: "column",
                    flex: 1,
                    alignItems: "flex-start",
                    gap: 4

                }}
            >
                <Text
                    numberOfLines={1}
                    style={{
                        fontSize: 15,
                        color: appColors.grey,
                        fontWeight: "800",
                        width: "100%",
                    }}
                >
                    {props.data.name}
                </Text>

                <Text
                    style={{
                        flex: 1,
                        color: appColors.grey,
                        fontSize: 12,
                        fontWeight: "500",
                    }}
                >
                    {designation}
                </Text>

                <View
                    style={{
                        flexDirection: "row",
                        alignContent: "flex-start",
                        alignItems: "center",
                    }}
                >
                    <Entypo name="home" size={12} color={appColors.blue} />
                    <Text
                        style={{
                            color: appColors.grey,
                            fontSize: 12,
                            marginLeft: 4,
                            fontWeight: "500",
                        }}
                    >
                        {props.data.homeClub}
                    </Text>
                </View>
                <View
                    style={{
                        flexDirection: "row",
                        alignContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Entypo name="mail" size={12} color={appColors.blue} />
                    <Text
                        numberOfLines={1}
                        style={{
                            color: appColors.grey,
                            fontSize: 12,
                            marginLeft: 4,
                            fontWeight: "500",
                        }}
                    >
                        {props.data.mail}
                    </Text>
                </View>
            </View>
        </View>
    );
}
