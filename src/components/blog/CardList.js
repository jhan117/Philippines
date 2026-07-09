import CardItem from "./CardItem";
import { category } from "@/data/siteData";

const CardList = () => {
  return (
    <section className="w-full max-w-4xl mx-auto py-16 px-6">
      <div className="text-center mb-16 border-b border-slate-200 pb-12">
        <h2 className="text-sm font-bold tracking-widest text-primary-600 uppercase mb-3">
          Interview Archive
        </h2>
        <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">
          현지인 인터뷰 기록
        </h1>
        <p className="text-lg text-slate-500 max-w-2xl mx-auto leading-relaxed">
          필리핀 각 분야의 현지인들과 직접 만나 나눈 생생한 대화의 기록입니다.
          각 주제를 클릭하여 인터뷰 전문을 확인해 보세요.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {category.map((d) => (
          <CardItem key={d.id} id={d.id} title={d.tag} name={d.name} />
        ))}
      </div>
    </section>
  );
};

export default CardList;
