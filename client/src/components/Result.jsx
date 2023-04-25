import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { attempt_Number, earn_points, flag_result } from "../helper/helper";
import { usePublishResult } from "../hook/SetResult";
import "../styles/result.css";

import { resetAllAction } from "./redux/questionReducer";
import { resetResultAction } from "./redux/resultReducer";
import ResultTable from "./ResultTable";

function Result() {
  const dispatch = useDispatch();
  const {
    question: { queue, answers },
    result: { userId, result },
  } = useSelector((state) => state);

  console.log("answer", answers);

  const handleRestart = () => {
    dispatch(resetAllAction());
    dispatch(resetResultAction());
  };

  const totalPoints = queue.length * 10;
  const attempts = attempt_Number(result);
  const earnPoints = earn_points(result, answers, 10);
  const flag = flag_result(totalPoints, earnPoints);

  usePublishResult({
    result,
    username: userId,
    attempts,
    points: earnPoints,
    achived: flag ? "Passed" : "Failed",
  });
  return (
    <div className="container">
      <h2 className="text-light">Quiz Application</h2>

      <div className="result flex-center">
        <div className="flex">
          <span>Usename : </span>
          <span className="bold">{userId}</span>
        </div>

        <div className="flex">
          <span>Total Points : </span>
          <span className="bold">{totalPoints}</span>
        </div>

        <div className="flex">
          <span>Total Questions : </span>
          <span className="bold">{queue.length}</span>
        </div>

        <div className="flex">
          <span>Total Attempts : </span>
          <span className="bold">{attempts || 0}</span>
        </div>

        <div className="flex">
          <span>Total Points : </span>
          <span className="bold">{earnPoints}</span>
        </div>

        <div className="flex">
          <span>Results : </span>
          <span style={{ color: `${flag ? "green" : "red"}` }} className="bold">
            {flag ? "Passed" : "Failed"}
          </span>
        </div>
      </div>

      <div className="start">
        <Link to={"/"} className="btn" onClick={handleRestart}>
          Restart
        </Link>
      </div>

      <div className="container">
        <ResultTable />
      </div>
    </div>
  );
}

export default Result;
