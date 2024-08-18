import { Fragment } from "react";
import classes from "./ContentsTemplate.module.css";

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
          <p key={idx}>{d}</p>
        ))}
      </div>
    ) : (
      <Fragment>
        <p>{props.p[0]}</p>
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
    {Array.isArray(props.p) ? <PList p={props.p} /> : <p>{props.p}</p>}
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
      {introData ? <p>{introData}</p> : null}
      {[...Array(lenData)].map((_, h4Idx) => (
        <ul className={classes.h4Con}>
          <H4Contents
            key={h4Idx}
            h4={h4Data[h4Idx]}
            p={pData[h4Idx]}
            h4Link={h4LinkData ? h4LinkData[h4Idx] : null}
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
      {Array.isArray(pData) ? (
        pData.map((pd, idx) => <PList key={idx} p={pd} />)
      ) : (
        <p>{pData}</p>
      )}
    </H3Contents>
  );
};

export { SectionContent, HasH4Content, NotHasH4Content, PList };
