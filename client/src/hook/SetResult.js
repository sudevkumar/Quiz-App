import * as Action from "../components/redux/resultReducer";

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
