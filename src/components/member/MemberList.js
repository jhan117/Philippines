import MemberItem from "./MemberItem";
import { memberList } from "@/data/siteData";

const MemberList = () => {
  return (
    <section className="w-full py-20 px-6 text-center flex flex-col items-center gap-10 bg-slate-50 border-t border-slate-100">
      <div className="flex flex-col gap-2">
        <h2 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight">
          프로젝트 멤버
        </h2>
        <p className="text-slate-500 font-medium">
          대구대학교 파란사다리 필리핀 2조
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-6 max-w-6xl">
        {memberList.map((member) => (
          <MemberItem
            key={member.id}
            src={member.src}
            name={member.name}
            role={member.role}
            univ={member.univ}
            major={member.major}
            instagramId={member.insId}
          />
        ))}
      </div>
    </section>
  );
};

export default MemberList;
