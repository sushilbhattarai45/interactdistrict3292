import React from "react";
import { View, Text, Image, Dimensions, Pressable } from "react-native";
import appColors from "./colors/colors";
import { Entypo, Ionicons } from "@expo/vector-icons";

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
                        width: 100,
                        minHeight: 50,
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
                        fontSize: 14,
                        color: appColors.grey,
                        fontWeight: "700",
                    }}
                >
                    {props.data.title.rendered}
                </Text>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                        flexDirection: "row",
                    }}
                >
                    <View style={{}}>
                        <Entypo name="home" size={12} color={appColors.blue} />
                    </View>
                    <View>
                        <Text
                            numberOfLines={1}
                            style={{
                                color: appColors.grey,
                                fontSize: 12,
                                marginLeft: 4,
                                fontWeight: "500",
                            }}
                        >
                            Interact Club of XYZ
                        </Text>
                    </View>
                </View>
                <View
                    style={{
                        justifyContent: "center",
                        alignItems: "center",
                        alignContent: "center",
                        flexDirection: "row",
                    }}
                >
                    <View style={{}}>
                        <Ionicons name="time" size={12} color={appColors.blue} />
                    </View>
                    <View>
                        <Text
                            numberOfLines={1}
                            style={{
                                color: appColors.grey,
                                fontSize: 12,
                                marginLeft: 4,
                                fontWeight: "500",
                            }}
                        >
                            {moment(props.data.date).fromNow()}
                        </Text>
                    </View>
                </View>
            </View>
        </Pressable>
    );
}
