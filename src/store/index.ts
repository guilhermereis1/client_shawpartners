import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
import { RouterState } from "connected-react-router";

import { UsersReducer } from "./users/reducer";
import { UsersState } from "./users/types";

import { UserReducer } from "./user/reducer";
import { UserState } from "./user/types";

import { ReposReducer } from "./repos/reducer";
import { ReposState } from "./repos/types";

export interface ApplicationState {
  users: UsersState;
  user: UserState;
  repos: ReposState;
  router: RouterState;
}

export const createRootReducer = (history: History) =>
  combineReducers({
    users: UsersReducer,
    user: UserReducer,
    repos: ReposReducer,
    router: connectRouter(history),
  });
