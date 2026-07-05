"use client";

import Image from "next/image";
import { Fragment } from "react";

import BlogHeader from "@/components/blog/BlogHeader";
import {
  HasH4Content,
  NotHasH4Content,
  TextSection,
  MainSec,
  IntroOutroSec,
  PList,
} from "@/components/blog/ContentSections";
import CardList from "@/components/blog/CardList";
import InterviewPage from "@/components/blog/InterviewPage";

import {
  histData,
  trafficH3Data,
  trafficData,
  weatherData,
  weatherH3Data,
  waterData,
  cultureH3Data,
  wealthData,
  wealthH3Data,
  educationH3Data,
  jobData,
  jobH3Data,
  wealthLinkData,
  interviewData,
} from "@/data/contents";

const waterImages = [
  "/images/waterQualityImgs/wc1.png",
  "/images/waterQualityImgs/wc2.png",
  "/images/waterQualityImgs/wc3.png",
  "/images/waterQualityImgs/wc4.png",
  "/images/waterQualityImgs/wc5.png",
  "/images/waterQualityImgs/wc6.png",
];

const LinkList = () => (
  <div>
    {wealthLinkData.map((l, idx) => (
      <p key={idx}>
        {l.writer && `${l.writer},`}
        <a href={l.link} target="_blank" rel="noreferrer">
          {l.title}
        </a>
        , {l.office}, {l.wirteDate}, {l.searchDate}.
      </p>
    ))}
  </div>
);

import { use } from "react";

export default function Subpage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  const path = slug.join("/");

  if (path === "culture") {
    return (
      <BlogHeader header="필리핀의 식문화" writer="신창대">
        {cultureH3Data.map((d, h3Idx) => (
          <HasH4Content key={h3Idx} data={d} h3Idx={h3Idx} tag="culture" />
        ))}
      </BlogHeader>
    );
  }

  if (path === "economy/education") {
    return (
      <BlogHeader header="필리핀의 교육" writer="신나연">
        {educationH3Data.map((d, h3Idx) => (
          <HasH4Content key={h3Idx} data={d} h3Idx={h3Idx} tag="education" />
        ))}
      </BlogHeader>
    );
  }

  if (path === "economy/wealth_gap") {
    return (
      <BlogHeader header="거리의 아이들, 빈부격차의 그림자" writer="권기영">
        <TextSection content={wealthData[0]} />
        <hr />
        {wealthH3Data.map((d, h3Idx) => (
          <NotHasH4Content key={h3Idx} data={d} h3Idx={h3Idx} tag="wealth_gap" />
        ))}
        <hr />
        <TextSection content={wealthData[1]} />
        <hr />
        <div>
          <p>- 참고자료:</p>
          <LinkList />
        </div>
      </BlogHeader>
    );
  }

  if (path === "environment/traffic") {
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
  }

  if (path === "environment/water_quality") {
    return (
      <BlogHeader header="필리핀의 수질 상태" writer="윤예경">
        <TextSection content={waterData[0]} />
        <hr />
        {waterData[1].map((d, idx) =>
          Array.isArray(d) ? (
            <Fragment key={idx}>
              <Image
                src={waterImages[idx]}
                alt="data"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain rounded-xl my-4 drop-shadow-md"
                onContextMenu={(e) => e.preventDefault()}
              />
              <PList p={d} />
            </Fragment>
          ) : (
            <Fragment key={idx}>
              <Image
                src={waterImages[idx]}
                alt="data"
                width={1920}
                height={1080}
                className="w-full h-auto object-contain rounded-xl my-4 drop-shadow-md"
                onContextMenu={(e) => e.preventDefault()}
              />
              <p>{d}</p>
            </Fragment>
          )
        )}
        <hr />
        <div
          style={{
            display: "flex",
            flexDirection: "row",
            width: "100%",
          }}
        >
          <Image
            src={waterImages[4]}
            className="w-1/2 h-auto object-contain rounded-xl my-4 drop-shadow-md p-2"
            width={1920}
            height={1080}
            alt="data"
            onContextMenu={(e) => e.preventDefault()}
          />
          <Image
            src={waterImages[5]}
            className="w-1/2 h-auto object-contain rounded-xl my-4 drop-shadow-md p-2"
            width={1920}
            height={1080}
            alt="data"
            onContextMenu={(e) => e.preventDefault()}
          />
        </div>
        <TextSection content={waterData[2]} />
      </BlogHeader>
    );
  }

  if (path === "environment/weather") {
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
  }

  if (path === "history") {
    return (
      <BlogHeader header={histData.title} writer={histData.author}>
        <IntroOutroSec content={histData.intro} />
        <hr />
        {histData.main.map((section, idx) => (
          <MainSec key={idx} section={section} />
        ))}
        <hr />
        <IntroOutroSec content={histData.outro} />
      </BlogHeader>
    );
  }

  if (path === "interview") {
    return <CardList />;
  }

  if (path.startsWith("interview/")) {
    const interviewId = slug[1];
    const interviewItem = interviewData.find(d => d.tagEng === interviewId);
    if (!interviewItem) return <div>Interview not found</div>;
    return (
      <BlogHeader header={`${interviewItem.tagKor} 인터뷰`} writer={interviewItem.writer}>
        <InterviewPage data={interviewItem} />
      </BlogHeader>
    );
  }

  if (path === "job") {
    return (
      <BlogHeader header="필리핀 구직활동 방법" writer="신나연">
        <TextSection content={jobData[0]} />
        <hr />
        {jobH3Data.map((d, h3Idx) => (
          <HasH4Content key={h3Idx} data={d} h3Idx={h3Idx} tag="job" />
        ))}
      </BlogHeader>
    );
  }

  return <div>Not Found: {path}</div>;
}
