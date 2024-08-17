"use client";

import { Fragment } from "react";

import HomeSlide from "./_components/homePage/HomeSlide";
import MemberList from "./_components/member/MemberList";

const HomeMain = () => {
  return (
    <Fragment>
      <HomeSlide />
      <MemberList />
    </Fragment>
  );
};

export default HomeMain;
