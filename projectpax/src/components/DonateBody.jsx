import PropTypes from "prop-types";

const DonateBody = ({ title }) => {
  return (
    <header className="donateBody">
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Donate Body",
};

Header.propTypes = {
  title: PropTypes.string.isRequired,
};

export default DonateBody;
