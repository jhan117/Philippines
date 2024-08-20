import classes from "./InterviewPage.module.css";

const InterviewPage = (props) => {
  return (
    <div className={classes.interviewCon}>
      {[...Array(props.data.len)].map((_, idx) => (
        <div className={classes.questionCon}>
          <h4>
            Q{idx + 1}: {props.data.questions[idx]}
          </h4>
          <div>
            {props.data.answers &&
              props.data.answers[idx].map((a, aIdx) =>
                idx == 1 && aIdx == 2 && props.data.tagEng == "education" ? (
                  <p>
                    <i>{a}</i>
                  </p>
                ) : (
                  <p>
                    <b>
                      A{idx + 1}
                      {props.data.answers[idx].length != 1 && `-${aIdx + 1}`}:
                    </b>{" "}
                    {a}
                  </p>
                )
              )}
            {props.data.summary && props.data.summary[idx] && (
              <p>
                <b>답변 요약:</b> {props.data.summary[idx]}
              </p>
            )}
          </div>
        </div>
      ))}
      {props.data.tagEng == "wealth_gap" && (
        <iframe
          height="315"
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
