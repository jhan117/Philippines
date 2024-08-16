import Link from "next/link";

const LinkItem = (props) => {
  return (
    <li className={props.className}>
      <Link href={props.href} onClick={props.dropdownHandle}>
        {props.text}
      </Link>
    </li>
  );
};

export default LinkItem;
