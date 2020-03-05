import React from "react";
import "./status.css";

export const ServiceStatus = props => {
  const color = props.status ? "on" : "off";
  return (
    <div className="col-md-4 ">
      <div className="card  my-card" style={{ width: "100%" }}>
        <div className="card-body">
          <h5 className="card-title">{props.title}</h5>
          <div className={`col-lg-12 circle ${color}`}></div>
          <p className="card-text">{props.description}</p>
        </div>
      </div>
    </div>
  );
};
