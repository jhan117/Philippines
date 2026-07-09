import { Fragment } from "react";

import HomeSlide from "@/components/home/HomeSlide";
import HomeIntro from "@/components/home/HomeIntro";
import CategoryGrid from "@/components/home/CategoryGrid";
import MemberList from "@/components/member/MemberList";

const HomeMain = () => {
  return (
    <Fragment>
      <HomeSlide />
      <HomeIntro />
      <CategoryGrid />
      <MemberList />
    </Fragment>
  );
};

export default HomeMain;
