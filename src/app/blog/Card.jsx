export default function Card({ data }) {
  return (
    <a
      href={`/blog/${data.slug}`}
      className=" relative flex flex-row gap-5 pb-6 mb-6 border-b border-gray-200 last:pb-0 last:mb-0 last:border-b-0 hover:shadow-2xl hover:bg-neutral-800/50 rounded-xl transition ease-in-out duration-300"
    >
      <div className="relative shrink-0 w-24 sm:w-32">
        <img
          className="shrink-0 w-full h-40 object-cover rounded-tl-xl rounded-bl-xl bg-neutral-800"
          src={data.image}
        />
      </div>

      <div className="grow">
        <div className="mb-3 sm:flex sm:gap-3">
          <div className="grow">
            <h4 className="text-neutral-200 text-lg underline">{data.title}</h4>

            <p className="mt-1 text-sm text-neutral-200">{data.summary}</p>
            <p className="mt-1 text-sm text-neutral-200">- {data.author}</p>
          </div>
        </div>

        <div
          className="mt-5 flex flex-wrap items-center gap-2 py-1.5 px-2.5 bg-neutral-900  
          text-neutral-300 capitalize rounded-lg shadow-2xs w-fit"
        >
          {Array.isArray(data.tags) &&
            data.tags.map((tag, index) => (
              <p
                key={index}
                className="relative inline-flex justify-center items-center 
                text-xs sm:text-[13px] "
              >
                -{tag}
              </p>
            ))}
        </div>
      </div>
    </a>
  );
}
