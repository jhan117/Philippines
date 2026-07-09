import Link from "next/link";
import { navList } from "@/data/siteData";

const HomeFooter = () => {
  return (
    <footer className="w-full bg-slate-950 text-slate-400 py-16 px-8 md:px-12 flex flex-col gap-12 text-sm mt-auto border-t border-slate-900">
      <div className="max-w-6xl mx-auto w-full grid grid-cols-1 md:grid-cols-3 gap-10 md:gap-8">
        <div className="flex flex-col gap-4">
          <h2 className="text-xl font-bold text-white tracking-wide">
            Philippines <span className="text-primary-500">Insight</span>
          </h2>
          <p className="leading-relaxed text-slate-400 break-keep">
            대구대학교 파란사다리 사업 필리핀 연수 2조의 생생한 현지 조사 및
            기록을 담은 웹사이트입니다.
          </p>
          <p className="font-semibold text-slate-300 mt-2">
            2024 Daegu Univ. Blue Ladder Project
          </p>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-white tracking-widest text-xs uppercase mb-1">
            Quick Links
          </h3>
          <ul className="flex flex-col gap-3 font-medium text-slate-400">
            {navList
              .filter((item) => item.enName)
              .map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.url}
                    className="hover:text-primary-400 transition-colors"
                  >
                    {item.koName} (
                    {item.enName.charAt(0).toUpperCase() + item.enName.slice(1)}
                    )
                  </Link>
                </li>
              ))}
          </ul>
        </div>

        <div className="flex flex-col gap-4">
          <h3 className="font-bold text-white tracking-widest text-xs uppercase mb-1">
            Connect
          </h3>
          <p className="leading-relaxed break-keep">
            프로젝트 소스 코드와
            <br />
            개발 일지가 궁금하시다면?
          </p>
          <Link
            href="https://github.com/jhan117/Philippines"
            target="_blank"
            className="inline-flex items-center justify-center gap-2 mt-2 px-5 py-2.5 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-colors border border-slate-700 hover:border-slate-600 w-max"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path
                fillRule="evenodd"
                d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                clipRule="evenodd"
              />
            </svg>
            GitHub 개발 일지 보기
          </Link>
        </div>
      </div>

      <div className="max-w-6xl mx-auto w-full pt-8 border-t border-slate-800 text-center text-xs text-slate-500">
        © Copyright 2024 Philippines Team 2. All Rights Reserved.
      </div>
    </footer>
  );
};

export default HomeFooter;
