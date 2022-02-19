import React from "react";
import PropTypes from "prop-types";

const Home = () => {
  return (
    <div className="home">
      <h1>
        Welcome to our website! style=
        {{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100vh",
        }}
      </h1>
    </div>
  );
};

export default Home;
