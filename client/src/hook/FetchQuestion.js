import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
// import { startExamAction } from "../components/redux/questionReducer";
import * as Action from "../components/redux/questionReducer";
import { getServerData } from "../helper/helper";

export const useFetchQuestion = () => {
  const [getData, setGetData] = useState({
    loading: false,
    apiData: [],
    error: null,
  });

  const dispatch = useDispatch();

  useEffect(() => {
    setGetData((prev) => ({ ...prev, loading: true }));

    (async () => {
      try {
        // let question = await data;
        let [{ questions, answers }] = await getServerData(
          `http://localhost:8080/api/questions`
        )
          .then((data) => data)
          .catch((error) => console.log(error));
        console.log("object", questions);

        if (questions.length > 0) {
          setGetData((prev) => ({ ...prev, loading: false }));
          setGetData((prev) => ({
            ...prev,
            apiData: { question: questions, answers },
          }));

          dispatch(Action.startExamAction({ question: questions, answers }));
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
