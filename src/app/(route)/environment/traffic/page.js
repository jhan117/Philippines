import BlogHeader from "@/app/_components/blog/BlogHeader";
import {
  HasH4Content,
  NotHasH4Content,
  SectionContent,
} from "@/app/_components/blog/ContentsTemplate";

import { trafficH3Data, trafficData } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀의 대중교통의 이해" writer="김선우">
      <SectionContent data={trafficData[0]} />
      <hr />
      {trafficH3Data.map((d, h3Idx) =>
        d.h4 ? (
          <HasH4Content data={d} h3Idx={h3Idx} tag="traffic" />
        ) : (
          <NotHasH4Content data={d} h3Idx={h3Idx} />
        )
      )}
    </BlogHeader>
  );
};

export default page;
