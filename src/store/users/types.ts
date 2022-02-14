export interface User {
  next_page: string;
  users: UserData[];
}

export interface UserData {
  login: string;
  id: number;
  node_id: string;
  avatar_url: string;
  gravatar_id: string;
  url: string;
  html_url: string;
  followers_url: string;
  following_url: string;
  gists_url: string;
  starred_url: string;
  subscriptions_url: string;
  organizations_url: string;
  repos_url: string;
  events_url: string;
  received_events_url: string;
  type: string;
  site_admin: boolean;
}

export enum UsersActionTypes {
  LOAD_REQUEST = "@@users/LOAD_REQUEST",
  LOAD_SUCCESS = "@@users/LOAD_SUCCESS",
  LOAD_ERROR = "@@users/LOAD_ERROR",
}

export interface UsersState {
  readonly loading: boolean;
  readonly data: User;
  readonly errors?: string;
}
