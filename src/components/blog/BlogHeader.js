const BlogHeader = (props) => {
  const title = props.title || props.header;
  const author = props.author || props.writer || props.quthor;

  return (
    <article className="flex flex-col gap-6 m-4 md:m-8 p-6 md:p-10 max-w-4xl mx-auto border border-slate-100 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] [&_a]:text-blue-500 [&_a:hover]:underline [&_img]:w-full [&_img]:h-auto [&_img]:object-contain [&_img]:rounded-xl [&_img]:my-6 [&_h3]:text-xl [&_h3]:font-bold [&_h3]:mt-6 [&_h3]:mb-3 [&_p]:leading-relaxed [&_p]:text-slate-700 [&_p]:mb-4">
      <h2 className="text-2xl md:text-3xl font-bold text-slate-800 pb-4 border-b border-slate-200">{title}</h2>
      {author && (
        <p className="text-right text-sm text-slate-500 font-medium">
          작성자: <span className="text-primary-500 font-bold">{author}</span>
        </p>
      )}
      <div className="text-slate-800">
        {props.children}
      </div>
    </article>
  );
};

export default BlogHeader;
