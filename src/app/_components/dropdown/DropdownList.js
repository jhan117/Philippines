"use client";

import { Fragment, useState } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

import DropdownItem from "./DropdownItem";
import Backdrop from "../ui/Backdrop";
import DROP_DOWN from "@/app/_assets/icons/drop-down.svg";

const Dropdown = (props) => {
  const [toggle, setToggle] = useState(false);

  const menuHandler = () => setToggle((toggle) => !toggle);

  return (
    <Fragment>
      {toggle &&
        createPortal(<Backdrop onClick={menuHandler} />, document.body)}
      <li className={`${props.className} relative`}>
        <button className="flex items-center gap-1 hover:text-primary-400 transition-colors" onClick={menuHandler}>
          {props.text}
          <Image src={DROP_DOWN} width={20} height={20} alt="dropdown icon" className={`transition-transform duration-200 ${toggle ? 'rotate-180' : ''}`} />
        </button>
        <ul
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 flex-col py-2 min-w-[8rem] border border-white/10 rounded-xl bg-slate-800 shadow-2xl z-50 overflow-hidden transition-all duration-200 origin-top ${
            toggle ? "flex opacity-100 scale-y-100" : "hidden opacity-0 scale-y-0"
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
