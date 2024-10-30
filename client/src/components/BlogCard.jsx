export function BlogCard(props) {
  return (
    <div className="flex flex-row gap-7 px-12 py-6">
      <div className="Photo-blog">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <img
            className="object-cover rounded-2xl h-48 w-[450px]"
            src={props.photo}
            alt={props.title}
          />
        </a>
      </div>
      <div className="flex flex-col w-full">
        <a href={props.url} target="_blank" rel="noopener noreferrer">
          <h2 className="text-start font-semibold text-xl mb-2 hover:underline">
            {props.title}
          </h2>
        </a>
        <div className="Description h-5">
          <p className="text-sm mb-4 flex-grow text-gray-500 line-clamp-1">
            {props.description}
          </p>
        </div>
        <a
          href={props.url}
          target="_blank"
          rel="noopener noreferrer"
          className="underline text-[#2F9DCF]"
        >
          อ่านต่อ
        </a>
        <div className="flex">
          <span className="rounded-full px-3 py-1 text-sm font-semibold text-gray-600 mb-2">
            {props.tags}
          </span>
        </div>
        <div className="flex items-center text-sm">
          <img className="Other-image" src={props.othersphoto} />
        </div>
      </div>
    </div>
  );
}
