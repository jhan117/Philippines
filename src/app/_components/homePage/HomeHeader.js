import Link from "next/link";

import DropdownList from "../dropdown/DropdownList";
import LinkItem from "../ui/LinkItem";

import { navList, envList, ecoList } from "@/app/_utils/data";

const HomeHeader = () => {
  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
      <h1 className="text-2xl font-bold text-white tracking-tight hover:text-primary-500 transition-colors">
        <Link href="/">필리핀 2조</Link>
      </h1>
      <nav>
        <ul className="flex items-center gap-6">
          {navList.map((item) => {
            if (item.id == "a3") {
              return (
                <DropdownList
                  key={item.id}
                  className="text-white hover:text-primary-500 font-medium transition-colors cursor-pointer"
                  href={`/${item.enName}`}
                  text={item.koName}
                  item={envList}
                />
              );
            } else if (item.id == "a5") {
              return (
                <DropdownList
                  key={item.id}
                  className="text-white hover:text-primary-500 font-medium transition-colors cursor-pointer"
                  href={`/${item.enName}`}
                  text={item.koName}
                  item={ecoList}
                />
              );
            } else {
              return (
                <LinkItem
                  key={item.id}
                  className="text-white hover:text-primary-500 font-medium transition-colors cursor-pointer"
                  href={`/${item.enName}`}
                  text={item.koName}
                />
              );
            }
          })}
        </ul>
      </nav>
    </header>
  );
};

export default HomeHeader;
