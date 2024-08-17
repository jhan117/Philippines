import BlogHeader from "@/app/_components/blog/BlogHeader";
import {
  HasH4Content,
  NotHasH4Content,
  SectionContent,
} from "@/app/_components/blog/ContentsTemplate";

import { jobData, jobH3Data } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀 구직활동 방법" writer="필리핀 2조">
      <SectionContent data={jobData[0]} />
      <hr />
      {jobH3Data.map((d, h3Idx) =>
        d.h4 ? (
          <HasH4Content data={d} h3Idx={h3Idx} />
        ) : (
          <NotHasH4Content data={d} h3Idx={h3Idx} />
        )
      )}
    </BlogHeader>
  );
};

export default page;
