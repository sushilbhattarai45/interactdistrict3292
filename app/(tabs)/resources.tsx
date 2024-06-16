import React, { useState, useEffect } from "react";
import {
    View,
    Easing,
    Text,
    Platform,
    StatusBar as RNStatusBar,
    SafeAreaView,
    Dimensions,
    Animated,
    ScrollView,
    Pressable,
    Linking,
} from "react-native";
import Header from "../components/header";
import appColors from "../components/colors/colors";
import { Entypo } from "@expo/vector-icons";
const Resources = () => {
    const [spinValue] = useState(new Animated.Value(0));

    const resources = [
        {
            title: "Standard Interact Club Constitution",
            description: "(For Interact Clubs)",
            url:
                "https://interactnepal.org/wp-content/uploads/2023/09/656_interact_club_standard_constitution_en-1.pdf",
        },
        {
            title: "Recommended Interact Club Bylaws",
            description: "(For Interact Clubs)",
            url:
                "http://interactnepal.org/wp-content/uploads/2023/09/657_interact_club_recommended_bylaws_en-3-1.docx",
        },
        {
            title: "Charter Ceremony Format",
            description: "(For Interact Clubs)",
            url:
                "http://interactnepal.org/wp-content/uploads/2023/09/Charter-Ceremony-Format.pdf",
        },
        {
            title: "Example Minutes",
            description: "(For Secretary)",
            url:
                "http://interactnepal.org/wp-content/uploads/2023/09/Example-Minutes.pdf",
        },
        {
            title: "Event Report Format",
            description: "(For Secretary)",
            url:
                "http://interactnepal.org/wp-content/uploads/2023/09/Event-Report-Format-2023-24.pdf",
        },
        {
            title: "Example Report",
            description: "(For Secretary)",
            url:
                "http://interactnepal.org/wp-content/uploads/2022/09/CLub-Installation-Proper-Format.pdf",
        },
        {
            title: "Letterhead Example",
            description: "(For Interact Clubs)",
            url:
                "https://docs.google.com/document/d/1Fwm4bMX8LyMWq7hRGyIn9npDk3JpcmfA/edit?usp=sharing&ouid=107204186249707484312&rtpof=true&sd=true",
        },
        {
            title: "Vibrant Club Calculator",
            description: "(For Interact Clubs)",
            url:
                "https://docs.google.com/spreadsheets/d/1qlEUlNEKakMlBd5BvIofbZYYCMLkX3K9/edit?usp=sharing&ouid=107204186249707484312&rtpof=true&sd=true",
        },
        {
            title: "Meeting Minutes Example",
            description: "(For Interact Clubs)",
            url:
                "http://interactnepal.org/wp-content/uploads/2023/09/Meeting-minutes-Final.pdf",
        },
        {
            title: "District Logos",
            description: "(For Interact Clubs)",
            url:
                "https://drive.google.com/drive/folders/1Hzj5TGYSfsgBvJpXXi54slkrFvmi939j?usp=sharing",
        },
    ];

    const startAnimation = () => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                duration: 5000,
                easing: Easing.linear,
                useNativeDriver: true,
            })
        ).start();
    };

    useEffect(() => {
        startAnimation();
    }, []);
    return (
        <SafeAreaView
            style={{
                backgroundColor: appColors.white,
                flex: 1,
            }}
        >
            <View style={{
                flex: 1,
                paddingHorizontal: 16,
                paddingTop:
                    Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
            }}>
                <Header title="Resources" />


                <ScrollView
                    showsVerticalScrollIndicator={false}
                >
                    {resources.map((resource, index) => (
                        <Pressable
                            onPress={() => {
                                Linking.openURL(resource.url);
                            }}
                            style={{
                                flexDirection: "row",
                                alignItems: "center",
                                paddingVertical: 12,
                                borderBottomWidth: 0.2,
                                borderColor: appColors.grey,
                                justifyContent: "space-between"

                            }}
                        >
                            <View>
                                <Text
                                    style={{
                                        fontSize: 14,
                                        fontWeight: "600",
                                        color: appColors.black,
                                    }}
                                >
                                    {resource.title}{" "}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 12,
                                        color: appColors.grey,
                                    }}
                                >
                                    {resource.description}{" "}
                                </Text>
                            </View>
                            <View
                                style={{
                                    justifyContent: "center",
                                    alignContent: "center",
                                    alignItems: "center",
                                    padding: 10,
                                }}
                            >
                                <Entypo name="link" size={18} color={appColors.blue} />
                            </View>
                        </Pressable>
                    ))}
                </ScrollView>
            </View>
        </SafeAreaView>
    );
};

export default Resources;
