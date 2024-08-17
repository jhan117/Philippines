import BlogHeader from "@/app/_components/blog/BlogHeader";
import {
  HasH4Content,
  NotHasH4Content,
  SectionContent,
} from "@/app/_components/blog/ContentsTemplate";

import { weatherData, weatherH3Data } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀의 날씨" writer="김혜민">
      <SectionContent data={weatherData[0]} />
      <hr />
      {weatherH3Data.map((d, h3Idx) =>
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
