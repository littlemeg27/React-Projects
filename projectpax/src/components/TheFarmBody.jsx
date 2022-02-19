import PropTypes from "prop-types";
import React, { Component } from "react";

const TheFarmBody = ({ title }) => {
  return (
    <header className="theFarmBody">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Farm Body",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default TheFarmBody;
