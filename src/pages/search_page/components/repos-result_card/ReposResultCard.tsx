import React from "react";
import "./ReposResultcars.scss";
import { IRepository } from "../../../../core/models/interface/IRepository.interface";

interface Props {
  repo?: IRepository;
}

const ReposResultCard = ({ repo }: Props) => {
  return <div className="repo-result-card">repo ResultCard</div>;
};

export default ReposResultCard;
