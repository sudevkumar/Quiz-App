import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import "../styles/App.css";
import "../styles/home.css";
import { setUserId } from "./redux/resultReducer";

function Home() {
  const inputRef = useRef(null);
  const dispatch = useDispatch();

  const startQuiz = () => {
    if (inputRef.current?.value) {
      dispatch(setUserId(inputRef.current?.value));
    }
  };

  return (
    <div className="container">
      <h1 className="title text-light">Quiz Application</h1>

      <ol>
        <li>You will be asked 10 question one after another.</li>
        <li>10 points will be awarded for the correct answer.</li>
        <li>
          Each question has three options. You can choose only one of them.
        </li>
        <li>You can review or change the answer before the quiz finish.</li>
        <li>The result will bw declare at the end of the quiz.</li>
      </ol>

      <form id="form">
        <input
          type="text"
          name=""
          id=""
          placeholder="User Name*"
          ref={inputRef}
          className="userid"
        />
      </form>

      <div className="start">
        <Link className="btn" to={"quiz"} onClick={startQuiz}>
          Start Quiz
        </Link>
      </div>
    </div>
  );
}

export default Home;
