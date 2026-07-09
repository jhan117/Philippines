import { Metadata } from "next";
import Link from "next/link";
import BlogHeader from "@/components/blog/BlogHeader";
import { ContentRenderer } from "@/components/blog/ContentSections";
import CardList from "@/components/blog/CardList";
import { PAGE_CONFIGS } from "@/data/pageConfigs";
import { navList } from "@/data/siteData";

interface SubpageProps {
  params: Promise<{ slug: string[] }>;
}

const SubPageNav = ({ currentPath }: { currentPath: string }) => {
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
    <div className="flex flex-wrap gap-2 mb-8 pb-4 border-b border-slate-200">
      {tabs.map((tab, idx) => {
        const isActive = currentPath === tab.href.slice(1);
        return (
          <Link
            key={idx}
            href={tab.href}
            className={`px-5 py-2 rounded-full text-[15px] font-medium transition-colors border ${
              isActive
                ? "bg-slate-800 text-white border-slate-800 shadow-sm"
                : "bg-white text-slate-700 border-slate-300 hover:bg-slate-50 hover:text-slate-900"
            }`}
          >
            {tab.label}
          </Link>
        );
      })}
    </div>
  );
};

export async function generateMetadata({
  params,
}: SubpageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { slug } = resolvedParams;
  let path = slug.join("/");

  if (path === "environment") path = "environment/traffic";
  if (path === "economy") path = "economy/wealth_gap";

  if (path === "interview") {
    return { title: "인터뷰 | Philippines Insight" };
  }

  const pageConfig = PAGE_CONFIGS[path];
  if (!pageConfig)
    return { title: "페이지를 찾을 수 없습니다 | Philippines Insight" };

  return {
    title: `${pageConfig.header} | Philippines Insight`,
    description: `${pageConfig.header} - 대구대 파란사다리 2조가 필리핀에서 직접 느끼고 기록한 생생한 현지 이야기.`,
  };
}

export default async function Subpage({ params }: SubpageProps) {
  const resolvedParams = await params;
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
    <div className="w-full bg-white min-h-screen py-8 md:py-16 selection:bg-slate-100 selection:text-slate-900">
      <BlogHeader header={pageConfig.header} writer={pageConfig.writer}>
        <SubPageNav currentPath={path} />
        <ContentRenderer blocks={pageConfig.blocks} />
      </BlogHeader>
    </div>
  );
}
