import Link from "next/link";

import classes from "./CardItem.module.css";

const CardItem = (props) => {
  return (
    <li className={classes.card}>
      <Link href={`/interview/${props.id}`}>
        <h3>{props.title}</h3>
        <p>{props.name}</p>
      </Link>
    </li>
  );
};

export default CardItem;
