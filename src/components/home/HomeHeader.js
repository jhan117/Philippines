"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import DropdownList from "../dropdown/DropdownList";
import LinkItem from "../ui/LinkItem";

import { navList, envList, ecoList } from "@/data/siteData";

const HomeHeader = () => {
  const [openMenuId, setOpenMenuId] = useState(null);
  const pathname = usePathname();

  useEffect(() => {
    setOpenMenuId(null);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 flex justify-between items-center bg-slate-900/80 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
      <h1 className="text-2xl font-bold text-white tracking-tight hover:text-primary-500 transition-colors">
        <Link href="/">Philippines Insight</Link>
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
                  isOpen={openMenuId === item.id}
                  onToggle={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                  onClose={() => setOpenMenuId(null)}
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
                  isOpen={openMenuId === item.id}
                  onToggle={() => setOpenMenuId(openMenuId === item.id ? null : item.id)}
                  onClose={() => setOpenMenuId(null)}
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
