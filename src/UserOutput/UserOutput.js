import React from "react";

const UserOutput = props => {
  return (
    <div className="UserOutput">
      <p>User Name: {props.username}</p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum
        vulputate urna eros, ac congue neque tristique a.
      </p>
    </div>
  );
};

export default UserOutput;
