"use client";

import { use } from "react";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import { ContentRenderer } from "@/components/blog/ContentSections";
import CardList from "@/components/blog/CardList";
import { PAGE_CONFIGS } from "@/data/pageConfigs";
import { navList } from "@/data/siteData";

const SubPageNav = ({ currentPath }) => {
  const parentCategory = currentPath.split("/")[0];
  const navItem = navList.find((item) => item.enName === parentCategory);

  const tabs = navItem?.subItems
    ? navItem.subItems.map((sub) => ({
        label: sub.koName,
        href: `/${parentCategory}/${sub.enName}`,
      }))
    : [];

  if (tabs.length === 0) return null;

  return (
    <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-slate-100">
      {tabs.map((tab, idx) => {
        const isActive = currentPath === tab.href.slice(1);
        return (
          <Link
            key={idx}
            href={tab.href}
            className={`px-5 py-2 rounded-full text-sm font-semibold transition-all duration-200 ${
              isActive
                ? "bg-primary-500 text-white shadow-md shadow-primary-500/20"
                : "bg-slate-100 text-slate-500 hover:bg-slate-200 hover:text-slate-700"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export default function Subpage({ params }) {
  const resolvedParams = use(params);
  const { slug } = resolvedParams;
  let path = slug.join("/");

  // Aliases for parent categories
  if (path === "environment") path = "environment/traffic";
  if (path === "economy") path = "economy/wealth_gap";

  // Special case for interview list page
  if (path === "interview") {
    return <CardList />;
  }

  const pageConfig = PAGE_CONFIGS[path];

  if (!pageConfig) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-slate-500 min-h-[50vh]">
        <h2 className="text-2xl font-bold mb-2 text-slate-800">
          페이지를 찾을 수 없습니다
        </h2>
        <p>요청하신 경로: {path}</p>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 min-h-screen py-10">
      <BlogHeader header={pageConfig.header} writer={pageConfig.writer}>
        <SubPageNav currentPath={path} />
        <ContentRenderer blocks={pageConfig.blocks} />
      </BlogHeader>
    </div>
  );
}
