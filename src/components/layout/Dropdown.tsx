import { Fragment } from "react";
import { createPortal } from "react-dom";
import { Link } from "react-router-dom";

interface DropdownProps {
  className?: string;
  text: string;
  items: { id: string; koName: string; enName: string }[];
  basePath: string;
  currentPath: string;
  isActive: boolean;
  isOpen: boolean;
  onToggle: () => void;
  onClose: () => void;
}

const Dropdown = ({
  className,
  text,
  items,
  basePath,
  currentPath,
  isActive,
  isOpen,
  onToggle,
  onClose,
}: DropdownProps) => {
  return (
    <Fragment>
      {isOpen &&
        createPortal(
          <div
            className="fixed w-full min-h-screen z-40 top-0 left-0 bg-slate-900/50 backdrop-blur-sm"
            onClick={onClose}
            aria-hidden="true"
          />,
          document.body,
        )}
      <li className={`${className || ""} relative`}>
        <button
          type="button"
          className={`flex items-center gap-1 hover:text-primary-400 transition-colors cursor-pointer ${
            isActive ? "text-primary-500" : ""
          }`}
          onClick={onToggle}
          aria-haspopup="true"
          aria-expanded={isOpen}
        >
          {text}
          <svg
            className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2.5}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </button>
        <ul
          className={`absolute top-full left-1/2 -translate-x-1/2 mt-4 flex-col py-2 min-w-32 border border-white/10 rounded-xl bg-slate-800 shadow-2xl z-50 overflow-hidden transition-all duration-200 origin-top ${
            isOpen
              ? "flex opacity-100 scale-y-100"
              : "hidden opacity-0 scale-y-0"
          }`}
          role="menu"
        >
          {items.map((sub, idx) => {
            const subHref = `${basePath}/${sub.enName}`;
            const isSubActive = currentPath === subHref;
            const isLast = idx === items.length - 1;
            return (
              <Fragment key={sub.id}>
                <li className="w-full hover:bg-slate-700/50 transition-colors px-4 py-2 text-sm whitespace-nowrap">
                  <Link
                    to={subHref}
                    onClick={onClose}
                    className={`block w-full h-full ${
                      isSubActive
                        ? "text-primary-400 font-bold"
                        : "text-slate-200"
                    }`}
                  >
                    {sub.koName}
                  </Link>
                </li>
                {!isLast && (
                  <li className="w-full px-2" aria-hidden="true">
                    <hr className="border-t border-white/10 my-1" />
                  </li>
                )}
              </Fragment>
            );
          })}
        </ul>
      </li>
    </Fragment>
  );
};

export default Dropdown;
