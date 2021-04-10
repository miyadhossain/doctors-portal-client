import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import "./InfoCard.css";

const InfoCard = ({ info }) => {
  return (
    <div className="col-md-4 text-white info-card">
      <div
        className={`info-container d-flex justify-content-center info-${info.background}`}
      >
        <div className="icon-container">
          <FontAwesomeIcon className="info-icon ms-3" icon={info.icon} />
        </div>
        <div>
          <h6>{info.title}</h6>
          <small>{info.description}</small>
        </div>
      </div>
    </div>
  );
};

export default InfoCard;
