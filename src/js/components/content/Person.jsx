import React from 'react';
import './person.css';

/**
 * Person Object created for the Project
 * @param {*} param0 - will have id / name / age information
 */
const Person = (props) => {
    let {id,name,age} = props.data;
    return (
        <div className="person-info-container">
            <div>
                <label>Id:</label>
                <span className="person-id">{id}</span>
            </div>
            <div>
                <label>Name:</label>
                <span className="person-name">{name}</span>
            </div>
            <div>
                <label>Age:</label>
                <span className="person-age">{age}</span>
            </div>
        </div>
      );
}
 
export default Person;