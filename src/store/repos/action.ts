import { ReposActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import Api from "../../services/Api";

import { ApplicationState } from "../index";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const getUserRepos: AppThunk =
  (username: string) => async (dispatch: Dispatch) => {
    dispatch({ type: ReposActionTypes.LOAD_REQUEST });
    try {
      const response = await Api.get(`/api/users/${username}/repos`);
      setTimeout(
        () =>
          dispatch({
            type: ReposActionTypes.LOAD_SUCCESS,
            payload: response.data,
          }),
        4000
      );
    } catch (err) {
      dispatch({ type: ReposActionTypes.LOAD_ERROR });
    }
  };
