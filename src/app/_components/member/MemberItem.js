import Image from "next/image";
import { motion } from "framer-motion";

import classes from "./MemberItem.module.css";

const MemberItem = (props) => {
  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.div className={classes.memberItem} variants={item}>
      <Image
        src={`https://github.com/user-attachments/assets/${props.src}`}
        width={100}
        height={100}
        alt={props.name}
      />
      <h3>{props.name}</h3>
      <div className={classes.info}>
        <p>{props.role}</p>
        <p>{props.univ}</p>
        <p>{props.major}</p>
      </div>
    </motion.div>
  );
};

export default MemberItem;
