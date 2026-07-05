"use client";

import Link from "next/link";
import Image from "next/image";
import { Fragment } from "react";


const educationImages = ["/images/educationImgs/es1.png", "/images/educationImgs/es2.jpg"];
const weatherImages = ["/images/weatherImgs/wk1.png", "/images/weatherImgs/wk2.png"];
const jobImages = ["/images/jobImgs/js1.jpg", "/images/jobImgs/js2.jpg", "/images/jobImgs/js3.jpg", "/images/jobImgs/js4.jpg", "/images/jobImgs/js5.jpg", "/images/jobImgs/js6.jpg", "/images/jobImgs/js7.jpg", "/images/jobImgs/js8.jpg", "/images/jobImgs/js9.jpg", "/images/jobImgs/js10.jpg"];
const wealthGapImages = ["/images/wealthGapImgs/wk1.jpg", "/images/wealthGapImgs/wk2.jpg"];
const historyImages = ["/images/historyImgs/arch.png", "/images/historyImgs/art.png", "/images/historyImgs/fest.png", "/images/historyImgs/lang.png"];
const trafficImages = ["/images/trafficImgs/tk1.jpg", "/images/trafficImgs/tk2.jpg", "/images/trafficImgs/tk3.jpg", "/images/trafficImgs/tk4.jpg", "/images/trafficImgs/tk5.jpg", "/images/trafficImgs/tk6.jpg", "/images/trafficImgs/tk7.jpg", "/images/trafficImgs/tk8.jpg", "/images/trafficImgs/tk9.png", "/images/trafficImgs/tk10.png", "/images/trafficImgs/tk11.png", "/images/trafficImgs/tk12.png", "/images/trafficImgs/tk13.png", "/images/trafficImgs/tk14.png", "/images/trafficImgs/tk15.png", "/images/trafficImgs/tk16.png"];
const cultureImages = ["/images/cultureImgs/cs1.jpg", "/images/cultureImgs/cs2.jpg", "/images/cultureImgs/cs3.jpg", "/images/cultureImgs/cs4.jpg", "/images/cultureImgs/cs5.jpg", "/images/cultureImgs/cs6.jpg", "/images/cultureImgs/cs7.jpg", "/images/cultureImgs/cs8.jpg"];

const IntroOutroSec = ({ content }) => (
  <section>
    {Array.isArray(content) ? (
      <div className="flex flex-col gap-4">
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
  <section className="flex flex-col gap-4 my-4">
    <h3 className="text-2xl font-bold border-b border-primary-500/20 pb-2 mb-2 text-primary-500">{title}</h3>
    {children}
  </section>
);

const BasicSec = ({ title, text }) => (
  <H3Section title={title}>
    {/* {props.tag == "wealth_gap" && props.h3Idx == 0 && (
      <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={wealthGapImages[0]} />
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
  <li className="flex flex-col gap-2 my-2">
    <h4 className="text-lg font-semibold text-slate-800">
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
      <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={cultureImages[props.h4Idx]} />
    )}
    {props.tag == "traffic" && props.h3Idx == 0 && props.h4Idx == 0 && (
      <div className={classes.jobHotelImg}>
        {trafficImages.slice(0, 2).map((d) => (
          <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={d} />
        ))}
      </div>
    )}
    {props.tag == "traffic" && props.h3Idx == 0 && props.h4Idx == 1 && (
      <div className={classes.jobHotelImg}>
        {trafficImages.slice(2, 4).map((d) => (
          <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={d} />
        ))}
      </div>
    )}
    {props.tag == "traffic" &&
      props.h3Idx == 0 &&
      props.h4Idx != 1 &&
      props.h4Idx != 0 && <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={trafficImages[props.h4Idx + 2]} />}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 0 && (
      <div className={classes.jobSchoolImg}>
        {props.jobImg.slice(0, 3).map((d) => (
          <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={d} />
        ))}
      </div>
    )}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 1 && (
      <div className={classes.jobHotelImg}>
        {props.jobImg.slice(3, 5).map((d) => (
          <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={d} />
        ))}
      </div>
    )}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 3 && (
      <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={props.jobImg[5]} />
    )}
    {props.tag == "job" && props.h3Idx == 1 && props.jobImg && (
      <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={props.jobImg} />
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
          <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={educationImages[0]} />
        )}
        {props.tag == "education" && props.h3Idx == 1 && props.h4Idx == 1 && (
          <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={educationImages[1]} />
        )}
      </Fragment>
    )} */}
    <Fragment>
      {topImgs && <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={topImgs} alt="image" />}
      <p>{text}</p>
      {bottomImgs && <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={bottomImgs} alt="image" />}
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
        <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={weatherImages[1]} />
      )} */}
      {items.map((item, idx) => (
        <ul key={idx} className="flex flex-col gap-4 ml-4">
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
      <li className="text-sm text-slate-700 ml-6 list-disc" key={idx}>
        {d}
      </li>
    ))}
  </ul>
);

