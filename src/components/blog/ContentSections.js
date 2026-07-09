"use client";

import Image from "next/image";
import InterviewPage from "./InterviewPage";

export const ContentRenderer = ({ blocks }) => {
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
                  className="list-disc list-inside my-1 text-slate-700 leading-relaxed ml-2"
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
                {block.items.flat(Infinity).map((item, i) => (
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
                className={`relative flex justify-center w-full my-6 mx-auto ${block.src.includes("jobImgs") ? "md:w-2/3 lg:w-1/2" : ""}`}
              >
                <div className="relative w-full max-w-full h-[500px]">
                  <Image
                    src={block.src}
                    alt="content image"
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-contain drop-shadow-md rounded-2xl"
                    onContextMenu={(e) => e.preventDefault()}
                  />
                </div>
              </div>
            );
          case "image-grid":
            return (
              <div
                key={idx}
                className="flex flex-row flex-nowrap justify-center gap-2 md:gap-4 items-center w-full my-6"
              >
                {block.images.map((img, i) => (
                  <div
                    key={i}
                    className="flex-1 min-w-0 w-1/2 relative bg-slate-100 rounded-xl overflow-hidden shadow-sm flex items-center justify-center h-[400px]"
                  >
                    <Image
                      src={img}
                      alt="content image grid item"
                      fill
                      sizes="(max-width: 768px) 50vw, 33vw"
                      className="object-contain"
                      onContextMenu={(e) => e.preventDefault()}
                    />
                  </div>
                ))}
              </div>
            );
          case "h3-section":
            return (
              <section key={idx} className="flex flex-col gap-4 my-4 w-full">
                <h3 className="text-2xl font-bold border-b border-primary-500/20 pb-2 mb-2 text-primary-500">
                  {block.title}
                </h3>
                <ContentRenderer blocks={block.blocks} />
              </section>
            );
          case "h4-section":
            return (
              <div key={idx} className="flex flex-col gap-2 my-2 w-full">
                <h4 className="text-lg font-semibold text-slate-800">
                  {block.link ? (
                    <a
                      href={block.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-primary-500 underline decoration-primary-300"
                    >
                      {block.title}
                    </a>
                  ) : (
                    block.title
                  )}
                </h4>
                <div className="ml-4">
                  <ContentRenderer blocks={block.blocks} />
                </div>
              </div>
            );
          case "link-list":
            return (
              <div
                key={idx}
                className="flex flex-col gap-2 text-sm text-slate-600 bg-slate-100 p-4 rounded-xl"
              >
                {block.links.map((l, i) => (
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
                <ContentRenderer blocks={block.blocks} />
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
