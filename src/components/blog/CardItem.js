import Link from "next/link";

const CardItem = (props) => {
  return (
    <li className="bg-white border border-slate-200 hover:border-primary-500 rounded-2xl w-40 h-40 flex flex-col justify-center items-center m-4 text-center transition-all duration-300 hover:scale-105 hover:-translate-y-1 shadow-sm hover:shadow-xl group cursor-pointer overflow-hidden">
      <Link href={`/interview/${props.id}`} className="w-full h-full flex flex-col justify-center items-center gap-2 p-4">
        <h3 className="text-xl font-bold text-slate-800 group-hover:text-primary-500 transition-colors">{props.title}</h3>
        <p className="text-sm font-medium text-slate-500 bg-slate-100 px-3 py-1 rounded-full group-hover:bg-primary-50 group-hover:text-primary-600 transition-colors">{props.name}</p>
      </Link>
    </li>
  );
};

export default CardItem;
