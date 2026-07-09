const BlogHeader = (props) => {
  const title = props.title || props.header;
  const author = props.author || props.writer;

  return (
    <article className="flex flex-col gap-6 m-4 md:m-8 p-6 md:p-10 md:py-12 max-w-3xl mx-auto border border-slate-100 bg-white rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] [&_a]:text-blue-500 [&_a:hover]:underline [&_h3]:text-2xl [&_h3]:font-bold [&_h3]:mt-8 [&_h3]:mb-4 [&_p]:text-[17px] [&_p]:md:text-lg [&_p]:leading-loose [&_p]:text-slate-800 [&_p]:mb-6">
      <h2 className="text-3xl md:text-4xl font-black text-slate-900 pb-6 border-b border-slate-200">
        {title}
      </h2>
      {author && (
        <p className="text-right text-sm text-slate-500 font-medium">
          작성자: <span className="text-primary-500 font-bold">{author}</span>
        </p>
      )}
      <div className="text-slate-800">{props.children}</div>
    </article>
  );
};

export default BlogHeader;
