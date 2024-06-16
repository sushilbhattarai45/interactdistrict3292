import React, { useEffect } from "react";
import {
    Image,
    StyleSheet,
    Platform,
    View,
    Text,
    ScrollView,
    SafeAreaView,
    TouchableOpacity,
    Dimensions,
    FlatList,
    Pressable,
    StatusBar as RNStatusBar,
} from "react-native";
import { router } from "expo-router";
import ListProjectComponent from "../components/listprojects";
import appColors from "../components/colors/colors";
import { getCategories, getProjects } from "../components/api/hitApi";
import SearchBar from "../components/searchBar";
import Header from "../components/header";

export default function HomeScreen() {
    const [projects, setProjects] = React.useState<any[]>([]);
    const [choosenFilter, setChoosenFilter] = React.useState(0);
    const [filterProjects, setFilterProjects] = React.useState<any>([]);
    const [categores, setCategories] = React.useState<any[]>([])

    useEffect(() => {
        async function getCategoryList() {
            let response = await getCategories()
            setCategories([{ name: 'All', id: 0 }, ...response])
        }
        async function getProjectsInfo() {
            let response = await getProjects();
            setProjects(response);
            console.log(JSON.stringify(response[0], null, 4))
            setFilterProjects(response);
        }
        getProjectsInfo();
        getCategoryList()
    }, []);

    const handleCategoryChange = (categoryID: number) => {
        if (categoryID == choosenFilter) return
        setFilterProjects([])
        setChoosenFilter(categoryID)
        if (categoryID == 0) {
            setFilterProjects(projects)
            return
        }

        setFilterProjects(projects.filter((project) => {
            return project.categories.includes(categoryID)
        }
        ))
    }

    return (
        <SafeAreaView
            style={{
                flex: 1,
                padding: 10,
                backgroundColor: "white",
                paddingTop: Platform.OS === "android" ? RNStatusBar.currentHeight : 0,
            }}
        >
            <RNStatusBar backgroundColor="#fff" barStyle="dark-content" />
            <ScrollView
                stickyHeaderIndices={[2]}
                contentContainerStyle={{
                    backgroundColor: appColors.white
                }}
                style={{
                    flex: 1,
                    paddingHorizontal: 10,
                }}>
                <Header />
                <View
                    style={{
                        justifyContent: "flex-start",
                        alignItems: "flex-start",
                        marginVertical: 16,
                    }}
                >
                    <FlatList
                        initialNumToRender={10}
                        showsHorizontalScrollIndicator={false}
                        horizontal
                        data={projects.slice(0, 10)}
                        renderItem={({ item, index }) => (
                            <TouchableOpacity
                                onPress={() => {
                                    router.push({
                                        pathname: "screens/viewProject",
                                        params: {
                                            id: item.id,
                                        },
                                    });
                                }}
                                activeOpacity={0.8}
                                style={{
                                    flex: 1,
                                    width: Dimensions.get("window").width - 50,
                                    height: 180,
                                    display: "flex",
                                    marginRight: 10,
                                    alignSelf: "center",
                                    borderRadius: 10,
                                    backgroundColor: appColors.black,
                                }}
                            >
                                <Image
                                    style={{
                                        borderRadius: 10,
                                        width: "100%",
                                        resizeMode: "cover",
                                        opacity: 0.7,
                                        backgroundColor: appColors.black,
                                    }}
                                    height={180}
                                    source={{
                                        uri: item?.featured_image_urls?.medium_large[0],
                                    }}
                                />
                                <Text
                                    style={{
                                        fontFamily: "Roboto",
                                        fontSize: 15,
                                        elevation: 5,
                                        shadowColor: appColors.blue,
                                        shadowOffset: { width: 0, height: 2 },
                                        shadowOpacity: 0.25,
                                        shadowRadius: 3.84,
                                        margin: 10,
                                        marginTop: -50,
                                        width: 270,
                                        fontWeight: "800",
                                        color: appColors.white,
                                        alignSelf: "flex-start",
                                    }}
                                    numberOfLines={2}
                                >
                                    {item?.title?.rendered}
                                </Text>
                            </TouchableOpacity>
                        )}
                        keyExtractor={(item) => `Scroll-${item.id}`}
                    />
                </View>

                <View style={{ backgroundColor: appColors.white }}>
                    <SearchBar projects={projects} setFilterProjects={setFilterProjects} />

                    <View style={{ marginVertical: 5 }}>
                        <ScrollView
                            showsHorizontalScrollIndicator={false}
                            horizontal
                            contentContainerStyle={{
                                gap: 8,
                                marginTop: 4,
                            }}
                        >
                            {categores?.map((filterOption, index) => (

                                <Pressable
                                    onPress={() => {
                                        handleCategoryChange(filterOption.id)
                                    }}
                                    key={`Chips-${index}`}
                                    style={{
                                        paddingHorizontal: 20,
                                        paddingVertical: 10,
                                        backgroundColor:
                                            filterOption.id === choosenFilter ? appColors.blue
                                                : appColors.boxGrey,
                                        borderRadius: 8,
                                        justifyContent: "center",
                                        alignItems: "center",
                                    }

                                    }
                                >
                                    <Text
                                        style={{
                                            color:
                                                filterOption.id === choosenFilter
                                                    ? appColors.white
                                                    : appColors.grey,
                                            fontSize: 12,
                                            fontWeight: "700",
                                        }}
                                    >
                                        {filterOption.name}
                                    </Text>
                                </Pressable>
                            ))}
                        </ScrollView>
                    </View>
                </View>

                <FlatList
                    data={filterProjects}
                    renderItem={({ item }) => <ListProjectComponent data={item} />}
                    keyExtractor={(item) => "Project" + item.id}
                />

            </ScrollView>
        </SafeAreaView >
    );
}

