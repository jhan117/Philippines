import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

import Dropdown from "./Dropdown";
import { navList } from "@/data/siteData";

const Header = () => {
  const [openMenuId, setOpenMenuId] = useState<string | null>(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close menus on route change
  useEffect(() => {
    setOpenMenuId(null);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Close menus on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpenMenuId(null);
        setIsMobileMenuOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  const isNavItemActive = (enName: string, url?: string) => {
    if (!enName) return pathname === "/";
    if (url && pathname === url) return true;
    return pathname === `/${enName}` || pathname.startsWith(`/${enName}/`);
  };

  return (
    <header className="sticky top-0 z-50 w-full px-6 py-4 bg-slate-950 backdrop-blur-md border-b border-white/10 shadow-sm transition-all duration-300">
      <div className="flex justify-between items-center w-full max-w-[1920px] mx-auto">
        <div className="text-2xl font-black text-white tracking-tight hover:text-primary-500 transition-colors">
          <Link to="/">Philippines Insight</Link>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="md:hidden text-white p-2 hover:bg-white/10 rounded-xl transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-primary-500/50 active:scale-95"
          onClick={() => {
            setIsMobileMenuOpen((prev) => {
              if (prev) setOpenMenuId(null);
              return !prev;
            });
          }}
          aria-label="모바일 메뉴 열기/닫기"
          aria-expanded={isMobileMenuOpen}
        >
          <svg
            className="w-7 h-7"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMobileMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.5}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block" aria-label="주 메뉴">
          <ul className="flex items-center gap-8">
            {navList.map((item) => {
              const active = isNavItemActive(item.enName, item.url);
              if (item.subItems) {
                return (
                  <Dropdown
                    key={item.id}
                    className="text-white/90 hover:text-primary-500 font-semibold tracking-wide transition-colors cursor-pointer"
                    basePath={`/${item.enName}`}
                    currentPath={pathname}
                    isActive={active}
                    text={item.koName}
                    items={item.subItems}
                    isOpen={openMenuId === item.id}
                    onToggle={() =>
                      setOpenMenuId(openMenuId === item.id ? null : item.id)
                    }
                    onClose={() => setOpenMenuId(null)}
                  />
                );
              }
              return (
                <li
                  key={item.id}
                  className={`font-semibold tracking-wide transition-colors cursor-pointer ${
                    active
                      ? "text-primary-500"
                      : "text-white/90 hover:text-primary-500"
                  }`}
                >
                  <Link
                    to={item.url || "/"}
                    className="block w-full h-full"
                    aria-current={active ? "page" : undefined}
                  >
                    {item.koName}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>

      {/* Mobile Menu Backdrop */}
      {isMobileMenuOpen && (
        <div
          className="md:hidden fixed inset-0 top-full h-screen bg-slate-950/60 backdrop-blur-sm z-40"
          onClick={() => {
            setIsMobileMenuOpen(false);
            setOpenMenuId(null);
          }}
          aria-hidden="true"
        />
      )}

      {/* Mobile Navigation Dropdown */}
      <div
        className={`md:hidden absolute left-0 top-full w-full z-50 bg-slate-950/95 backdrop-blur-2xl transition-all duration-500 ease-in-out overflow-hidden shadow-[0_30px_60px_rgba(0,0,0,0.6)] ${
          isMobileMenuOpen
            ? "max-h-[85vh] border-b border-white/10 opacity-100"
            : "max-h-0 border-b-0 border-transparent opacity-0 pointer-events-none"
        }`}
      >
        <nav
          className="flex flex-col px-6 py-2 overflow-y-auto pb-8 max-h-[85vh]"
          aria-label="모바일 메뉴"
        >
          {navList.map((item, idx) => {
            const isOpen = openMenuId === item.id;
            const active = isNavItemActive(item.enName, item.url);

            return (
              <div
                key={item.id}
                className={`flex flex-col py-4 border-b border-white/5 last:border-0 transition-all duration-500 ease-out transform ${
                  isMobileMenuOpen
                    ? "translate-x-0 opacity-100"
                    : "-translate-x-8 opacity-0"
                }`}
                style={{
                  transitionDelay: `${isMobileMenuOpen ? idx * 50 : 0}ms`,
                }}
              >
                {item.subItems ? (
                  <div className="flex flex-col">
                    <button
                      type="button"
                      className={`flex items-center justify-between w-full text-lg md:text-xl font-bold hover:text-primary-400 transition-colors py-2 active:scale-[0.98] ${
                        active ? "text-primary-400" : "text-white/90"
                      }`}
                      onClick={() => setOpenMenuId(isOpen ? null : item.id)}
                      aria-expanded={isOpen}
                    >
                      {item.koName}
                      <span
                        className={`flex items-center justify-center w-8 h-8 rounded-full bg-white/5 transition-all duration-300 ${isOpen ? "bg-primary-500/20" : ""}`}
                      >
                        <svg
                          className={`w-5 h-5 transition-transform duration-300 ${isOpen ? "rotate-180 text-primary-500" : "text-white/50"}`}
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2.5}
                            d="M19 9l-7 7-7-7"
                          />
                        </svg>
                      </span>
                    </button>

                    {/* Mobile Submenu accordion */}
                    <div
                      className={`flex flex-col gap-1 overflow-hidden transition-all duration-300 ease-in-out ${isOpen ? "max-h-64 mt-2 opacity-100" : "max-h-0 mt-0 opacity-0"}`}
                    >
                      {item.subItems.map((sub) => {
                        const subHref = `/${item.enName}/${sub.enName}`;
                        const isSubActive = pathname === subHref;
                        return (
                          <Link
                            key={sub.id}
                            to={subHref}
                            className={`pl-4 py-3 text-[17px] font-semibold hover:text-white hover:bg-white/5 rounded-xl transition-all flex items-center gap-3 active:bg-white/10 ${
                              isSubActive ? "text-primary-400" : "text-white/60"
                            }`}
                          >
                            <span className="w-1.5 h-1.5 rounded-full bg-primary-500/60 shadow-[0_0_8px_rgba(255,126,20,0.6)]" />
                            {sub.koName}
                          </Link>
                        );
                      })}
                    </div>
                  </div>
                ) : (
                  <Link
                    to={item.url || "/"}
                    className={`flex items-center w-full text-lg md:text-xl font-bold hover:text-primary-400 transition-colors py-2 active:scale-[0.98] ${
                      active ? "text-primary-400" : "text-white/90"
                    }`}
                  >
                    {item.koName}
                  </Link>
                )}
              </div>
            );
          })}
        </nav>
      </div>
    </header>
  );
};

export default Header;
