import { Fragment } from "react";

const HomeIntro = () => {
  return (
    <section className="w-full py-20 md:py-32 px-6 bg-white text-center flex flex-col items-center justify-center border-b border-slate-100 relative -mt-4 rounded-t-4xl z-30 shadow-[0_-10px_40px_rgba(0,0,0,0.05)]">
      <div className="max-w-3xl flex flex-col gap-6">
        <p className="text-primary-500 font-bold tracking-widest text-sm uppercase">
          About Project
        </p>
        <h2 className="text-3xl md:text-5xl font-black text-slate-900 leading-tight">
          파란사다리 2조가 필리핀에서
          <br className="hidden md:block" /> 배우고 느낀 모든 것
        </h2>
        <p className="text-slate-500 text-lg md:text-xl leading-relaxed mt-4 font-medium">
          역사, 문화, 경제부터 현지 취업과 생생한 인터뷰까지.{" "}
          <br className="hidden md:block" />
          우리가 직접 경험하고 기록한 필리핀에서의 정보를 소개합니다.
        </p>
      </div>
    </section>
  );
};

export default HomeIntro;
