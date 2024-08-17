import BlogHeader from "@/app/_components/blog/BlogHeader";
import {
  HasH4Content,
  NotHasH4Content,
  SectionContent,
} from "@/app/_components/blog/ContentsTemplate";

import { historyData, historyH3Data } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀의 역사" writer="김한나">
      <SectionContent data={historyData[0]} />
      <hr />
      {historyH3Data.map((d, h3Idx) =>
        d.h4 ? (
          <HasH4Content data={d} h3Idx={h3Idx} />
        ) : (
          <NotHasH4Content data={d} h3Idx={h3Idx} />
        )
      )}
      <hr />
      <SectionContent data={historyData[1]} />
    </BlogHeader>
  );
};

export default page;
