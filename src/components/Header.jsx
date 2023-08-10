import PropTypes from "prop-types";

const Header = ({ title }) => {
  return (
    <header>
      <h1>{title}</h1>
    </header>
  );
};

Header.defaultProps = {
  title: "Task Tracker",
};

// eslint-disable-next-line react/no-typos
Header.PropTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in Javascript
const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
