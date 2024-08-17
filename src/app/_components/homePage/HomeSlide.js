import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";

import imgList from "@/app/_utils/imgs";
import { sequenceList } from "@/app/_utils/data";

import classes from "./HomeSlide.module.css";

const delay = 2500;

const HomeSlide = () => {
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
  );
};

export default HomeSlide;
