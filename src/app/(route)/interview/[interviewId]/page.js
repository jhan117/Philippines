import BlogHeader from "@/app/_components/blog/BlogHeader";
import InterviewPage from "@/app/_components/blog/InterviewPage";

import { interviewData } from "@/app/_utils/contents";

export function generateStaticParams() {
  return interviewData.map((v) => ({ interviewId: v.tagEng }));
}

export default async function page({ params }) {
  const resolvedParams = await params;
  const data = interviewData.find((d) => d.tagEng == resolvedParams.interviewId);

  return (
    <BlogHeader header={data.tagKor} writer={data.writer}>
      <InterviewPage data={data} />
    </BlogHeader>
  );
}
