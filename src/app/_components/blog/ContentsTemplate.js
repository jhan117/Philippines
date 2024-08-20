"use client";

import Image from "next/image";
import { Fragment } from "react";

import classes from "./ContentsTemplate.module.css";

import {
  educationImages,
  weatherImages,
  jobImages,
  wealthGapImages,
  historyImages,
  trafficImages,
  cultureImages,
} from "@/app/_utils/images";

const H3Contents = (props) => (
  <section className={classes.h3Section}>
    <h3>{props.h3}</h3>
    {props.children}
  </section>
);

const PContents = (props) => (
  <ul>
    {props.data.map((d, idx) => (
      <li className={classes.addList} key={idx}>
        {d}
      </li>
    ))}
  </ul>
);

const PList = (props) => (
  <div className={classes.listCon}>
    {props.p.length > 2 ? (
      <div className={classes.manyP}>
        {props.p.map((d, idx) => (
          <Fragment>
            {props.tag == "wealth_gap" &&
              props.h3Idx == 1 &&
              props.pIdx == 0 &&
              idx == 4 && <Image src={wealthGapImages[1]} />}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 0 &&
              idx == 2 && (
                <div className={classes.trafficMapImg}>
                  <Image src={trafficImages[10]} />
                  <Image src={trafficImages[11]} />
                </div>
              )}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 0 &&
              idx == 3 && <Image src={trafficImages[12]} />}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 0 &&
              idx == 4 && <Image src={trafficImages[13]} />}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 1 &&
              idx == 1 && <Image src={trafficImages[14]} />}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 1 &&
              idx == 2 && <Image src={trafficImages[15]} />}
            <p key={idx}>{d}</p>
          </Fragment>
        ))}
      </div>
    ) : (
      <Fragment>
        <p>{props.p[0]}</p>
        {props.tag == "weather" && props.pIdx == 0 && (
          <Image src={weatherImages[0]} />
        )}
        {Array.isArray(props.p[1]) ? (
          <PContents data={props.p[1]} />
        ) : (
          <p>{props.p[1]}</p>
        )}
      </Fragment>
    )}
  </div>
);

const H4Contents = (props) => (
  <li className={classes.h4Section}>
    <h4>
      {props.h4Link ? (
        <a href={props.h4Link} target="_blank">
          {props.h4}
        </a>
      ) : (
        props.h4
      )}
    </h4>
    {props.tag == "culture" && props.h3Idx == 0 && (
      <Image src={cultureImages[props.h4Idx]} />
    )}
    {props.tag == "history" && props.h3Idx == 1 && (
      <Image src={historyImages[props.h4Idx]} />
    )}
    {props.tag == "traffic" && props.h3Idx == 0 && props.h4Idx == 0 && (
      <div className={classes.jobHotelImg}>
        {trafficImages.slice(0, 2).map((d) => (
          <Image src={d} />
        ))}
      </div>
    )}
    {props.tag == "traffic" && props.h3Idx == 0 && props.h4Idx == 1 && (
      <div className={classes.jobHotelImg}>
        {trafficImages.slice(2, 4).map((d) => (
          <Image src={d} />
        ))}
      </div>
    )}
    {props.tag == "traffic" &&
      props.h3Idx == 0 &&
      props.h4Idx != 1 &&
      props.h4Idx != 0 && <Image src={trafficImages[props.h4Idx + 2]} />}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 0 && (
      <div className={classes.jobSchoolImg}>
        {props.jobImg.slice(0, 3).map((d) => (
          <Image src={d} />
        ))}
      </div>
    )}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 1 && (
      <div className={classes.jobHotelImg}>
        {props.jobImg.slice(3, 5).map((d) => (
          <Image src={d} />
        ))}
      </div>
    )}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 3 && (
      <Image src={props.jobImg[5]} />
    )}
    {props.tag == "job" && props.h3Idx == 1 && props.jobImg && (
      <Image src={props.jobImg} />
    )}
    {Array.isArray(props.p) ? (
      <PList
        p={props.p}
        h3Idx={props.h3Idx}
        tag={props.tag}
        h4Idx={props.h4Idx}
      />
    ) : (
      <Fragment>
        <p>{props.p}</p>
        {props.tag == "education" && props.h3Idx == 0 && props.h4Idx == 0 && (
          <Image src={educationImages[0]} />
        )}
        {props.tag == "education" && props.h3Idx == 1 && props.h4Idx == 1 && (
          <Image src={educationImages[1]} />
        )}
      </Fragment>
    )}
  </li>
);

const SectionContent = (props) => (
  <section>
    {Array.isArray(props.data) ? (
      <div className={classes.manyP}>
        {props.data.map((d, idx) => (
          <p key={idx}>{d}</p>
        ))}
      </div>
    ) : (
      <p>{props.data}</p>
    )}
  </section>
);

const HasH4Content = (props) => {
  const {
    h3: h3Data,
    h4: h4Data,
    p: pData,
    len: lenData,
    intro: introData,
    h4Link: h4LinkData,
  } = props.data;

  return (
    <H3Contents key={props.h3Idx} h3={h3Data}>
      {introData && <p>{introData}</p>}
      {props.tag == "weather" && props.h3Idx == 1 && (
        <Image src={weatherImages[1]} />
      )}
      {[...Array(lenData)].map((_, h4Idx) => (
        <ul className={classes.h4Con}>
          <H4Contents
            key={h4Idx}
            h4Idx={h4Idx}
            h3Idx={props.h3Idx}
            h4={h4Data[h4Idx]}
            p={pData[h4Idx]}
            jobImg={
              (props.tag == "job" && props.h3Idx == 1 && jobImages[h4Idx]) ||
              (props.tag == "job" && props.h3Idx == 2 && jobImages.slice(5, 11))
            }
            h4Link={h4LinkData && h4LinkData[h4Idx]}
            tag={props.tag}
          />
        </ul>
      ))}
    </H3Contents>
  );
};

const NotHasH4Content = (props) => {
  const { h3: h3Data, p: pData } = props.data;

  return (
    <H3Contents key={props.h3Idx} h3={h3Data}>
      {props.tag == "wealth_gap" && props.h3Idx == 0 && (
        <Image src={wealthGapImages[0]} />
      )}
      {Array.isArray(pData) ? (
        pData.map((pd, idx) => (
          <PList
            h3Idx={props.h3Idx}
            key={idx}
            p={pd}
            tag={props.tag}
            pIdx={idx}
          />
        ))
      ) : (
        <p>{pData}</p>
      )}
    </H3Contents>
  );
};

export { SectionContent, HasH4Content, NotHasH4Content, PList };
