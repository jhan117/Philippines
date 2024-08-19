"use client";

import Image from "next/image";
import { Fragment } from "react";
import BlogHeader from "@/app/_components/blog/BlogHeader";
import { SectionContent, PList } from "@/app/_components/blog/ContentsTemplate";

import { waterData } from "@/app/_utils/contents";
import { waterImages } from "@/app/_utils/images";

const page = () => {
  return (
    <BlogHeader header="필리핀의 수질 상태" writer="윤예경">
      <SectionContent data={waterData[0]} />
      <hr />
      {waterData[1].map((d, idx) =>
        Array.isArray(d) ? (
          <Fragment>
            {
              <Image
                src={waterImages[idx]}
                alt="data"
                onContextMenu={(e) => e.preventDefault()}
              />
            }
            <PList p={d} />
          </Fragment>
        ) : (
          <Fragment>
            {
              <Image
                src={waterImages[idx]}
                alt="data"
                onContextMenu={(e) => e.preventDefault()}
              />
            }
            <p>{d}</p>
          </Fragment>
        )
      )}
      <hr />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          width: "100%",
        }}
      >
        <Image
          src={waterImages[4]}
          style={{ width: "50%" }}
          alt="data"
          onContextMenu={(e) => e.preventDefault()}
        />
        <Image
          src={waterImages[5]}
          style={{ width: "50%" }}
          alt="data"
          onContextMenu={(e) => e.preventDefault()}
        />
      </div>
      <SectionContent data={waterData[2]} />
    </BlogHeader>
  );
};

export default page;
