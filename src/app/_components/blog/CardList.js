import CardItem from "./CardItem";

import classes from "./CardList.module.css";

import { category } from "@/app/_utils/data";

const CardList = () => {
  return (
    <ul className={classes.cardCon}>
      {category.map((d) => (
        <CardItem key={d.id} id={d.id} title={d.tag} name={d.name} />
      ))}
    </ul>
  );
};

export default CardList;
