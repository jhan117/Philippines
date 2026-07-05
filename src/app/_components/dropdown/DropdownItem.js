import { Fragment } from "react";

import LinkItem from "../ui/LinkItem";

const DropdownItem = (props) => {
  return (
    <Fragment>
      <LinkItem
        className="w-full hover:bg-slate-700/50 transition-colors px-4 py-2 text-sm text-slate-200 whitespace-nowrap"
        href={props.href}
        text={props.text}
        dropdownHandle={props.dropdownHandle}
      />
      {!props.isLast && (
        <li className="w-full px-2">
          <hr className="border-t border-white/10 my-1" />
        </li>
      )}
    </Fragment>
  );
};

export default DropdownItem;
