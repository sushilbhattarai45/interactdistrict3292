import axios from "axios";
import { ToastAndroid } from "react-native";

const instance = axios.create({
    baseURL: "https://interactnepal.org/wp-json/wp/v2/",
    headers: {
        "Content-Type": "application/json",
    },
});

instance.interceptors.request.use(
    (config) => {
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export async function getProjects() {
    let projects = await instance.get("posts?per_page=100");

    if (projects) {
        return projects.data;
    }
}

export async function getProject(id: number) {
    let project = await instance.get(`posts/${id}`);
    if (project) {
        return project.data;
    }
}


export async function getCategories() {
    let categories = await instance.get('categories');
    if (categories)
        return categories.data
}
