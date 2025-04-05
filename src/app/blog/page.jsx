import BlogClient from "./BlogClient";
import { getAllPostsData, getAllTags } from "../lib/utilities";

export const metadata = {
  title: "Blog",
  description: "My blog",
  url: "/blog",
};

export default async function BlogPage() {
  const allPostsData = await getAllPostsData();
  const allTags = await getAllTags();

  return <BlogClient allPostsData={allPostsData} allTags={allTags} />;
}
