import React from "react";
import { View, Text, Image, Dimensions } from "react-native";
import appColors from "./colors/colors";
export default function Header() {
    return (
        <View
            style={{
                paddingBottom: 12,
                borderBottomWidth: 0.3,
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                alignItems: "flex-end",
                borderColor: appColors.grey,
            }}
        >
            <Text style={{ fontSize: 18, fontWeight: "bold" }}>
                Interact District 3292
            </Text>
            <Image
                style={{
                    width: 30,
                    height: 30,
                    alignContent: "center",
                    resizeMode: "contain",
                }}
                source={require("../../assets/images/halftheme.png")}
            />
        </View>
    );
}
