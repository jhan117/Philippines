"use client";

import { usePathname, useRouter } from "next/navigation";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRotateLeft } from "@fortawesome/free-solid-svg-icons";

import classes from "./Back.module.css";

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
      <div className={classes.Back} onClick={handleBackClick}>
        <FontAwesomeIcon icon={faArrowRotateLeft} />
      </div>
    </div>
  );
};

export default Back;
