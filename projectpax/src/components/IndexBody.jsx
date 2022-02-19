import PropTypes from "prop-types";
import React, { Component } from "react";

const IndexBody = ({ title }) => {
  return (
    <header className="indexBody">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Index Body",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default IndexBody;
