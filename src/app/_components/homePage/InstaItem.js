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

export default InstaItem;
