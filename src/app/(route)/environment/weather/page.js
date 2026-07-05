import BlogHeader from "@/app/_components/blog/BlogHeader";
import {
  HasH4Content,
  NotHasH4Content,
  TextSection,
} from "@/app/_components/blog/ContentSections";

import { weatherData, weatherH3Data } from "@/app/_utils/contents";

const page = () => {
  return (
    <BlogHeader header="필리핀의 날씨" writer="김혜민">
      <TextSection content={weatherData[0]} />
      <hr />
      {weatherH3Data.map((d, h3Idx) =>
        d.h4 ? (
          <HasH4Content key={h3Idx} data={d} h3Idx={h3Idx} tag="weather" />
        ) : (
          <NotHasH4Content key={h3Idx} data={d} h3Idx={h3Idx} tag="weather" />
        )
      )}
    </BlogHeader>
  );
};

export default page;
