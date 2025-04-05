import Link from "next/link";
import Card from "./Card";

const BlogClient = ({ allPostsData, allTags }) => {
  return (
    <div className="container mx-auto sm:px-4 max-w-2xl sm:mt-10 mt-4 px-5">
      <h2 className="font-bold text-3xl sm:text-5xl flex items-center justify-center">
        Blog
      </h2>
      <p className="sm:mt-8 mt-4 justify-center text-center">
        Incessant yapping about frontend, texh, hacks. and life's nuances
        manifested in its textual form.
      </p>

      <h3 className="font-semibold text-2xl mt-4 sm:mt-8">Articles</h3>

      <ul className="mt-4 divide-y divide-neutral-700">
        {allPostsData.map(
          ({ id, slug, title, date, tags, summary, author }) => (
            <li key={id}>
              <Card data={{ id, slug, title, date, tags, summary, author }} />
            </li>
          )
        )}
      </ul>
    </div>
  );
};

export default BlogClient;
