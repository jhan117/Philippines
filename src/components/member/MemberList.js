import MemberItem from "./MemberItem";
import { memberList } from "@/data/siteData";

const MemberList = () => {
  return (
    <section className="w-full py-20 px-6 text-center flex flex-col items-center gap-10 bg-slate-50">
      <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
        조원 소개
      </h2>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {memberList.map((member) => (
          <MemberItem
            key={member.id}
            src={member.src}
            name={member.name}
            role={member.id == "m1" ? "조장" : "조원"}
            univ={
              member.id == "m4"
                ? "금오공과대학교"
                : member.id == "m7"
                ? "영남대학교"
                : "대구대학교"
            }
            major={member.major}
          />
        ))}
      </div>
    </section>
  );
};

export default MemberList;
