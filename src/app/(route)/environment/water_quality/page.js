import Image from "next/image";
import Article from "../../../_components/otherPages/Article";
import contents from "@/app/_utils/writing";

import classes from "./WaterMain.module.css";
import { Fragment } from "react";

const { header, writer, intro, main, concl, data } = contents["waterQuality"];

const widthList = [185, 200, "auto", "auto"];
const heightList = [140, 250, 200, 300];

const ConclData = () => (
  <div className={classes.conclPic}>
    <Image src={data[4]} width={150} height={150} alt="data" />
    <Image src={data[5]} width={150} height={150} alt="data" />
  </div>
);

const page = () => {
  return (
    <Article
      header={header}
      writer={writer}
      intro={intro}
      concl={concl}
      ConclData={ConclData}
    >
      {main.map((m, idx) => (
        <Fragment>
          <Image
            src={data[idx]}
            width={widthList[idx]}
            height={heightList[idx]}
            className={classes.mainImg}
            alt="data"
          />
          <p key={idx}>{m}</p>
        </Fragment>
      ))}
    </Article>
  );
};

export default page;