const DetailedParagraphs = (props) => (
  <div className="flex flex-col gap-2 text-slate-700 leading-relaxed">
    {props.p.length > 2 ? (
      <div className="flex flex-col gap-4">
        {props.p.map((d, idx) => (
          <Fragment key={idx}>
            {props.tag == "wealth_gap" &&
              props.h3Idx == 1 &&
              props.pIdx == 0 &&
              idx == 4 && <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={wealthGapImages[1]} />}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 0 &&
              idx == 0 && (
                <div className="flex flex-row gap-4 items-center w-full">
                  <Image alt="image" width={1920} height={1080} className="w-1/2 h-auto object-contain rounded-xl my-4 drop-shadow-md" src={trafficImages[8]} />
                  <Image alt="image" width={1920} height={1080} className="w-1/2 h-auto object-contain rounded-xl my-4 drop-shadow-md" src={trafficImages[9]} />
                </div>
              )}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 0 &&
              idx == 2 && (
                <div className="flex flex-col gap-4 w-full">
                  <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={trafficImages[10]} />
                  <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={trafficImages[11]} />
                </div>
              )}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 0 &&
              idx == 3 && <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={trafficImages[12]} />}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 0 &&
              idx == 4 && <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={trafficImages[13]} />}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 1 &&
              idx == 1 && <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={trafficImages[14]} />}
            {props.tag == "traffic" &&
              props.h3Idx == 2 &&
              props.h4Idx == 1 &&
              idx == 2 && <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={trafficImages[15]} />}
            <p key={idx}>{d}</p>
          </Fragment>
        ))}
      </div>
    ) : (
      <Fragment>
        <p>{props.p[0]}</p>
        {props.tag == "weather" && props.pIdx == 0 && (
          <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={weatherImages[0]} />
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
  <li className="flex flex-col gap-2 my-2">
    <h4 className="text-lg font-semibold text-slate-800">
      {props.h4Link ? (
        <a href={props.h4Link} target="_blank" rel="noopener noreferrer">
          {props.h4}
        </a>
      ) : (
        props.h4
      )}
    </h4>
    {props.tag == "culture" && props.h3Idx == 0 && (
      <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={cultureImages[props.h4Idx]} alt="culture" />
    )}
    {props.tag == "history" && props.h3Idx == 1 && (
      <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={historyImages[props.h4Idx]} alt="history" />
    )}
    {props.tag == "traffic" && props.h3Idx == 0 && props.h4Idx == 0 && (
      <div className="flex flex-row gap-4 items-center w-full">
        {trafficImages.slice(0, 2).map((d, i) => (
          <Image alt="image" width={1920} height={1080} className="w-1/2 h-auto object-contain rounded-xl my-4 drop-shadow-md" src={d} key={i} alt="traffic" />
        ))}
      </div>
    )}
    {props.tag == "traffic" && props.h3Idx == 0 && props.h4Idx == 1 && (
      <div className="flex flex-row gap-4 items-center w-full">
        {trafficImages.slice(2, 4).map((d, i) => (
          <Image alt="image" width={1920} height={1080} className="w-1/2 h-auto object-contain rounded-xl my-4 drop-shadow-md" src={d} key={i} alt="traffic" />
        ))}
      </div>
    )}
    {props.tag == "traffic" &&
      props.h3Idx == 0 &&
      props.h4Idx != 1 &&
      props.h4Idx != 0 && <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={trafficImages[props.h4Idx + 2]} alt="traffic" />}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 0 && (
      <div className="flex flex-row gap-4 items-center w-full">
        {props.jobImg.slice(0, 3).map((d, i) => (
          <Image alt="image" width={1920} height={1080} className="w-1/3 h-auto object-contain rounded-xl my-4 drop-shadow-md" src={d} key={i} alt="job" />
        ))}
      </div>
    )}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 1 && (
      <div className="flex flex-row gap-4 items-center w-full">
        {props.jobImg.slice(3, 5).map((d, i) => (
          <Image alt="image" width={1920} height={1080} className="w-1/2 h-auto object-contain rounded-xl my-4 drop-shadow-md" src={d} key={i} alt="job" />
        ))}
      </div>
    )}
    {props.tag == "job" && props.h3Idx == 2 && props.h4Idx == 3 && props.jobImg[5] && (
      <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={props.jobImg[5]} alt="job" />
    )}
    {props.tag == "job" && props.h3Idx == 1 && props.jobImg && (
      <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={props.jobImg} alt="job" />
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
          <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={educationImages[0]} alt="education" />
        )}
        {props.tag == "education" && props.h3Idx == 1 && props.h4Idx == 1 && (
          <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={educationImages[1]} alt="education" />
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
        <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={weatherImages[1]} alt="weather" />
      )}
      {[...Array(lenData)].map((_, h4Idx) => (
        <ul className="flex flex-col gap-4 ml-4" key={h4Idx}>
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
        <Image alt="image" width={1920} height={1080} className="block w-full md:w-3/4 lg:w-2/3 h-auto max-h-[600px] object-contain rounded-2xl my-6 mx-auto drop-shadow-lg" src={wealthGapImages[0]} alt="wealth_gap" />
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
