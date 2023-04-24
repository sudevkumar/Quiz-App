import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { data } from "../components/data";
import { answers } from "../components/data";
// import { startExamAction } from "../components/redux/questionReducer";
import * as Action from "../components/redux/questionReducer";

export const useFetchQuestion = () => {
  const [getData, setGetData] = useState({
    loading: false,
    apiData: [],
    error: null,
  });

  console.log("dkkgkfkfkf", answers);
  const dispatch = useDispatch();

  useEffect(() => {
    setGetData((prev) => ({ ...prev, loading: true }));

    (async () => {
      try {
        let question = await data;
        // console.log("object", question);

        if (question.length > 0) {
          setGetData((prev) => ({ ...prev, loading: false }));
          setGetData((prev) => ({ ...prev, apiData: { question, answers } }));

          dispatch(Action.startExamAction({ question, answers }));
        } else {
          throw new Error("No Question Found!");
        }
      } catch (e) {
        setGetData((prev) => ({ ...prev, loading: false }));
        setGetData((prev) => ({ ...prev, error: e }));
      }
    })();
  }, [dispatch]);

  return [getData, setGetData];
};

export const MoveNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.moveNextAction());
  } catch (e) {
    console.log(e);
  }
};

export const PrevNextQuestion = () => async (dispatch) => {
  try {
    dispatch(Action.movePrevAction());
  } catch (e) {
    console.log(e);
  }
};
