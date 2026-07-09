"use client";

import { usePathname, useRouter } from "next/navigation";
import { useState, useEffect } from "react";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHouse,
  faArrowLeft,
  faArrowUp,
} from "@fortawesome/free-solid-svg-icons";

const Back = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScrollTop(true);
      } else {
        setShowScrollTop(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const isInterviewDetail =
    pathname.startsWith("/interview/") && pathname !== "/interview";

  const handleBackClick = () => {
    if (isInterviewDetail) {
      router.push("/interview");
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      {children}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
        {/* Scroll to Top Button */}
        <button
          className={`w-12 h-12 bg-slate-800 border-2 border-white/20 rounded-full cursor-pointer flex justify-center items-center shadow-lg hover:bg-primary-600 hover:border-primary-400 transition-all text-white ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          onClick={scrollToTop}
          aria-label="맨 위로 가기"
        >
          <FontAwesomeIcon icon={faArrowUp} className="w-5 h-5" />
        </button>

        {/* Back / Home Button */}
        <button
          className="w-12 h-12 bg-slate-800 border-2 border-white/20 rounded-full cursor-pointer flex justify-center items-center shadow-lg hover:bg-primary-600 hover:border-primary-400 transition-all text-white"
          onClick={handleBackClick}
          aria-label={
            isInterviewDetail ? "인터뷰 목록으로 돌아가기" : "홈으로 이동"
          }
        >
          <FontAwesomeIcon
            icon={isInterviewDetail ? faArrowLeft : faHouse}
            className="w-5 h-5"
          />
        </button>
      </div>
    </div>
  );
};

export default Back;
