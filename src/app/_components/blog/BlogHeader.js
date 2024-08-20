import classes from "./BlogHeader.module.css";

const BlogHeader = (props) => {
  return (
    <article className={classes.card}>
      <h2 className={classes.heading}>{props.title}</h2>
      <p className={classes.writer}>작성자: {props.quthor}</p>
      {props.children}
    </article>
  );
};

export default BlogHeader;
