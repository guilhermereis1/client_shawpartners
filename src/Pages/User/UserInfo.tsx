import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { ApplicationState } from "../../store";
import Loading from "../components/Loading";
import useGetUser from "../Users/hooks/useGetUser";
import Repositories from "./components/Repositories";
import {
  Container,
  ContainerRepos,
  UserAvatar,
  UserAvatarContainer,
  UserCreatedAt,
  UserId,
  UserName,
  UserProfileUrl,
} from "./styles";

interface Props {
  username: string;
}

const UserInfo: React.FC<Props> = () => {
  const dispatch = useDispatch();
  const { username } = useParams<any>();

  useGetUser(username, dispatch);

  const user = useSelector((state: ApplicationState) => state.user);

  return (
    <Container>
      {user.loading ? (
        <Loading />
      ) : (
        <>
          <UserAvatarContainer>
            <UserAvatar src={user?.data.avatar_url} />
          </UserAvatarContainer>
          <UserId>ID: {user?.data?.id}</UserId>
          <UserName>{user?.data?.login}</UserName>
          <UserProfileUrl href={user?.data?.url}>
            {user?.data?.url}
          </UserProfileUrl>
          <UserCreatedAt>Created At: {user?.data?.created_at}</UserCreatedAt>

          <ContainerRepos>
            <Repositories username={username} />
          </ContainerRepos>
        </>
      )}
    </Container>
  );
};

export default UserInfo;
