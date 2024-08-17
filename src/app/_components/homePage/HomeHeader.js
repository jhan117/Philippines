import DropdownList from "../dropdown/DropdownList";
import LinkItem from "../ui/LinkItem";

import { navList, envList, ecoList } from "@/app/_utils/data";

import classes from "./HomeHeader.module.css";

const HomeHeader = () => {
  return (
    <header className={classes.homeHeader}>
      <h1>필리핀 2조</h1>
      <nav>
        <ul className={classes.homeNav}>
          {navList.map((item) => {
            if (item.id == "a3") {
              return (
                <DropdownList
                  key={item.id}
                  className={classes.homeLinkItem}
                  href={`/${item.enName}`}
                  text={item.koName}
                  item={envList}
                />
              );
            } else if (item.id == "a5") {
              return (
                <DropdownList
                  key={item.id}
                  className={classes.homeLinkItem}
                  href={`/${item.enName}`}
                  text={item.koName}
                  item={ecoList}
                />
              );
            } else {
              return (
                <LinkItem
                  key={item.id}
                  className={classes.homeLinkItem}
                  href={`/${item.enName}`}
                  text={item.koName}
                />
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
