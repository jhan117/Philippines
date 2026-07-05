"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";

import classes from "./ContentSections.module.css";

import {
  educationImages,
  weatherImages,
  jobImages,
  wealthGapImages,
  historyImages,
  trafficImages,
  cultureImages,
} from "@/app/_utils/images";

const IntroOutroSec = ({ content }) => (
  <section>
    {Array.isArray(content) ? (
      <div className={classes.multipleParagraphs}>
        {content.map((d, idx) => (
          <p key={idx}>{d}</p>
        ))}
      </div>
    ) : (
      <p>{content}</p>
    )}
  </section>
);

const H3Section = ({ title, children }) => (
  <section className={classes.h3Section}>
    <h3>{title}</h3>
    {children}
  </section>
);

const BasicSec = ({ title, text }) => (
  <H3Section title={title}>
    {/* {props.tag == "wealth_gap" && props.h3Idx == 0 && (
      <Image src={wealthGapImages[0]} />
    )} */}
    {/* {Array.isArray(pData) ? (
      pData.map((pd, idx) => (
        <DetailedParagraphs
          h3Idx={props.h3Idx}
          key={idx}
          p={pd}
          tag={props.tag}
          pIdx={idx}
        />
      ))
    ) : (
      <p>{text}</p>
    )} */}
    <p>{text}</p>
  </H3Section>
);

const H4Section = ({ subTitle, text, topImgs, bottomImgs }) => (
  <li className={classes.h4Section}>
    <h4>
      {/* {props.h4Link ? (
        <Link href={props.h4Link} target="_blank">
          {props.h4}
        </Link>
      ) : (
        props.h4
      )} */}
      {subTitle}
    </h4>
    {/* {props.tag == "culture" && props.h3Idx == 0 && (
      <Image src={cultureImages[props.h4Idx]} />
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
      <DetailedParagraphs
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
    )} */}
    <Fragment>
      {topImgs && <Image src={topImgs} alt="image" />}
      <p>{text}</p>
      {bottomImgs && <Image src={bottomImgs} alt="image" />}
    </Fragment>
  </li>
);

const DetailSec = ({ title, items }) => {
  // const {
  //   h3: h3Data,
  //   h4: h4Data,
  //   p: pData,
  //   len: lenData,
  //   intro: introData,
  //   h4Link: h4LinkData,
  // } = props.data;

  return (
    <H3Section title={title}>
      {/* {introData && <p>{introData}</p>}
      {props.tag == "weather" && props.h3Idx == 1 && (
        <Image src={weatherImages[1]} />
      )} */}
      {items.map((item, idx) => (
        <ul key={idx} className={classes.h4Con}>
          <H4Section
            key={idx}
            subTitle={item["sub"]}
            text={item["text"]}
            topImgs={item["topImgs"]}
            bottomImgs={item["bottomImgs"]}
          // jobImg={
          //   (props.tag == "job" && props.h3Idx == 1 && jobImages[h4Idx]) ||
          //   (props.tag == "job" && props.h3Idx == 2 && jobImages.slice(5, 11))
          // }
          // h4Link={h4LinkData && h4LinkData[h4Idx]}
          // tag={props.tag}
          />
        </ul>
      ))}
    </H3Section>
  );
};

const ParagraphList = (props) => (
  <ul>
    {props.data.map((d, idx) => (
      <li className={classes.addList} key={idx}>
        {d}
      </li>
    ))}
  </ul>
);

const DetailedParagraphs = (props) => (
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
              idx == 0 && (
                <div className={classes.jobHotelImg}>
                  <Image src={trafficImages[8]} />
                  <Image src={trafficImages[9]} />
                </div>
              )}
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
          <ParagraphList data={props.p[1]} />
        ) : (
          <p>{props.p[1]}</p>
        )}
      </Fragment>
    )}
  </div>
);

const MainSec = ({ section }) =>
  section.text ? (
    <BasicSec title={section.title} text={section.text} />
  ) : (
    <DetailSec title={section.title} items={section.items} />
  );


// 기존 페이지들 호환을 위한 컴포넌트 정의
const TextSection = IntroOutroSec;
const PList = DetailedParagraphs;
const H4Contents = (props) => (
  <li className={classes.h4Section}>
    <h4>
      {props.h4Link ? (
        <a href={props.h4Link} target="_blank" rel="noopener noreferrer">
          {props.h4}
        </a>
      ) : (
        props.h4
      )}
    </h4>
    {props.tag == "culture" && props.h3Idx == 0 && (
      <Image src={cultureImages[props.h4Idx]} alt="culture" />
    )}
    {props.tag == "history" && props.h3Idx == 1 && (
      <Image src={historyImages[props.h4Idx]} alt="history" />
    )}
    {props.tag == "traffic" && props.h3Idx == 0 && props.h4Idx == 0 && (
      <div className={classes.jobHotelImg}>
        {trafficImages.slice(0, 2).map((d, i) => (
          <Image src={d} key={i} alt="traffic" />
        ))}
      </div>
    )}
    {props.tag == "traffic" && props.h3Idx == 0 && props.h4Idx == 1 && (
      <div className={classes.jobHotelImg}>
        {trafficImages.slice(2, 4).map((d, i) => (
          <Image src={d} key={i} alt="traffic" />
        ))}
      </div>
    )}
    {props.tag == "traffic" &&
      props.h3Idx == 0 &&
      props.h4Idx != 1 &&
      props.h4Idx != 0 && <Image src={trafficImages[props.h4Idx + 2]} alt="traffic" />}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 0 && (
      <div className={classes.jobSchoolImg}>
        {props.jobImg.slice(0, 3).map((d, i) => (
          <Image src={d} key={i} alt="job" />
        ))}
      </div>
    )}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 1 && (
      <div className={classes.jobHotelImg}>
        {props.jobImg.slice(3, 5).map((d, i) => (
          <Image src={d} key={i} alt="job" />
        ))}
      </div>
    )}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 3 && (
      <Image src={props.jobImg[5]} alt="job" />
    )}
    {props.tag == "job" && props.h3Idx == 1 && props.jobImg && (
      <Image src={props.jobImg} alt="job" />
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
          <Image src={educationImages[0]} alt="education" />
        )}
        {props.tag == "education" && props.h3Idx == 1 && props.h4Idx == 1 && (
          <Image src={educationImages[1]} alt="education" />
        )}
      </Fragment>
    )}
  </li>
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
    <H3Section title={h3Data}>
      {introData && <p>{introData}</p>}
      {props.tag == "weather" && props.h3Idx == 1 && (
        <Image src={weatherImages[1]} alt="weather" />
      )}
      {[...Array(lenData)].map((_, h4Idx) => (
        <ul className={classes.h4Con} key={h4Idx}>
          <H4Contents
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
    </H3Section>
  );
};
const NotHasH4Content = (props) => {
  const { h3: h3Data, p: pData } = props.data;
  return (
    <H3Section title={h3Data}>
      {props.tag == "wealth_gap" && props.h3Idx == 0 && (
        <Image src={wealthGapImages[0]} alt="wealth_gap" />
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
    </H3Section>
  );
};

export {
  IntroOutroSec,
  MainSec,
  BasicSec,
  DetailSec,
  DetailedParagraphs,
  TextSection,
  PList,
  HasH4Content,
  NotHasH4Content,
};