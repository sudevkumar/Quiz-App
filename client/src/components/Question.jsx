import React, { useEffect, useState } from "react";
import { useFetchQuestion } from "../hook/FetchQuestion";
import { useDispatch, useSelector } from "react-redux";
import { updateResultAction } from "./redux/resultReducer";
import { UpdateResult } from "../hook/SetResult";

function Question({ onChecked }) {
  const [checked, setChecked] = useState(undefined);
  const [{ loading, apiData, error }] = useFetchQuestion();
  const question = useSelector(
    (state) => state.question.queue[state.question.trace]
  );
  const result = useSelector((state) => state.result.result);

  const trace = useSelector((state) => state.question.trace);

  const dispatch = useDispatch();

  const onChange = (ind) => {
    onChecked(ind);
    setChecked(ind);
    dispatch(UpdateResult({ trace, checked }));
  };

  useEffect(() => {
    dispatch(UpdateResult({ trace, checked }));
  }, [checked]);

  //   console.log(data);

  if (loading) return <h3 className="text-light">isLoading</h3>;
  if (error) return <h3 className="text-light">{error || "Error"}</h3>;

  return (
    <div className="questions">
      <h2 className="text-light">{question?.question}</h2>
      <ul key={question?.id}>
        {question?.optopns.map((ele, ind) => (
          <li key={ind}>
            <input
              type="radio"
              value={true}
              name="options"
              id={`q${ind}-option`}
              onChange={() => onChange(ind)}
            />

            <label htmlFor={`q${ind}-option`} className="text-primary">
              {ele}
            </label>

            <div
              className={`check ${result[trace] === ind ? "checked" : ""}`}
            ></div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Question;
