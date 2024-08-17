"use client";

import { motion } from "framer-motion";
import { TypeAnimation } from "react-type-animation";
import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import MemberItem from "./_components/homePage/MemberItem";

import { sequenceList, memberList } from "./_utils/data";
import imgList from "./_utils/imgs";

import classes from "./page.module.css";

const delay = 2500;

export default function HomeMain() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIdx) =>
          prevIdx === imgList.length - 1 ? 0 : prevIdx + 1
        ),
      delay
    );
    return () => {
      resetTimeout();
    };
  }, [index]);

  return (
    <main>
      <div className={classes.hero}>
        <div
          className={classes.slideshowSlider}
          style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
        >
          {imgList.map((img, idx) => (
            <Image
              key={idx}
              className={classes.slide}
              src={img}
              alt="필리핀 이미지"
            />
          ))}
        </div>
        <div className={classes.slideshowDots}>
          {imgList.map((_, idx) => (
            <div
              key={idx}
              className={`${classes.slideshowDot} ${
                idx == index ? classes.active : ""
              }`}
              onClick={() => {
                setIndex(idx);
              }}
            ></div>
          ))}
        </div>

        <TypeAnimation
          className={classes.heroText}
          sequence={sequenceList}
          cursor={false}
          repeat={Infinity}
        />
      </div>

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
    </main>
  );
}
