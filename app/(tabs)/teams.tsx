import {
    Animated,
    Easing,
    Dimensions,
    Platform,
    StatusBar as RNStatusBar,
} from "react-native";
import React, { useEffect, useState } from "react";
import { FlatList, Image, SafeAreaView, Text, View } from "react-native";
import ListTeamComponent from "../components/lisDistrictTeam";
import Header from "../components/header";
import appColors from "../components/colors/colors";
import TeamData from "../components/teamsJson.json";
export default function Teams() {
    const [spinValue] = useState(new Animated.Value(0));

    const startAnimation = () => {
        Animated.loop(
            Animated.timing(spinValue, {
                toValue: 1,
                easing: Easing.linear,
                useNativeDriver: true,
                duration: 5000
            })
        ).start();
    };

    useEffect(() => {
        startAnimation();
    }, []);

    return (
        <SafeAreaView
            style={{
                flex: 1,
                padding: 10,
                paddingTop:
                    Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
                backgroundColor: appColors.white,
            }}
        >
            <View style={{
                marginHorizontal: 16,
            }}>
                <Header title="District Team" />
                <FlatList
                    style={{
                        zIndex: 1,
                        paddingTop: 16,
                    }}
                    contentContainerStyle={{
                        paddingBottom: 60,
                        gap: 4,
                    }}
                    showsVerticalScrollIndicator={false}
                    data={TeamData}
                    initialNumToRender={10}
                    renderItem={({ item }) => <ListTeamComponent data={item} />}
                /></View>
        </SafeAreaView >
    );
}
