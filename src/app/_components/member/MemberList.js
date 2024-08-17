import { motion } from "framer-motion";

import MemberItem from "./MemberItem";

import { memberList } from "@/app/_utils/data";

import classes from "./MemberList.module.css";

const MemberList = () => {
  return (
    <div className={classes.teamIntro}>
      <motion.h2 initial={{ scale: 0 }} animate={{ rotate: 360, scale: 1 }}>
        조원 소개
      </motion.h2>
      <motion.div
        className={classes.memberCon}
        variants={{
          visible: {
            transition: {
              delayChildren: 0.1,
              staggerChildren: 0.3,
            },
          },
        }}
        initial="hidden"
        animate="visible"
      >
        {memberList.map((member) => (
          <MemberItem
            key={member.id}
            src={member.src}
            name={member.name}
            role={member.id == "m1" ? "조장" : "조원"}
            univ={
              member.id == "m4"
                ? "금오공과대학교"
                : member.id == "m7"
                ? "영남대학교"
                : "대구대학교"
            }
            major={member.major}
          />
        ))}
      </motion.div>
    </div>
  );
};

export default MemberList;
