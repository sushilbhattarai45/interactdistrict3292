import React, { useEffect } from "react";
import {
    StyleSheet,
    View,
    Text,
    Image,
    ScrollView,
    Dimensions,
    StatusBar,
} from "react-native";
import NavBar from "../components/navBar";
import { getProject } from "../components/api/hitApi";
import RenderHTML from "react-native-render-html";
import { useLocalSearchParams } from "expo-router";
import appColors from "../components/colors/colors";

type Project = {
    id: number;
    title: {
        rendered: string;
    };
    author_info: {
        name: string;
        url: string;
    };
    content: {
        rendered: string;
    };
    date: string;
    type: string;
    featured_image_urls: {
        thumbnail: [string, number, number, boolean];
        large: [string, number, number, boolean];
    };
};
const ViewProject = () => {
    //type id correctly
    const { id } = useLocalSearchParams<{ id: string }>();
    const [project, setProject] = React.useState<Project | null>(null);
    const [images, setImages] = React.useState<any | null>([]);
    const screenWidth = Dimensions.get("window").width;

    const removeImagesFromContent = (content: string) => {
        //grab whole image tag and remove from content
        let regex = /<img.*?src="(.*?)".*?>/g;
        let images: string[] = [];
        let newContent = content.replace(regex, (match, p1) => {
            images.push(p1);
            return "";
        });
        ////remove all figure tags also with line breaks and empty spaces bewteen them
        newContent = newContent.replace(/<figure.*?>.*?<\/figure>/ig, '');

        newContent = newContent.replace(/<\/?figure\b[^>]*>/gi, '');;

        newContent = newContent.replace(/<(\w+)\b[^>]*>\s*<\/\1>/gi, '')

        //remove ending empty spaces from content 
        newContent = newContent.trim().replace(/^\s\n+|\s\n+$/g, '');



        images.forEach((image, index) => {
            let match = image.match(/src="(.*?)"/);
            if (match) {
                images[index] = match[1];
            }
        }
        );

        setImages(images);
        return newContent;


    }

    useEffect(() => {
        async function getProjectInfo() {
            if (!id) {
                return;
            }
            let response = await getProject(parseInt(id));

            response.content.rendered = removeImagesFromContent(response.content.rendered);

            setProject(response);
        }
        getProjectInfo();

    }, []);

    return (
        <View style={{ flex: 1 }}>
            <ScrollView
                style={{
                    flex: 1,
                }}
            >
                <View
                    style={{
                        flex: 1,
                        position: "relative",
                    }}
                >
                    <NavBar />
                    <View
                        style={{
                            height: 300,
                        }}
                    >
                        <Image
                            source={{
                                uri: project?.featured_image_urls?.large[0] || 'https://via.placeholder.com/150',
                            }}


                            style={{
                                width: "100%",
                                height: "100%",
                                resizeMode: "cover",
                            }}
                        />
                    </View>
                    <View
                        style={{
                            marginVertical: 8,
                            paddingHorizontal: 16,
                        }}
                    >
                        <Text
                            style={{
                                fontSize: 22,
                                fontWeight: "bold",
                                color: "black",
                            }}
                        >
                            {project?.title?.rendered}
                        </Text>
                        <Text
                            style={{
                                fontSize: 14,
                                color: appColors.blue,
                                marginTop: 4,
                            }}
                        >
                            {project?.author_info?.name}
                        </Text>

                        <RenderHTML
                            baseStyle={{ fontSize: 16, color: "black", lineHeight: 22 }}
                            source={{
                                html: project?.content?.rendered || '',
                            }}
                            contentWidth={Dimensions.get("window").width - 32}
                        />
                        {/* //if images is greater than 9 than 3 column layout else 2 column layout */}
                        <View style={{ marginVertical: 8, }}>
                            <View
                                style={{
                                    flexDirection: "row",
                                    flexWrap: "wrap",
                                    justifyContent: "space-between",
                                    gap: 8,
                                }}
                            >
                                {images.map((image: string, index: number) => (
                                    <Image
                                        key={index}
                                        source={{
                                            uri: image,
                                        }}
                                        style={{
                                            width: images.length > 9 ? (screenWidth - 32) / 3 - 6 : (screenWidth - 32) / 2 - 4,
                                            height: 0,
                                            aspectRatio: 1,
                                            resizeMode: "cover",
                                            borderRadius: 8,
                                        }}
                                    />
                                ))}
                            </View>
                        </View>
                    </View>
                </View>
            </ScrollView>

        </View>
    );
};


export default ViewProject;
