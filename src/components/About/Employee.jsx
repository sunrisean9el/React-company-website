import React from "react";
import employees from "../../data/Employees";
import manPicture from "../../images/man.jpg";
import womanPicture from "../../images/woman.jpg";

const Employee = () => {
  return employees.map((item, id) => {
    return (
      <div className="employee">
        <div className="employee-photo-wrapper">
          <img
            src={id === 0 ? manPicture : womanPicture}
            alt="Zdjęcie pracownika"
            className="employee-photo"
          />
        </div>
        <div className="employee-bio">
          <p className="employee-name">
            {item.firstName} {item.lastName} {item.position}
          </p>
          <p className="employee-description">{item.description}</p>
        </div>
      </div>
    );
  });
};

export default Employee;
