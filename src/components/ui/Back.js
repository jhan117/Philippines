"use client";

import { usePathname, useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";


const Back = ({ children }) => {
  const router = useRouter();
  const pathname = usePathname();

  const handleBackClick = () => {
    if (pathname.startsWith("/interview")) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <div>
      {children}
      <div className="fixed bottom-8 right-8 w-12 h-12 bg-slate-800 border-2 border-white/20 rounded-full cursor-pointer flex justify-center items-center shadow-lg hover:bg-primary-600 hover:border-primary-400 transition-all z-50 text-white" onClick={handleBackClick}>
        <FontAwesomeIcon icon={faArrowRotateLeft} className="w-5 h-5" />
      </div>
    </div>
  );
};

export default Back;
