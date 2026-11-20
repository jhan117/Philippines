import { useState, useEffect, ReactNode } from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface FloatingActionsProps {
  children: ReactNode;
}

const FloatingActions = ({ children }: FloatingActionsProps) => {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
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
      navigate("/interview");
    } else {
      navigate("/");
    }
  };

  return (
    <div className="w-full">
      {children}

      {/* Floating Action Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-3 z-50">
        {/* Scroll to Top Button */}
        <button
          type="button"
          className={`w-12 h-12 bg-slate-800 border-2 border-white/20 rounded-full cursor-pointer flex justify-center items-center shadow-lg hover:bg-primary-600 hover:border-primary-400 transition-all text-white ${
            showScrollTop
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-4 pointer-events-none"
          }`}
          onClick={scrollToTop}
          aria-label="맨 위로 가기"
        >
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M5 15l7-7 7 7"
            />
          </svg>
        </button>

        {/* Back / Home Button */}
        <button
          type="button"
          className="w-12 h-12 bg-slate-800 border-2 border-white/20 rounded-full cursor-pointer flex justify-center items-center shadow-lg hover:bg-primary-600 hover:border-primary-400 transition-all text-white"
          onClick={handleBackClick}
          aria-label={
            isInterviewDetail ? "인터뷰 목록으로 돌아가기" : "홈으로 이동"
          }
        >
          {isInterviewDetail ? (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M15 19l-7-7 7-7"
              />
            </svg>
          ) : (
            <svg
              className="w-5 h-5"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.2}
                d="M3 10.5L12 3l9 7.5M5 9.5V20a1 1 0 001 1h4v-6h4v6h4a1 1 0 001-1V9.5"
              />
            </svg>
          )}
        </button>
      </div>
    </div>
  );
};

export default FloatingActions;
