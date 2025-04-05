import { getPostData, getAllTags } from "../../lib/utilities";

export default async function PostPage({ params }) {
  const postData = await getPostData(params.slug);
  const tags = await getAllTags();

  return (
    <div
      className="relative left-1/2 transform -translate-x-1/2 flex w-[100%]
     divide-x max-w-5xl gap-5"
    >
      <article className="p-10 max-w-[calc(100%-200px)]">
        <h2 className="font-bold text-4xl flex items-center justify-center mb-6 pr-5">
          {postData.title}
        </h2>
        <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
      </article>

      <div className="max-w-[200px] w-full flex flex-col gap-10 right-0">
        <p className="flex flex-col font-semibold">
          Author<span className="font-light">{postData.author}</span>
        </p>

        <p className="flex flex-col font-semibold">
          Tags{" "}
          <span className="flex flex-col font-light">
            {Array.isArray(tags) &&
              tags.map((tag, index) => (
                <span key={index} className="">
                  - {tag}
                </span>
              ))}
          </span>
        </p>

        <p className="flex flex-col font-semibold">
          Date uploaded<span className="font-light">{postData.date}</span>
        </p>
      </div>
    </div>
  );
}
