const InterviewPage = (props) => {
  return (
    <div className="flex flex-col gap-12 w-full mt-4">
      {props.data.questions.map((question, idx) => (
        <div key={idx} className="flex flex-col gap-6">
          {/* Question Section - Editorial Style */}
          <h4 className="text-xl md:text-2xl font-bold text-slate-900 leading-snug">
            <span className="text-primary-500 mr-2">Q.</span>
            {question}
          </h4>

          {/* Answer Section */}
          <div className="flex flex-col gap-5 text-slate-800 text-[17px] md:text-lg leading-loose">
            {props.data.answers &&
              props.data.answers[idx].map((a, aIdx) =>
                a.italic ? (
                  <p
                    key={aIdx}
                    className="italic text-slate-600 border-l-2 border-slate-300 pl-4 my-2"
                  >
                    {a.text}
                  </p>
                ) : (
                  <div key={aIdx} className="flex flex-col gap-1">
                    {props.data.answers[idx].length > 1 && (
                      <span className="text-sm font-bold text-slate-400">
                        답변 {aIdx + 1}
                      </span>
                    )}
                    <p className="leading-loose">
                      <span className="font-bold text-slate-900 mr-2">A.</span>
                      {a.text}
                    </p>
                  </div>
                ),
              )}

            {/* Summary Blockquote */}
            {props.data.summary && props.data.summary[idx] && (
              <blockquote className="mt-6 p-4 md:px-6 md:py-4 border-l-4 border-primary-500 bg-slate-50/50">
                <p className="text-slate-700 font-medium leading-loose text-base md:text-lg">
                  <span className="font-bold text-primary-600 block mb-1 text-sm uppercase tracking-wider">
                    Summary
                  </span>
                  {props.data.summary[idx]}
                </p>
              </blockquote>
            )}
          </div>

          {/* Divider */}
          {idx !== props.data.questions.length - 1 && (
            <hr className="mt-4 border-slate-100" />
          )}
        </div>
      ))}

      {/* Dynamic Video Embed */}
      {props.data.videoUrl && (
        <iframe
          className="w-full h-64 md:h-96 rounded-2xl shadow-lg mt-8"
          src={props.data.videoUrl}
          title="YouTube video player"
          frameBorder="0"
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
