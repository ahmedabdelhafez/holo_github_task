import React from "react";
import "./ReposResultcars.scss";
import { IRepository } from "../../../../core/models/interface/IRepository.interface";

interface Props {
  repo?: IRepository;
}

const ReposResultCard = ({ repo }: Props) => {
  return (
    <div className="repo-result-card">
      <div className="card-header">
        <div className="profile-img">
          <img src={repo?.owner?.avatar_url} alt="profile image" />
        </div>
        <div className="profile-details">
          <h3 className="m-0 text-center">{repo?.full_name}</h3>
          <p className="m-0">Author: {repo?.owner?.login}</p>
        </div>
      </div>
      <hr />
      <div className="card-contetn">
        <div className="follower-wrapper">
          <p className="m-0 text-bold">
            Followers: <span>{repo?.owner?.followers ?? 0}</span>
          </p>
          <p className="m-0 text-bold">
            Following: <span>{repo?.owner?.following ?? 0}</span>
          </p>
          <p className="m-0 text-bold">
            Public Repos: <span>{repo?.owner?.public_repos ?? 0}</span>
          </p>
        </div>
        <div
          className="profile-link"
          style={{ textAlign: "center", marginTop: "10px" }}
        >
          <h4 className="m-0 text-bold" style={{ textDecoration: "underline" }}>
            Profile Link
          </h4>
          <a href={repo?.owner?.html_url} target="_blank">
            {repo?.html_url}
          </a>
        </div>
      </div>
      <div className="repo-details-list">
        <h3 className="m-0">Repository Name</h3>
        <p className="m-0">{repo?.name}</p>
      </div>
    </div>
  );
};

export default ReposResultCard;
