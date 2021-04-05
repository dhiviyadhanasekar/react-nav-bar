import React from "react";
import PropTypes from "prop-types";
import "./styles/navigationBar.css";
import MenuItem from "./menuItem";
import { menuItemPropType } from "../types/types";

export const NavigationTypes = {
  MENU: "MENU",
  NAV_BAR: "NAV_BAR"
};

const NavigationBar = (props) => {
  const { items = [], type = NavigationTypes.NAV_BAR } = props;
  let role = "menu";
  let menuClass = "menubar";

  switch (type) {
    case NavigationTypes.MENU: {
      role = "listBox";
      menuClass = "listBox";
      break;
    }

    default: {
      break;
    }
  }

  console.log("dd - role", menuClass);
  return (
    <div role={role}>
      <ul className={menuClass}>
        {items.map(({ value, link, items }, index) => {
          return (
            <MenuItem
              type={type}
              value={value}
              link={link}
              items={items}
              key={index}
              level={0}
            />
          );
        })}
      </ul>
    </div>
  );
};
NavigationBar.propTypes = {
  items: PropTypes.arrayOf(menuItemPropType)
};

export default NavigationBar;
