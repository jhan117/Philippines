import Image from "next/image";

const MemberItem = (props) => {
  return (
    <div className="w-52 bg-white p-6 border border-slate-100 rounded-2xl text-center flex flex-col items-center gap-4 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-[0_10px_30px_rgba(0,0,0,0.08)] hover:-translate-y-2 transition-all duration-300 group">
      <Image
        className="rounded-full w-24 h-24 object-cover shadow-inner ring-4 ring-slate-50 group-hover:ring-primary-100 transition-colors duration-300"
        src={props.src}
        width={100}
        height={100}
        alt={props.name}
        onContextMenu={(e) => e.preventDefault()}
        loading="eager"
      />
      <h3 className="text-lg font-bold text-slate-800 mt-2">{props.name}</h3>
      <div className="flex flex-col gap-1.5 h-[6.5rem] justify-center text-sm text-slate-500 font-medium">
        <p className="text-primary-500 font-bold tracking-wider text-xs">{props.role}</p>
        <p>{props.univ}</p>
        <p className="whitespace-pre-wrap text-xs">{props.major}</p>
      </div>
    </div>
  );
};

export default MemberItem;
