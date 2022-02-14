import { Reducer } from "redux";
import { UserActionTypes, UserState } from "./types";

export const initialState: UserState = {
  data: {
    login: "",
    id: 0,
    node_id: "",
    avatar_url: "",
    gravatar_id: "",
    url: "",
    html_url: "",
    followers_url: "",
    following_url: "",
    gists_url: "",
    starred_url: "",
    subscriptions_url: "",
    organizations_url: "",
    repos_url: "",
    events_url: "",
    received_events_url: "",
    type: "",
    site_admin: false,
    name: "",
    company: "",
    blog: "",
    location: "",
    email: "",
    hireable: undefined,
    bio: undefined,
    twitter_username: "",
    public_repos: 0,
    public_gists: 0,
    followers: 0,
    following: 0,
    created_at: "",
    updated_at: "",
  },
  errors: undefined,
  loading: false,
};

const reducer: Reducer<UserState> = (state = initialState, action) => {
  switch (action.type) {
    case UserActionTypes.LOAD_REQUEST: {
      return { ...state, loading: true };
    }
    case UserActionTypes.LOAD_SUCCESS: {
      return { ...state, loading: false, data: action.payload };
    }
    case UserActionTypes.LOAD_ERROR: {
      return { ...state, loading: false, errors: action.payload };
    }
    default: {
      return state;
    }
  }
};

export { reducer as UserReducer };
