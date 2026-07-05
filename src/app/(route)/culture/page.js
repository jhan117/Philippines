import BlogHeader from "@/app/_components/blog/BlogHeader";
import { HasH4Content } from "@/app/_components/blog/ContentSections";

import { cultureH3Data } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀의 식문화" writer="신창대">
      {cultureH3Data.map((d, h3Idx) => (
        <HasH4Content key={h3Idx} data={d} h3Idx={h3Idx} tag="culture" />
      ))}
    </BlogHeader>
  );
};

export default page;
