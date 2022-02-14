import { UserActionTypes } from "./types";
import { ActionCreator, Action, Dispatch } from "redux";
import { ThunkAction } from "redux-thunk";
import Api from "../../services/Api";

import { ApplicationState } from "../index";

export type AppThunk = ActionCreator<
  ThunkAction<void, ApplicationState, null, Action<string>>
>;

export const getUserDetail: AppThunk =
  (username: string) => async (dispatch: Dispatch) => {
    dispatch({ type: UserActionTypes.LOAD_REQUEST });
    try {
      const response = await Api.get(`/api/users/${username}/details`);
      setTimeout(
        () =>
        dispatch({ type: UserActionTypes.LOAD_SUCCESS, payload: response.data }),
        2000
      );
    } catch (err) {
      dispatch({ type: UserActionTypes.LOAD_ERROR });
    }
  };
