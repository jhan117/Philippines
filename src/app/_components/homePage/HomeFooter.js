import { Fragment } from "react";

import { insList } from "../../_utils/data";

import classes from "./HomeFooter.module.css";

const InstaItem = (props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.instagram.com/${props.insId}`}
      style={{
        color: "#f90",
        textDecoration: "none",
        margin: "0 0.625em",
      }}
    >
      {props.name}
    </a>
  );
};

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
              {data.id != "ins7" && "|"}
            </Fragment>
          );
        })}
      </p>
      <p>© Copyright 2024 필리핀 2조. All Rights Reserved.</p>
    </footer>
  );
};

export default HomeFooter;
