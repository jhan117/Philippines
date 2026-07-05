
const InterviewPage = (props) => {
  return (
    <div className="flex flex-col gap-6 w-full max-w-4xl mx-auto p-4">
      {[...Array(props.data.len)].map((_, idx) => (
        <div key={idx} className="flex flex-col gap-3 p-6 bg-slate-800 rounded-xl border border-white/5 shadow-md">
          <h4 className="text-xl font-bold text-primary-400">
            Q{idx + 1}: {props.data.questions[idx]}
          </h4>
          <div className="flex flex-col gap-2 text-slate-300">
            {props.data.answers &&
              props.data.answers[idx].map((a, aIdx) =>
                idx == 1 && aIdx == 2 && props.data.tagEng == "education" ? (
                  <p key={aIdx}>
                    <i>{a}</i>
                  </p>
                ) : (
                  <p key={aIdx} className="leading-relaxed">
                    <b className="text-slate-100">
                      A{idx + 1}
                      {props.data.answers[idx].length != 1 && `-${aIdx + 1}`}:
                    </b>{" "}
                    {a}
                  </p>
                )
              )}
            {props.data.summary && props.data.summary[idx] && (
              <p className="mt-4 p-4 bg-primary-900/30 rounded-lg text-primary-100 border border-primary-500/20">
                <b className="font-bold text-primary-300">답변 요약:</b> {props.data.summary[idx]}
              </p>
            )}
          </div>
        </div>
      ))}
      {props.data.tagEng == "wealth_gap" && (
        <iframe
          className="w-full h-80 rounded-xl shadow-lg mt-6"
          src="https://www.youtube.com/embed/anRyWUarqq0?si=UTvCzSqCrqSll5iP"
          title="YouTube video player"
          frameborder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowfullscreen
        />
      )}
    </div>
  );
};

export default InterviewPage;
