import { useEffect } from "react";
import HomeSlide from "@/components/home/HomeSlide";
import HomeIntro from "@/components/home/HomeIntro";
import CategoryGrid from "@/components/home/CategoryGrid";
import MemberList from "@/components/member/MemberList";

const HomePage = () => {
  useEffect(() => {
    document.title = "Philippines Insight | 대구대 파란사다리 2조";
  }, []);

  return (
    <>
      <HomeSlide />
      <HomeIntro />
      <CategoryGrid />
      <MemberList />
    </>
  );
};

export default HomePage;
