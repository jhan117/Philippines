"use client";

import InterviewPage from "./InterviewPage";
import { ContentBlock } from "@/data/types";

export const ContentRenderer = ({ blocks }: { blocks: ContentBlock[] }) => {
  if (!blocks || !Array.isArray(blocks)) return null;

  return (
    <div className="flex flex-col gap-4">
      {blocks.map((block, idx) => {
        switch (block.type) {
          case "paragraph":
            if (typeof block.text === "string" && block.text.startsWith("- ")) {
              return (
                <ul
                  key={idx}
                  className="list-disc list-inside my-1 text-slate-700 text-[17px] md:text-lg leading-relaxed ml-2"
                >
                  <li>{block.text.replace(/^-\s*/, "")}</li>
                </ul>
              );
            }
            return (
              <p key={idx} className="text-slate-700 leading-relaxed">
                {block.text}
              </p>
            );
          case "hr":
            return <hr key={idx} className="my-6 border-slate-200" />;
          case "bullet-list":
            return (
              <ul
                key={idx}
                className="flex flex-col gap-3 pl-5 md:pl-8 text-slate-800 text-[17px] md:text-lg leading-loose list-disc list-inside"
              >
                {(block.items || []).flat(Infinity).map((item, i) => (
                  <li key={i} className="pl-1 -indent-5 ml-5">
                    {typeof item === "string"
                      ? item.replace(/^-\s*/, "")
                      : item}
                  </li>
                ))}
              </ul>
            );
          case "image":
            return (
              <div
                key={idx}
                className={`flex justify-center w-full my-6 mx-auto ${
                  block.src && block.src.includes("jobImgs")
                    ? "md:w-2/3 lg:w-1/2"
                    : ""
                }`}
              >
                {block.src && (
                  <img
                    src={block.src}
                    alt="content image"
                    className="w-full h-auto max-h-[75vh] object-contain rounded-2xl border border-slate-200 shadow-sm"
                    onContextMenu={(e) => e.preventDefault()}
                    loading="lazy"
                  />
                )}
              </div>
            );
          case "image-grid":
            return (
              <div
                key={idx}
                className="flex flex-row flex-nowrap justify-center gap-2 md:gap-4 items-start w-full my-6"
              >
                {(block.images || []).map((img, i) => (
                  <div key={i} className="flex-1 min-w-0 w-1/2">
                    <img
                      src={img}
                      alt="content image grid item"
                      className="w-full h-auto rounded-2xl border border-slate-200 shadow-sm"
                      onContextMenu={(e) => e.preventDefault()}
                      loading="lazy"
                    />
                  </div>
                ))}
              </div>
            );
          case "h3-section":
            return (
              <section key={idx} className="flex flex-col gap-4 my-6 w-full">
                <h3 className="text-2xl font-bold border-b border-slate-200 pb-2 mb-2 text-slate-800">
                  {block.title}
                </h3>
                <ContentRenderer blocks={block.blocks || []} />
              </section>
            );
          case "h4-section":
            return (
              <div key={idx} className="flex flex-col gap-2 my-2 w-full">
                <h4 className="text-[18px] md:text-xl font-bold text-slate-800">
                  {block.link ? (
                    <a
                      href={block.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-600 underline"
                    >
                      {block.title}
                    </a>
                  ) : (
                    block.title
                  )}
                </h4>
                <div>
                  <ContentRenderer blocks={block.blocks || []} />
                </div>
              </div>
            );
          case "link-list":
            return (
              <div
                key={idx}
                className="flex flex-col gap-2 text-[15px] text-slate-600 bg-slate-50 border border-slate-100 p-4 rounded-xl my-4"
              >
                {(block.links || []).map((l, i) => (
                  <p key={i}>
                    {l.writer && `${l.writer}, `}
                    <a
                      href={l.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="font-semibold text-primary-600 hover:underline"
                    >
                      {l.title}
                    </a>
                    {l.office && `, ${l.office}`}
                    {l.writeDate && `, ${l.writeDate}`}
                    {l.searchDate && ` ${l.searchDate}`}
                  </p>
                ))}
              </div>
            );
          case "section":
            return (
              <div key={idx} className="flex flex-col gap-4 my-2">
                <ContentRenderer blocks={block.blocks || []} />
              </div>
            );
          case "interview":
            return <InterviewPage key={idx} data={block} />;
          default:
            return null;
        }
      })}
    </div>
  );
};
