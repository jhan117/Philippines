import BlogHeader from "@/app/_components/blog/BlogHeader";
import {
  HasH4Content,
  NotHasH4Content,
  TextSection,
} from "@/app/_components/blog/ContentSections";

import { trafficH3Data, trafficData } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀의 대중교통의 이해" writer="김선우">
      <TextSection content={trafficData[0]} />
      <hr />
      {trafficH3Data.map((d, h3Idx) =>
        d.h4 ? (
          <HasH4Content key={h3Idx} data={d} h3Idx={h3Idx} tag="traffic" />
        ) : (
          <NotHasH4Content key={h3Idx} data={d} h3Idx={h3Idx} />
        )
      )}
    </BlogHeader>
  );
};

export default page;
