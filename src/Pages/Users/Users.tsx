import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../store";
import { Table, Image, Button } from "antd";
import useGetUsers from "./hooks/useGetUsers";
import { Container } from "./styles";
import { SearchOutlined } from "@ant-design/icons";
import { Link } from "react-router-dom";
import { UserData } from "../../store/users/types";
import Loading from "../components/Loading";

const Users: React.FC = () => {
  const [data, setData] = useState<UserData[]>([]);
  const dispatch = useDispatch();
  const users = useSelector((state: ApplicationState) => state.users);

  useGetUsers(dispatch);

  useEffect(() => {
    setData(users?.data?.users);
  }, [users]);

  const columns = [
    {
      title: "Avatar",
      render: (data: any) => <Image width={100} src={data?.avatar_url} />,
    },
    {
      title: "Login",
      dataIndex: "login",
      key: "login",
    },
    {
      title: "Action",
      render: (data: UserData) => (
        <Link to={`/user-info/${data?.login}`}>
          <Button type="primary" icon={<SearchOutlined />}>
            Show User
          </Button>
        </Link>
      ),
    },
  ];

  return (
    <Container>
      {!users.loading ? (
        <Table dataSource={data} columns={columns} rowKey="id" />
      ) : (
        <Loading />
      )}
    </Container>
  );
};

export default Users;
