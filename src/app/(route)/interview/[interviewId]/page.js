import BlogHeader from "@/app/_components/blog/BlogHeader";
import InterviewPage from "@/app/_components/blog/InterviewPage";
import Video from "next-video";
import interviewVideo from "@/../videos/interview.mp4";

import { interviewData } from "@/app/_utils/contents";

export function generateStaticParams() {
  return interviewData.map((v) => ({ interviewId: v.tagEng }));
}

export default function page({ params }) {
  const data = interviewData.find((d) => d.tagEng == params.interviewId);

  return (
    <BlogHeader header={data.tagKor} writer={data.writer}>
      <InterviewPage data={data} />
      {data.tagEng == "wealth_gap" && <Video src={interviewVideo} />}
    </BlogHeader>
  );
}
