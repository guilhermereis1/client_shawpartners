import { useEffect } from "react";
import { getUserRepos } from "../../../store/repos/action";

const useGetUserRepos = (username: string, dispatch: any): any => {
  useEffect(() => {
    dispatch(getUserRepos(username));
  }, [dispatch, username]);
};

export default useGetUserRepos;
