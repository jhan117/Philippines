import { ReactNode } from "react";

interface BlogHeaderProps {
  header: string;
  writer?: string;
  children: ReactNode;
}

const BlogHeader = ({ header, writer, children }: BlogHeaderProps) => {
  return (
    <article className="flex flex-col gap-6 px-5 sm:px-8 max-w-3xl mx-auto [&_a]:text-blue-600 [&_a:hover]:underline">
      <header className="flex flex-col gap-3 pb-8 border-b border-slate-200 mb-2">
        <h1 className="text-3xl md:text-4xl font-bold text-slate-900 leading-snug">
          {header}
        </h1>
        {writer && (
          <p className="text-sm text-slate-500 mt-1">
            작성자: <span className="font-medium text-slate-700">{writer}</span>
          </p>
        )}
      </header>
      <div className="text-slate-800 flex flex-col gap-2">{children}</div>
    </article>
  );
};

export default BlogHeader;
