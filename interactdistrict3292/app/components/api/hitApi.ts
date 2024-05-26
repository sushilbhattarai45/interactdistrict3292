import axios from "axios";

export async function getProjects() {
  let projects = await axios.get(
    "https://interactnepal.org/wp-json/wp/v2/posts?per_page=100&page=1"
  );

  if (projects) {
    return projects.data;
  }
}
