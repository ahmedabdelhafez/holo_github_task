import "./UsersResultcars.scss";
import { IUsers } from "../../../../core/models/interface/IUsers.interface";

interface Props {
  user?: IUsers;
}

const UsersResultCard = ({ user }: Props) => {
  return <div className="result-card">users ResultCard</div>;
};

export default UsersResultCard;
