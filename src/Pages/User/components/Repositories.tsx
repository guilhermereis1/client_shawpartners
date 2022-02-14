import { Table } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { ApplicationState } from "../../../store";
import Loading from "../../components/Loading";
import useGetUserRepos from "../hooks/useGetUserRepos";

interface Props {
  username: string;
}

const Repositories: React.FC<Props> = ({ username }) => {
  const dispatch = useDispatch();
  const repos = useSelector((state: ApplicationState) => state.repos);
  useGetUserRepos(username, dispatch);

  const columns = [
    {
      title: "ID",
      dataIndex: "id",
      key: "id",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
    },
    {
      title: "URL",
      dataIndex: "html_url",
      key: "html_url",
    },
  ];

  return !repos.loading ? (
    <Table dataSource={repos?.data} columns={columns} />
  ) : (
    <Loading />
  );
};

export default Repositories;
