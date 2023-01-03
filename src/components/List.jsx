import React from "react";
import logo from "../logo/user.svg";
import "../scss/List.scss";

const List = ({ name, surname, number }) => {
  return (
    <>
      <div className="users">
        <img width="50px" src={logo} alt="userLogo" />
        <div className="initials">
          <p>{name}</p>
          <p>{surname}</p>
        </div>
      </div>
      <b>{number}</b>
    </>
  );
};

export default List;
