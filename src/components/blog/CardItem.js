import Link from "next/link";

const CardItem = (props) => {
  return (
    <Link href={`/interview/${props.id}`} className="group block">
      <div className="flex flex-col bg-slate-50 hover:bg-white border border-slate-200 hover:border-primary-300 rounded-2xl p-8 transition-all duration-300 hover:shadow-xl hover:-translate-y-1 h-full relative overflow-hidden">
        <div className="absolute top-0 right-0 w-24 h-24 bg-primary-100 rounded-bl-full opacity-0 group-hover:opacity-50 transition-opacity duration-500" />

        <div className="flex items-center gap-3 mb-4 z-10">
          <span className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-slate-500 font-bold text-sm">
            Q.
          </span>
          <span className="text-sm font-semibold tracking-wide text-primary-600 uppercase">
            {props.id.replace("_", " ")}
          </span>
        </div>

        <h3 className="text-2xl font-bold text-slate-800 mb-6 group-hover:text-primary-600 transition-colors z-10">
          {props.title} 분야 현지인 인터뷰
        </h3>

        <div className="mt-auto flex items-center justify-between border-t border-slate-200 pt-4 z-10">
          <p className="text-sm font-medium text-slate-500">
            진행: <span className="text-slate-800">{props.name}</span>
          </p>
          <span className="text-primary-500 group-hover:translate-x-1 transition-transform duration-300">
            <svg
              className="w-5 h-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M14 5l7 7m0 0l-7 7m7-7H3"
              />
            </svg>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;
