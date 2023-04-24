import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { attempt_Number, earn_points, flag_result } from "../helper/helper";
import "../styles/result.css";
import { answers } from "./data";
import { resetAllAction } from "./redux/questionReducer";
import { resetResultAction } from "./redux/resultReducer";
import ResultTable from "./ResultTable";

function Result() {
  const dispatch = useDispatch();
  const {
    question: { queue, answer },
    result: { userId, result },
  } = useSelector((state) => state);

  const handleRestart = () => {
    dispatch(resetResultAction());
    dispatch(resetAllAction());
  };

  const totalPoints = queue.length * 10;
  const attempts = attempt_Number(result);
  const earnPoints = earn_points(result, answers);
  const flag = flag_result(totalPoints, earnPoints);

  useEffect(() => {
    console.log(flag);
  });

  return (
    <div className="container">
      <h2 className="text-light">Quiz Application</h2>

      <div className="result flex-center">
        <div className="flex">
          <span>Usename : </span>
          <span className="bold">Sudev</span>
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
          <span className="bold">{attempts}</span>
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
