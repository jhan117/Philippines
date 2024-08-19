import BlogHeader from "@/app/_components/blog/BlogHeader";
import InterviewPage from "@/app/_components/blog/InterviewPage";

import { interviewData } from "@/app/_utils/contents";

export function generateStaticParams() {
  retrurn(interviewData.map((v) => ({ interviewId: v.tagEng })));
}

export default function page(props) {
  const data = interviewData.find((d) => d.tagEng == props.params.interviewId);

  return (
    <BlogHeader header={data.tagKor} writer={data.writer}>
      <InterviewPage data={data} />
    </BlogHeader>
  );
}
