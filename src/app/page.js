"use client";

import { Fragment } from "react";

import HomeSlide from "@/components/home/HomeSlide";
import MemberList from "@/components/member/MemberList";

const HomeMain = () => {
  return (
    <Fragment>
      <HomeSlide />
      <MemberList />
    </Fragment>
  );
};

export default HomeMain;
