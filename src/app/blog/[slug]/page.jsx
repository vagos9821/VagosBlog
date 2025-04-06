import { getPostData, getAllTags } from "../../lib/utilities";

export default async function PostPage({ params }) {
  const postData = await getPostData(params.slug);
  const tags = await getAllTags();

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="relative max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row gap-10">
          {/* Main content */}
          <article className="w-full md:w-3/4 p-6">
            <h1 className="font-bold text-3xl md:text-4xl mb-6 text-center md:text-left">
              {postData.title}
            </h1>
            <div
              className="prose prose-lg max-w-none"
              dangerouslySetInnerHTML={{ __html: postData.contentHtml }}
            />
          </article>

          {/* Sidebar - sticky on desktop */}
          <aside className="w-full md:w-1/4 md:sticky md:top-20 self-start h-fit border-l border-gray-200">
            <div className="p-6 space-y-6">
              <div>
                <h3 className="font-semibold text-lg mb-2">Author</h3>
                <p className="text-gray-300">{postData.author}</p>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Tags</h3>
                <ul className="space-y-1">
                  {Array.isArray(postData.tags) &&
                    postData.tags.map((tag, index) => (
                      <li
                        key={index}
                        className="text-gray-300 flex items-center"
                      >
                        <span className="w-2 h-2 bg-[#AEC157] rounded-full mr-2"></span>
                        {tag}
                      </li>
                    ))}
                </ul>
              </div>

              <div>
                <h3 className="font-semibold text-lg mb-2">Date</h3>
                <p className="text-gray-300">{postData.date}</p>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
