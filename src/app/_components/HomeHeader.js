import DropdownList from "./homePage/DropdownList";
import LinkItem from "./homePage/LinkItem";
import { navList } from "../_utils/data";

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
