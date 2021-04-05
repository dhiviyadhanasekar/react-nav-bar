import React, { useState, Fragment } from "react";
import PropTypes from "prop-types";
import "./styles/menuItem.css";
import { menuItemPropType } from "../types/types";
import { NOOP } from "../utils/defaultValues";
import NavigationBar, { NavigationTypes } from "./navigationBar";

const MenuItem = (props) => {
  const {
    value,
    link,
    items = [],
    type,
    onClickItem,
    ariaLabel,
    title
  } = props;
  const needsDropdown = items.length > 0;
  const [isHovered, setIsHovered] = useState(false);

  const linkClickHandler = (e) => {
    e.preventDefault();
    if (link && link.length > 0) {
      //TODO: move this to a utils file for re-usability
      //TODO: link validation
      window.open(link, "_blank");
    } else if (needsDropdown) {
    }
    if (onClickItem) onClickItem(e);
  };

  const handleMouseOver = (e) => {
    if (needsDropdown) setIsHovered(true);
  };

  const handleMouseLeave = (e) => {
    if (needsDropdown) setIsHovered(false);
  };

  console.log("needsDropdown, value", needsDropdown, value);

  return (
    <Fragment>
      <li
        role="menuitem"
        tabIndex="-1"
        className="menuItem"
        ariaLabel={ariaLabel}
        title={title}
        onMouseOver={handleMouseOver}
        onMouseLeave={handleMouseLeave}
      >
        <button onClick={linkClickHandler} className="link" ariaLabel>
          {value}
          {needsDropdown && <span className="arrow">▼</span>}
        </button>
        {needsDropdown && isHovered && (
          <NavigationBar items={items} type={NavigationTypes.MENU} />
        )}
      </li>
    </Fragment>
  );
};
MenuItem.propTypes = {
  ariaLabel: PropTypes.string,
  title: PropTypes.string,
  value: PropTypes.string.isRequired,
  link: PropTypes.string,
  items: PropTypes.arrayOf(menuItemPropType),
  onClickItem: PropTypes.func,
  type: PropTypes.string
};

export default MenuItem;
