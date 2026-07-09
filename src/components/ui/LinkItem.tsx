import Link from "next/link";

const LinkItem = (props) => {
  return (
    <li className={props.className}>
      <Link
        href={props.href}
        onClick={props.dropdownHandle}
        className="block w-full h-full"
      >
        {props.text}
      </Link>
    </li>
  );
};

export default LinkItem;
