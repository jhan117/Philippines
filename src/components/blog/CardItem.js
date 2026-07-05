import Link from "next/link";

const CardItem = (props) => {
  return (
    <li className="bg-slate-800 border border-white/10 hover:border-primary-500 rounded-xl w-32 h-32 flex flex-col gap-3 justify-center items-center m-4 text-center transition-all hover:scale-105 shadow-lg group cursor-pointer">
      <Link href={`/interview/${props.id}`} className="w-full h-full flex flex-col justify-center items-center gap-2">
        <h3 className="text-lg font-bold text-slate-100 group-hover:text-primary-400 transition-colors">{props.title}</h3>
        <p className="text-sm text-slate-400">{props.name}</p>
      </Link>
    </li>
  );
};

export default CardItem;
