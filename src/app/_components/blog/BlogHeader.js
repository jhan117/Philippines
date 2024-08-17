import classes from "./BlogHeader.module.css";

const BlogHeader = (props) => {
  return (
    <article className={classes.card}>
      <h2 className={classes.heading}>{props.header}</h2>
      <p className={classes.writer}>작성자: {props.writer}</p>
      {props.children}
    </article>
  );
};

export default BlogHeader;
