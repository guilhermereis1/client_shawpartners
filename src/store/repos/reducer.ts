import { Reducer } from "redux";
import { ReposActionTypes, ReposState } from "./types";

export const initialState: ReposState = {
  data: [],
  errors: undefined,
  loading: false,
};

const reducer: Reducer<ReposState> = (state = initialState, action) => {
  switch (action.type) {
    case ReposActionTypes.LOAD_REQUEST: {
      return { ...state, loading: true };
    }
    case ReposActionTypes.LOAD_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case ReposActionTypes.LOAD_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as ReposReducer };
