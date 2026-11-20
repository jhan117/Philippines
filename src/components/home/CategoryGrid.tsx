import { Link } from "react-router-dom";
import { navList } from "@/data/siteData";

const CategoryGrid = () => {
  const categories = navList.filter((item) => item.id !== "a1");

  return (
    <section className="w-full py-20 px-6 bg-slate-50 flex flex-col items-center">
      <div className="max-w-6xl w-full">
        <div className="flex justify-between items-end mb-10">
          <h2 className="text-2xl md:text-3xl font-black text-slate-900 tracking-tight">
            Insight 탐색
          </h2>
          <p className="text-slate-500 font-medium hidden sm:block">
            관심 있는 주제를 선택해보세요
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <Link
              to={cat.url || `/${cat.enName}`}
              key={cat.id}
              className="group relative h-64 md:h-80 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 block"
            >
              {/* Thumbnail Image */}
              <img
                src={cat.thumbnail || "/images/philippinesImgs/1.webp"}
                alt={cat.koName}
                loading="lazy"
                draggable={false}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Dark Overlay for Text Readability */}
              <div className="absolute inset-0 bg-linear-to-t from-slate-900 via-slate-900/50 to-transparent transition-opacity duration-300 group-hover:from-slate-900 group-hover:via-slate-900/70" />

              {/* Text Content */}
              <div className="absolute bottom-0 left-0 w-full p-6 flex flex-col gap-2">
                <span className="bg-primary-500 text-white font-bold text-[10px] px-2.5 py-0.5 rounded-full w-max tracking-widest uppercase opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-md">
                  Explore
                </span>
                <h3 className="text-white font-bold text-2xl tracking-tight drop-shadow-md">
                  {cat.koName}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryGrid;
