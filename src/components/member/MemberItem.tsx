"use client";

import Image from "next/image";

interface MemberItemProps {
  src: string;
  name: string;
  role: string;
  univ: string;
  major: string;
  instagramId?: string;
}

const MemberItem = ({
  src,
  name,
  role,
  univ,
  major,
  instagramId,
}: MemberItemProps) => {
  return (
    <div className="w-56 bg-white p-6 border border-slate-100/80 rounded-4xl text-center flex flex-col items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
      <div className="relative">
        <Image
          className="rounded-full w-24 h-24 object-cover shadow-inner ring-4 ring-slate-50 group-hover:ring-primary-100 transition-colors duration-300"
          src={src}
          width={100}
          height={100}
          alt={name}
          onContextMenu={(e) => e.preventDefault()}
          loading="eager"
        />
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-lg font-bold text-slate-800">{name}</h3>
        <p className="text-primary-500 font-bold tracking-wider text-[11px] mt-1">
          {role}
        </p>
      </div>

      <div className="flex flex-col justify-center text-sm text-slate-500 font-medium">
        <p>{univ}</p>
        <p className="whitespace-pre-wrap text-xs mt-1 text-slate-400">
          {major}
        </p>
      </div>

      {instagramId && (
        <a
          href={`https://www.instagram.com/${instagramId}`}
          target="_blank"
          rel="noreferrer"
          className="mt-2 flex items-center justify-center gap-1.5 w-full py-2 bg-slate-50 hover:bg-primary-50 text-slate-500 hover:text-primary-600 rounded-xl transition-colors font-semibold text-xs border border-slate-100 hover:border-primary-100"
        >
          <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor">
            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z" />
          </svg>
          @{instagramId}
        </a>
      )}
    </div>
  );
};

export default MemberItem;
