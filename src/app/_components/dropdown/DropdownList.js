"use client";

import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

import DropdownItem from "./DropdownItem";
import Backdrop from "../ui/Backdrop";
import DROP_DOWN from "@/app/_assets/icons/drop-down.svg";

import classes from "./DropdownList.module.css";

const Dropdown = (props) => {
  const [toggle, setToggle] = useState(false);

  const menuHandler = () => setToggle((toggle) => !toggle);

  return (
    <Fragment>
      {toggle &&
        createPortal(<Backdrop onClick={menuHandler} />, document.body)}
      <li className={props.className}>
        <button className={classes.btn} onClick={menuHandler}>
          {props.text}
          <Image src={DROP_DOWN} width={21} height={21} alt="dropdown icon" />
        </button>
        <ul
          className={`${classes.dropdownMenu} ${
            toggle && classes.dropdownToggle
          }`}
        >
          {props.item.map((item) => (
            <DropdownItem
              key={item.id}
              href={`${props.href}/${item.enName}`}
              text={item.koName}
              isLast={item.id == "last" ? true : false}
              dropdownHandle={menuHandler}
            />
          ))}
        </ul>
      </li>
    </Fragment>
  );
};

export default Dropdown;
