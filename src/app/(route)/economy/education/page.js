import BlogHeader from "@/app/_components/blog/BlogHeader";
import { HasH4Content } from "@/app/_components/blog/ContentsTemplate";

import { educationH3Data } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀의 교육" writer="신나연">
      {educationH3Data.map((d, h3Idx) => (
        <HasH4Content data={d} h3Idx={h3Idx} />
      ))}
    </BlogHeader>
  );
};

export default page;
