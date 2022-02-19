import PropTypes from "prop-types";
import React, { Component } from "react";

const DogsBody = ({ title }) => {
  return (
    <header className="dogsBody">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Dogs Body",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DogsBody;
