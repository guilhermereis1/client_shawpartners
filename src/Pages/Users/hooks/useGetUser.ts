import { useEffect } from "react";
import { getUserDetail } from "../../../store/user/action";

const useGetUser = (username: string, dispatch: any): any => {
  useEffect(() => {
    dispatch(getUserDetail(username));
  }, [dispatch, username]);
};

export default useGetUser;
