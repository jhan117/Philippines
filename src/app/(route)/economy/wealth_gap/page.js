import BlogHeader from "@/app/_components/blog/BlogHeader";
import {
  NotHasH4Content,
  SectionContent,
} from "@/app/_components/blog/ContentsTemplate";

import {
  wealthData,
  wealthH3Data,
  wealthLinkData,
} from "@/app/_utils/contents";

const LinkList = () => (
  <div>
    {wealthLinkData.map((l, idx) => (
      <p key={idx}>
        {l.writer && `${l.writer},`}
        <a href={l.link} target="_blank">
          {l.title}
        </a>
        , {l.office}, {l.wirteDate}, {l.searchDate}.
      </p>
    ))}
  </div>
);

const page = () => {
  return (
    <BlogHeader header="거리의 아이들, 빈부격차의 그림자" writer="권기영">
      <SectionContent data={wealthData[0]} />
      <hr />
      {wealthH3Data.map((d, h3Idx) => (
        <NotHasH4Content data={d} h3Idx={h3Idx} />
      ))}
      <hr />
      <SectionContent data={wealthData[1]} />
      <hr />
      <div>
        <p>- 참고자료:</p>
        <LinkList />
      </div>
    </BlogHeader>
  );
};

export default page;
