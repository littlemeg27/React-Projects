import PropTypes from "prop-types";
import React, { Component } from "react";

const AboutBody = ({ title }) => {
  return (
    <header className="aboutBody">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "About Body",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Header;
