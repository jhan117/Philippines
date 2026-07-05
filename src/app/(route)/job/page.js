import BlogHeader from "@/app/_components/blog/BlogHeader";
import {
  HasH4Content,
  TextSection,
} from "@/app/_components/blog/ContentSections";

import { jobData, jobH3Data } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀 구직활동 방법" writer="신나연">
      <TextSection content={jobData[0]} />
      <hr />
      {jobH3Data.map((d, h3Idx) => (
        <HasH4Content key={h3Idx} data={d} h3Idx={h3Idx} tag="job" />
      ))}
    </BlogHeader>
  );
};

export default page;
