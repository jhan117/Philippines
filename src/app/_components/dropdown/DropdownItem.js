import { Fragment } from "react";

import LinkItem from "../ui/LinkItem";

import classes from "./DropdownItem.module.css";

const DropdownItem = (props) => {
  return (
    <Fragment>
      <LinkItem
        className={classes.dropdownItem}
        href={props.href}
        text={props.text}
        dropdownHandle={props.dropdownHandle}
      />
      {!props.isLast && (
        <li className={classes.divider}>
          <hr />
        </li>
      )}
    </Fragment>
  );
};

export default DropdownItem;
