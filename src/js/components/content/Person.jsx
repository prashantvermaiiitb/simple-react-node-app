import React from "react";
import "./person.css";

/**
 * Person Object created for the Project
 * @param {*} param0 - will have id / name / age information
 */
const Person = (props) => {
  let { id, first_name, last_name, avatar, age, email } = props.data;
  return (
    <div className="person-info-container">
      <div>
        <label>Id:</label>
        <span className="person-id">{id}</span>
      </div>
      <div>
        <label>Name:</label>
        <span className="person-name">{first_name}</span>
      </div>
      <div>
        <label>Age:</label>
        <span className="person-age">{email}</span>
      </div>
    </div>
  );
};

export default Person;
