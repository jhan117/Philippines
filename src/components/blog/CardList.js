import CardItem from "./CardItem";

import { category } from "@/data/siteData";

const CardList = () => {
  return (
    <ul className="flex flex-row flex-wrap gap-4 justify-center items-center max-w-2xl mx-auto my-8">
      {category.map((d) => (
        <CardItem key={d.id} id={d.id} title={d.tag} name={d.name} />
      ))}
    </ul>
  );
};

export default CardList;
