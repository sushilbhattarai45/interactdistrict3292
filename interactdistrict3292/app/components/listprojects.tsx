import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import appColors from "./colors/colors";
import {
    Ionicons,
} from "@expo/vector-icons";

import moment from "moment";
import { router } from "expo-router";
type Props = {
    data: {
        id: number;
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
                router.push({
                    pathname: "screens/viewProject",
                    params: {
                        id: props.data.id,
                    },
                });
            }}
            style={{
                alignSelf: "center",
                width: Dimensions.get("window").width - 30,
                borderRadius: 6,
                flexDirection: "row",
                backgroundColor: appColors.white,
                paddingVertical: 8,
                gap: 10,
            }}
        >
            <View>
                <Image
                    style={{
                        flex: 1,
                        width: 120,
                        minHeight: 80,
                        maxHeight: 120,
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
                    flex: 1,
                    alignItems: "flex-start",
                }}
            >
                <Text
                    numberOfLines={2}
                    style={{
                        fontFamily: "Roboto",
                        fontSize: 16,
                        color: appColors.black,
                        fontWeight: "bold",
                    }}
                >
                    {props.data.title.rendered}
                </Text>

                <Text
                    numberOfLines={1}
                    style={{
                        marginTop: 2,
                        color: appColors.grey,
                        fontSize: 14,
                    }}
                >By Interact Club of XYZ</Text>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        flexDirection: "row",
                        gap: 4,
                        marginTop: 8,
                    }}
                >
                    <Ionicons name="time-outline" size={14} color={appColors.grey} />
                    <Text
                        numberOfLines={1}
                        style={{
                            color: appColors.grey,
                            fontSize: 12,
                        }}
                    >
                        {moment(props.data.date).fromNow()}
                    </Text>
                </View>

            </View>
        </Pressable>
    );
}
