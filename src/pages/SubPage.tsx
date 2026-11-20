import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import BlogHeader from "@/components/blog/BlogHeader";
import { ContentRenderer } from "@/components/blog/ContentSections";
import CardList from "@/components/blog/CardList";
import FloatingActions from "@/components/layout/FloatingActions";
import { PAGE_CONFIGS } from "@/data/pageConfigs";
import { navList } from "@/data/siteData";

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
      {tabs.map((tab) => {
        const isActive = currentPath === tab.href.slice(1);
        return (
          <Link
            key={tab.href}
            to={tab.href}
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

const SubPage = () => {
  const params = useParams();
  let path = (params["*"] || "").replace(/^\/+|\/+$/g, "");

  if (path === "environment") path = "environment/traffic";
  if (path === "economy") path = "economy/wealth_gap";

  const isInterviewList = path === "interview";
  const pageConfig = isInterviewList ? undefined : PAGE_CONFIGS[path];

  useEffect(() => {
    if (isInterviewList) {
      document.title = "인터뷰 | Philippines Insight";
    } else if (pageConfig) {
      document.title = `${pageConfig.header} | Philippines Insight`;
    } else {
      document.title = "페이지를 찾을 수 없습니다 | Philippines Insight";
    }
  }, [isInterviewList, pageConfig]);

  if (isInterviewList) {
    return (
      <FloatingActions>
        <CardList />
      </FloatingActions>
    );
  }

  if (!pageConfig) {
    return (
      <FloatingActions>
        <div className="flex flex-col items-center justify-center py-24 px-6 text-slate-500 min-h-[60vh] text-center">
          <p className="text-primary-500 font-bold text-sm uppercase tracking-widest mb-2">
            404 Not Found
          </p>
          <h2 className="text-2xl md:text-3xl font-bold mb-3 text-slate-800">
            페이지를 찾을 수 없습니다
          </h2>
          <p className="text-slate-500 mb-8">요청하신 경로: /{path}</p>
          <Link
            to="/"
            className="px-6 py-3 bg-slate-900 hover:bg-primary-500 text-white font-semibold rounded-xl transition-colors shadow-sm"
          >
            홈으로 돌아가기
          </Link>
        </div>
      </FloatingActions>
    );
  }

  return (
    <FloatingActions>
      <div className="w-full bg-white min-h-screen py-8 md:py-16 selection:bg-slate-100 selection:text-slate-900">
        <BlogHeader header={pageConfig.header} writer={pageConfig.writer}>
          <SubPageNav currentPath={path} />
          <ContentRenderer blocks={pageConfig.blocks} />
        </BlogHeader>
      </div>
    </FloatingActions>
  );
};

export default SubPage;
