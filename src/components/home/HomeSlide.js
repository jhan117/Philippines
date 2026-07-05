import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { TypeAnimation } from "react-type-animation";
import { sequenceList } from "@/data/siteData";

const imgList = Array.from({ length: 17 }, (_, i) => `/images/philippinesImgs/${i + 1}.jpg`);



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
    <div className="relative w-full overflow-hidden text-center text-white bg-slate-900 h-[50vh] md:h-[65vh] lg:h-[80vh] min-h-[400px] shadow-2xl">
      <div
        className="w-full h-full whitespace-nowrap transition-transform duration-1000 ease-in-out"
        style={{ transform: `translate3d(${-index * 100}%, 0, 0)` }}
      >
        {imgList.map((img, idx) => (
          <div key={idx} className="inline-block w-full h-full relative">
            {/* Blurred Background to fill wide screens */}
            <Image
              className="absolute inset-0 w-full h-full object-cover blur-2xl opacity-60 scale-110"
              src={img}
              alt="필리핀 배경"
              width={1920}
              height={1080}
              priority={idx === 0}
            />
            {/* Uncropped Foreground Image */}
            <Image
              className="relative w-full h-full object-contain drop-shadow-2xl"
              src={img}
              alt="필리핀 이미지"
              width={1920}
              height={1080}
              onContextMenu={(e) => e.preventDefault()}
              loading="eager"
            />
          </div>
        ))}
      </div>
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-wrap justify-center gap-3 w-full z-20">
        {imgList.map((_, idx) => (
          <div
            key={idx}
            className={`h-2.5 w-2.5 rounded-full cursor-pointer transition-all duration-300 ${
              idx === index ? "bg-primary-500 scale-125 shadow-[0_0_10px_rgba(255,126,20,0.8)]" : "bg-white/50 hover:bg-white/80"
            }`}
            onClick={() => {
              setIndex(idx);
            }}
          ></div>
        ))}
      </div>
      <p className="absolute bottom-3 right-4 text-xs font-light text-white/70 drop-shadow-md z-20 tracking-wider">
        Photographs by Vanessa
      </p>

      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8 z-20 drop-shadow-[0_5px_15px_rgba(0,0,0,0.8)] pointer-events-none">
        <h2 className="text-4xl md:text-5xl lg:text-7xl font-black tracking-tight text-white drop-shadow-2xl">
          <TypeAnimation
            sequence={sequenceList}
            wrapper="span"
            speed={50}
            repeat={Infinity}
            cursor={true}
          />
        </h2>
      </div>
    </div>
  );
};

export default HomeSlide;
