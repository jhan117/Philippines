const BlogHeader = (props) => {
  const title = props.title || props.header;
  const author = props.author || props.writer;

  return (
    <article className="flex flex-col gap-6 px-5 sm:px-8 max-w-3xl mx-auto [&_a]:text-blue-600 [&_a:hover]:underline [&_p]:text-[17px] [&_p]:md:text-lg [&_p]:leading-relaxed [&_p]:text-slate-800 [&_p]:mb-4">
      <header className="flex flex-col gap-3 pb-8 border-b border-slate-200 mb-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
          {title}
        </h1>
        {author && (
          <p className="text-sm text-slate-500 mt-2">
            작성자: <span className="font-medium text-slate-700">{author}</span>
          </p>
        )}
      </header>
      <div className="text-slate-800 flex flex-col gap-2">{props.children}</div>
    </article>
  );
};

export default BlogHeader;
