import { useEffect } from "react";
import { getUsers } from "../../../store/users/action";

const useGetUsers = (dispatch: any): any => {
  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);
};

export default useGetUsers;
