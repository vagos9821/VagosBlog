import fs from "fs";
import matter from "gray-matter";
import path from "path";
import { remark } from "remark";
import html from "remark-html";

const postsDirectory = path.join(process.cwd(), "posts");

/**
 *Retrieves and processes all markdown posts data from posts directory.
 *
 * @returns {Array<Object>} Sorted array of post data objects, each containging id, slug and other metadata.
 */
const getAllPostsData = () => {
  const fileNames = fs.readdirSync(postsDirectory);

  const allPostsData = fileNames.map((fileName) => {
    const id = fileName.replace(/\.md$/, "");
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    return {
      id,
      slug: matterResult.data.slug,
      ...matterResult.data,
    };
  });

  return allPostsData.sort((a, b) => (a.date < b.date ? 1 : -1));
};

/**
 *Retrieves the post data for a given slug.
 *
 * @param {string} slug - The slug of the post to retrieve.
 * @returns {Promise<Object>} The post data including slug, contentHtml and other metadata.
 * @throws {Error} If the post with the given slug is found.
 */
async function getPostData(slug) {
  const fileNames = fs.readdirSync(postsDirectory);
  const matchedFiles = fileNames.find((fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);
    return matterResult.data.slug === slug;
  });

  if (!matchedFiles) {
    throw new Error(`Post with slug '${slug}' not found`);
  }

  const fullPath = path.join(postsDirectory, matchedFiles);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const matterResult = matter(fileContents);
  const processedContent = await remark()
    .use(html)
    .process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    id: matchedFiles.replace(/\.md$/, ""),
    contentHtml,
    ...matterResult.data,
  };
}

/**
 * Retrieves all unique tags from the blog posts.
 *
 * @returns {String<[]>} Array of unique tags.
 */
const getAllTags = () => {
  const fileNames = fs.readdirSync(postsDirectory);
  const allTags = fileNames.reduce((acc, fileName) => {
    const fullPath = path.join(postsDirectory, fileName);
    const fileContents = fs.readFileSync(fullPath, "utf8");
    const matterResult = matter(fileContents);

    if (matterResult.data.tags && Array.isArray(matterResult.data.tags)) {
      acc.push(...matterResult.data.tags);
    }

    return acc;
  }, []);

  return Array.from(new Set(allTags));
};

export { getAllPostsData, getPostData, getAllTags };
