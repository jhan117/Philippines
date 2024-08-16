import { Fragment } from "react";
import InstaItem from "./homePage/InstaItem";

import classes from "./HomeFooter.module.css";
import { insList } from "../_utils/data";

const HomeFooter = () => {
  return (
    <footer className={classes.footer}>
      <p>2024 대구대학교 파란사다리사업</p>
      <p>
        Instagram:
        {insList.map((data) => {
          return (
            <Fragment>
              <InstaItem key={data.id} name={data.name} insId={data.insId} />
              {data.id == "ins7" ? null : "|"}
            </Fragment>
          );
        })}
      </p>
      <p>© Copyright 2024 필리핀 2조. All Rights Reserved.</p>
    </footer>
  );
};

export default HomeFooter;
