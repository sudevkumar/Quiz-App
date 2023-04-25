import * as Action from "../components/redux/resultReducer";
import { postServerData } from "../helper/helper";

export const PushAnswer = (result) => async (dispatch) => {
  try {
    await dispatch(Action.pushResultAction(result));
  } catch (e) {
    console.log(e);
  }
};

export const UpdateResult = (index) => async (dispatch) => {
  try {
    dispatch(Action.updateResultAction(index));
  } catch (e) {
    console.log(e);
  }
};

export const usePublishResult = (resultData) => {
  const { result, username } = resultData;
  (async () => {
    try {
      if (result !== [] && !username) throw new Error("Couldn't get Result");
      await postServerData(
        "http://localhost:8080/api/results",
        resultData,
        (data) => data
      );
    } catch (error) {
      console.log(error);
    }
  })();
};
