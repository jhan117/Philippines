import { ContentBlock } from "@/data/types";

interface InterviewPageProps {
  data: ContentBlock;
}

const InterviewPage = ({ data }: InterviewPageProps) => {
  const questions = data.questions || [];

  return (
    <div className="flex flex-col gap-12 w-full mt-4">
      {questions.map((question, idx) => {
        const rawAnswers = data.answers?.[idx] || [];
        const regularAnswerCount = rawAnswers.filter((a) => !a.italic).length;
        let regularAnswerIndex = 0;

        return (
          <div key={idx} className="flex flex-col gap-6">
            {/* Question Section - Editorial Style */}
            <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
              <span className="text-primary-500 mr-2">Q.</span>
              {question}
            </h4>

            {/* Answer Section */}
            <div className="flex flex-col gap-5 text-slate-800 text-[17px] md:text-lg leading-loose">
              {rawAnswers.map((a, aIdx) => {
                if (a.italic) {
                  return (
                    <p
                      key={aIdx}
                      className="italic text-slate-600 border-l-2 border-slate-300 pl-4 my-2"
                    >
                      {a.text}
                    </p>
                  );
                }
                regularAnswerIndex += 1;
                return (
                  <div key={aIdx} className="flex flex-col gap-1">
                    {regularAnswerCount > 1 && (
                      <span className="text-sm font-bold text-slate-400">
                        답변 {regularAnswerIndex}
                      </span>
                    )}
                    <p className="leading-loose">
                      <span className="font-bold text-slate-900 mr-2">A.</span>
                      {a.text}
                    </p>
                  </div>
                );
              })}

              {/* Summary Blockquote */}
              {data.summary?.[idx] && (
                <blockquote className="mt-6 p-4 md:px-6 md:py-4 border-l-4 border-primary-500 bg-slate-50/70 rounded-r-xl">
                  <p className="text-slate-700 font-medium leading-loose text-base md:text-lg">
                    <span className="font-bold text-primary-600 block mb-1 text-sm uppercase tracking-wider">
                      Summary
                    </span>
                    {data.summary[idx]}
                  </p>
                </blockquote>
              )}
            </div>

            {/* Divider */}
            {idx !== questions.length - 1 && (
              <hr className="mt-4 border-slate-100" />
            )}
          </div>
        );
      })}

      {/* Dynamic Video Embed */}
      {data.videoUrl && (
        <iframe
          className="w-full aspect-video rounded-2xl shadow-lg mt-8"
          src={data.videoUrl}
          title="YouTube video player"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
          loading="lazy"
        />
      )}
    </div>
  );
};

export default InterviewPage;
