import { Fragment } from "react";

import { insList } from "@/data/siteData";

import Link from "next/link";

const InstaItem = (props) => {
  return (
    <a
      target="_blank"
      rel="noopener noreferrer"
      href={`https://www.instagram.com/${props.insId}`}
      className="text-primary-500 hover:text-primary-400 font-medium transition-colors mx-2"
    >
      {props.name}
    </a>
  );
};

const HomeFooter = () => {
  return (
    <footer className="w-full bg-slate-900 text-slate-300 py-12 px-6 flex flex-col items-center gap-4 text-sm mt-auto border-t border-slate-800">
      <p className="font-semibold text-slate-100">2024 대구대학교 파란사다리사업</p>
      <p>
        Instagram:
        {insList.map((data) => {
          return (
            <Fragment key={data.id}>
              <InstaItem name={data.name} insId={data.insId} />
              {data.id != "ins7" && <span className="mx-1 text-slate-500">|</span>}
            </Fragment>
          );
        })}
      </p>
      <p>
        혹시 개발에 관심이 있나요?:{" "}
        <Link
          href="https://github.com/jhan117/Philippines"
          target="_blank"
          className="text-primary-500 hover:text-primary-400 font-medium underline underline-offset-4 transition-colors"
        >
          개발 일지 보러가기
        </Link>
      </p>
      <p>© Copyright 2024 필리핀 2조. All Rights Reserved.</p>
    </footer>
  );
};

export default HomeFooter;
