import React from "react";
import PropTypes from "prop-types";
import "./styles/navigationBar.css";

const MenuItem = (props) => {
  const { value } = props;
  return (
    <li role="menuitem" tabIndex="-1">
      {value}
    </li>
  );
};
MenuItem.propTypes = {
  value: PropTypes.string.isRequired
};

const NavigationBar = (props) => {
  const { items = [] } = props;
  return (
    <div>
      <ul>
        {items.map(({ value }, index) => {
          return <MenuItem value={value} key={index} />;
        })}
      </ul>
    </div>
  );
};
NavigationBar.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      value: PropTypes.string
    })
  )
};

export default NavigationBar;
