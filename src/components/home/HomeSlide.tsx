import { useEffect, useRef, useState, useCallback, TouchEvent } from "react";
import { sequenceList } from "@/data/siteData";

const imgList = Array.from(
  { length: 17 },
  (_, i) => `/images/philippinesImgs/${i + 1}.webp`,
);
const delay = 4500;

const TypewriterText = ({ words }: { words: string[] }) => {
  const [wordIdx, setWordIdx] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const currentWord = words[wordIdx];
    const isComplete = !isDeleting && displayed === currentWord;
    const isEmpty = isDeleting && displayed === "";

    const timeout = setTimeout(
      () => {
        if (isComplete) {
          setIsDeleting(true);
        } else if (isEmpty) {
          setIsDeleting(false);
          setWordIdx((prev) => (prev + 1) % words.length);
        } else {
          setDisplayed((prev) =>
            isDeleting
              ? currentWord.slice(0, prev.length - 1)
              : currentWord.slice(0, prev.length + 1),
          );
        }
      },
      isComplete ? 1200 : isDeleting ? 45 : 85,
    );

    return () => clearTimeout(timeout);
  }, [displayed, isDeleting, wordIdx, words]);

  return (
    <span>
      {displayed}
      <span className="inline-block w-[2px] h-[0.9em] bg-primary-500 ml-1 align-middle animate-pulse" />
    </span>
  );
};

const HomeSlide = () => {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const touchStartX = useRef(0);

  const resetTimeout = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  };

  const nextSlide = useCallback(() => {
    setIndex((prevIdx) => (prevIdx === imgList.length - 1 ? 0 : prevIdx + 1));
  }, []);

  const prevSlide = useCallback(() => {
    setIndex((prevIdx) => (prevIdx === 0 ? imgList.length - 1 : prevIdx - 1));
  }, []);

  useEffect(() => {
    resetTimeout();
    timeoutRef.current = setTimeout(nextSlide, delay);
    return () => {
      resetTimeout();
    };
  }, [index, nextSlide]);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: TouchEvent<HTMLDivElement>) => {
    const touchEndX = e.changedTouches[0].clientX;
    if (touchStartX.current - touchEndX > 50) {
      nextSlide();
    }
    if (touchStartX.current - touchEndX < -50) {
      prevSlide();
    }
  };

  return (
    <div className="relative w-full overflow-hidden bg-slate-950 flex flex-col md:flex-row h-[calc(100svh-65px)] min-h-[540px]">
      {/* Left Area (Typography & Scroll Down) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full flex flex-col justify-center px-8 md:px-16 lg:px-24 z-20 relative bg-slate-900 border-b md:border-b-0 md:border-r border-slate-800">
        <p className="text-primary-500 font-bold tracking-widest text-xs md:text-sm uppercase mb-4 opacity-90">
          Philippines Insight Archive
        </p>
        <h2 className="text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white mb-6 min-h-[2.4em] flex items-center">
          <TypewriterText words={sequenceList} />
        </h2>
        <p className="text-slate-400 text-sm md:text-base leading-relaxed font-medium max-w-sm">
          대구대학교 파란사다리 2조가 필리핀에서 직접 느끼고 기록한 생생한 현지
          이야기.
        </p>

        {/* Scroll Down Indicator */}
        <div className="absolute bottom-6 md:bottom-8 left-8 md:left-16 flex flex-col items-center gap-2 animate-bounce opacity-70">
          <span className="text-[10px] uppercase tracking-widest text-slate-400 font-bold">
            Scroll
          </span>
          <svg
            className="w-4 h-4 text-primary-500"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="3"
              d="M19 14l-7 7m0 0l-7-7m7 7V3"
            />
          </svg>
        </div>
      </div>

      {/* Right Area (Image Gallery Card) */}
      <div className="w-full md:w-1/2 h-1/2 md:h-full relative bg-slate-950 flex items-center justify-center p-4 md:p-8">
        <div
          className="relative w-full h-full max-w-2xl max-h-[85vh] rounded-2xl overflow-hidden shadow-2xl group cursor-pointer border border-white/5"
          onClick={nextSlide}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {imgList.map((img, idx) => {
            const isCurrent = idx === index;
            const isPrev =
              idx === (index === 0 ? imgList.length - 1 : index - 1);
            const isNext =
              idx === (index === imgList.length - 1 ? 0 : index + 1);

            if (!isCurrent && !isPrev && !isNext) return null;

            return (
              <div
                key={img}
                className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-in-out ${
                  isCurrent ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
              >
                <div className="absolute inset-0 bg-slate-950/20 z-10 pointer-events-none" />
                <img
                  className="w-full h-full object-cover object-bottom select-none"
                  src={img}
                  alt={`필리핀 현지 사진 ${idx + 1}`}
                  loading={isCurrent ? "eager" : "lazy"}
                  draggable={false}
                  onContextMenu={(e) => e.preventDefault()}
                />
              </div>
            );
          })}

          {/* Arrow Controls (always subtly visible on touch, hover on desktop) */}
          <button
            type="button"
            aria-label="이전 사진"
            className="absolute left-3 md:left-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/40 text-white opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-primary-500 backdrop-blur-sm border border-white/10 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              prevSlide();
            }}
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>

          <button
            type="button"
            aria-label="다음 사진"
            className="absolute right-3 md:right-4 top-1/2 -translate-y-1/2 z-30 p-2 md:p-3 rounded-full bg-black/40 text-white opacity-80 md:opacity-0 md:group-hover:opacity-100 transition-opacity hover:bg-primary-500 backdrop-blur-sm border border-white/10 cursor-pointer"
            onClick={(e) => {
              e.stopPropagation();
              nextSlide();
            }}
          >
            <svg
              className="w-5 h-5 md:w-6 md:h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2.5"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>

          {/* Minimal Text Indicator */}
          <div className="absolute bottom-6 right-6 z-30 bg-black/40 backdrop-blur-md text-white text-xs md:text-sm font-semibold tracking-widest px-4 py-1.5 rounded-full border border-white/10 shadow-lg">
            {String(index + 1).padStart(2, "0")} / {imgList.length}
          </div>

          {/* Photo Credit */}
          <div className="absolute bottom-6 left-6 z-30 bg-black/40 backdrop-blur-md text-white/90 text-[11px] md:text-xs font-medium tracking-wide px-3 py-1.5 rounded-full border border-white/10 shadow-lg flex items-center gap-1.5">
            <svg
              className="w-3.5 h-3.5 text-primary-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            Photo by Vanessa (신나연)
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomeSlide;
