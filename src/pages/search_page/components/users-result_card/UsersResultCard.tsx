import "./UsersResultcars.scss";
import { IUsers } from "../../../../core/models/interface/IUsers.interface";
import im1 from "../../../../assets/images/1.jpg";
interface Props {
  user?: IUsers;
}

const UsersResultCard = ({ user }: Props) => {
  return (
    <div className="result-card">
      <div className="card-header">
        <div className="profile-img">
          <img src={user?.avatar_url} alt="profile image" />
        </div>
        <div className="profile-details">
          <h3 className="m-0 text-center">{user?.login ?? user?.name}</h3>
          <p className="m-0">Location: {user?.location}</p>
          <p className="m-0">email: {user?.email}</p>
          <p className="m-0">company: {user?.company}</p>
        </div>
      </div>
      <hr />
      <div className="card-contetn">
        <div className="follower-wrapper">
          <p className="m-0 text-bold">
            Followers: <span>{user?.followers ?? 0}</span>
          </p>
          <p className="m-0 text-bold">
            Following: <span>{user?.following ?? 0}</span>
          </p>
          <p className="m-0 text-bold">
            Public Repos: <span>{user?.public_repos ?? 0}</span>
          </p>
        </div>
        <div
          className="profile-link"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <h4 className="m-0 text-bold" style={{ textDecoration: "underline" }}>
            Profile Link
          </h4>
          <a href={user?.html_url} target="_blank">
            {user?.login}
          </a>
        </div>
      </div>
    </div>
  );
};

export default UsersResultCard;
