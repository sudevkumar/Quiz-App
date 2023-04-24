import React, { useEffect, useState } from "react";
import Question from "./Question";
import { useDispatch, useSelector } from "react-redux";
import { MoveNextQuestion, PrevNextQuestion } from "../hook/FetchQuestion";
import { PushAnswer } from "../hook/SetResult";
import { Navigate } from "react-router-dom";

function Quiz() {
  const trace = useSelector((state) => state.question.trace);
  const queue = useSelector((state) => state.question.queue);
  const result = useSelector((state) => state.result.result);
  const state = useSelector((state) => state);
  const dispatch = useDispatch();
  const [checked, setChecked] = useState(undefined);

  useEffect(() => {
    console.log(state);
  });

  // Button event Handlers
  const onPrev = () => {
    if (trace > 0) {
      dispatch(PrevNextQuestion());
    }
  };

  const onNext = () => {
    if (trace < queue.length) {
      dispatch(MoveNextQuestion());

      if (result.length <= trace) {
        dispatch(PushAnswer(checked));
      }
    }

    setChecked(undefined);
  };

  const onChecked = (check) => {
    setChecked(check);
  };

  // Finishing exam after reaching last question  */

  if (result.length && result.length >= queue.length) {
    return <Navigate to={"/result"} replace="true"></Navigate>;
  }

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      {/* Display Questions */}
      <Question onChecked={onChecked} />

      <div className="grid">
        {trace > 0 ? (
          <button className="btn prev" onClick={onPrev}>
            Prev
          </button>
        ) : (
          <div></div>
        )}
        <button className="btn next" onClick={onNext}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Quiz;
