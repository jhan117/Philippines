import classes from "./Article.module.css";

const page = (props) => {
  return (
    <article className={classes.article}>
      <h2>{props.header}</h2>
      <p className={classes.writer}>작성자: {props.writer}</p>
      <section className={classes.intro}>{props.intro}</section>
      <section className={classes.main}>{props.children}</section>
      <section className={classes.concl}>
        <props.ConclData />
        <p>{props.concl}</p>
      </section>
    </article>
  );
};

export default page;
