import BlogHeader from "@/app/_components/blog/BlogHeader";
import { SectionContent, PList } from "@/app/_components/blog/ContentsTemplate";

import { waterData } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀의 수질 상태" writer="윤예경">
      <SectionContent data={waterData[0]} />
      <hr />
      {waterData[1].map((d) =>
        Array.isArray(d) ? <PList p={d} /> : <p>{d}</p>
      )}
      <hr />
      <SectionContent data={waterData[2]} />
    </BlogHeader>
  );
};

export default page;
