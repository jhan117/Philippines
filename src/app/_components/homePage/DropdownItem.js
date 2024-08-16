import { Fragment } from "react";
import LinkItem from "./LinkItem";

import classes from "./DropdonwItem.module.css";

const DropdownItem = (props) => {
  return (
    <Fragment>
      <LinkItem
        className={classes.dropdownItem}
        href={props.href}
        text={props.text}
        dropdownHandle={props.dropdownHandle}
      />
      {props.isLast ? null : (
        <li className={classes.divider}>
          <hr />
        </li>
      )}
    </Fragment>
  );
};

export default DropdownItem;
