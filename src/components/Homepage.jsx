import React from "react";

const Homepage = ({ data }) => {
  const [final, setfinal] = React.useState({ data });
  console.log(final);

  return (
    <div>
      <h4>Home Page </h4>

      <h4>ID: {final.data.data.id}</h4>
      <h4>Fullname: {final.data.data.fullName}</h4>
      <h4>Role: {final.data.data.role}</h4>

      <h4>
        {" "}
        <img src={final.data.data.dp} />
      </h4>
    </div>
  );
};

export default Homepage;
