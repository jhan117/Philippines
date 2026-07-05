
const InterviewPage = (props) => {
  return (
    <div className="flex flex-col gap-8 w-full">
      {[...Array(props.data.len)].map((_, idx) => (
        <div key={idx} className="flex flex-col gap-4 p-6 md:p-8 bg-slate-50 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md transition-shadow">
          <h4 className="text-xl md:text-2xl font-bold text-primary-600 border-b border-slate-200 pb-4">
            <span className="text-slate-400 mr-2">Q{idx + 1}.</span>{props.data.questions[idx]}
          </h4>
          <div className="flex flex-col gap-4 text-slate-700 mt-2">
            {props.data.answers &&
              props.data.answers[idx].map((a, aIdx) =>
                idx == 1 && aIdx == 2 && props.data.tagEng == "education" ? (
                  <p key={aIdx}>
                    <i>{a}</i>
                  </p>
                ) : (
                  <p key={aIdx} className="leading-relaxed text-lg">
                    <b className="text-slate-900 inline-block bg-slate-200 px-2 py-1 rounded text-sm mr-2 mb-1">
                      A{idx + 1}
                      {props.data.answers[idx].length != 1 && `-${aIdx + 1}`}
                    </b>
                    {a}
                  </p>
                )
              )}
            {props.data.summary && props.data.summary[idx] && (
              <div className="mt-4 p-5 bg-primary-50 rounded-xl border border-primary-200">
                <p className="text-primary-900 leading-relaxed">
                  <b className="font-bold text-primary-700 block mb-1">💡 답변 요약</b> 
                  {props.data.summary[idx]}
                </p>
              </div>
            )}
          </div>
        </div>
      ))}
      {props.data.tagEng == "wealth_gap" && (
        <iframe
          className="w-full h-80 rounded-xl shadow-lg mt-6"
          src="https://www.youtube.com/embed/anRyWUarqq0?si=UTvCzSqCrqSll5iP"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      )}
    </div>
  );
};

export default InterviewPage;
