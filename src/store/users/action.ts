import { UsersActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import Api from "../../services/Api";

import { ApplicationState } from "../index";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const getUsers: AppThunk = () => async (dispatch: Dispatch) => {
  dispatch({ type: UsersActionTypes.LOAD_REQUEST });

  try {
    const response = await Api.get(`/api/users`);
    setTimeout(
      () =>
        dispatch({
          type: UsersActionTypes.LOAD_SUCCESS,
          payload: response.data,
        }),
      3000
    );
  } catch (err) {
    dispatch({ type: UsersActionTypes.LOAD_ERROR });
  }
};
