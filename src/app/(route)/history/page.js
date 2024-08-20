import BlogHeader from "@/app/_components/blog/BlogHeader";
import { MainSec, IntroOutroSec } from "@/app/_components/blog/ContentSections";

import { histData } from "@/app/_utils/contents";

const { title, author, intro, main, outro } = histData;

const page = () => (
  <BlogHeader title={title} author={author}>
    <IntroOutroSec content={intro} />
    <hr />
    {main.map((section, idx) => (
      <MainSec key={idx} section={section} />
    ))}
    <hr />
    <IntroOutroSec content={outro} />
  </BlogHeader>
);

export default page;
