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
//Note the other proptypes should be in small letters
Header.propTypes = {
  title: PropTypes.string.isRequired,
};

//CSS in Javascript
const headingStyle = {
  color: "red",
  backgroundColor: "black",
};

export default Header;
