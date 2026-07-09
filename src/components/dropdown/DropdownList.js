"use client";

import { Fragment, useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Image from "next/image";

import DropdownItem from "./DropdownItem";
import Backdrop from "../ui/Backdrop";
const DROP_DOWN = "/images/icons/drop-down.svg";

const Dropdown = ({
  className,
  text,
  item,
  href,
  isOpen,
  onToggle,
  onClose,
}) => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <Fragment>
      {isOpen &&
        mounted &&
        createPortal(<Backdrop onClick={onClose} />, document.body)}
      <li className={`${className} relative`}>
        <button
          className="flex items-center gap-1 hover:text-primary-400 transition-colors"
          onClick={onToggle}
        >
          {text}
          <Image
            src={DROP_DOWN}
            width={20}
            height={20}
            alt="dropdown icon"
            className={`transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
          />
        </button>
        <ul
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 flex-col py-2 min-w-32 border border-white/10 rounded-xl bg-slate-800 shadow-2xl z-50 overflow-hidden transition-all duration-200 origin-top ${
            isOpen
              ? "flex opacity-100 scale-y-100"
              : "hidden opacity-0 scale-y-0"
          }`}
        >
          {item.map((i) => (
            <DropdownItem
              key={i.id}
              href={`${href}/${i.enName}`}
              text={i.koName}
              isLast={i.id === "last" ? true : false}
              dropdownHandle={onClose}
            />
          ))}
        </ul>
      </li>
    </Fragment>
  );
};

export default Dropdown;
