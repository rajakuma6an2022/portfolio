import React from "react";
import { Link, NavLink } from "react-router-dom";
import { IoCodeSlashOutline } from "react-icons/io5";
import { useTheme } from "../stateManagement/ThemeContext";
import { Moon, Sun } from "../components/Icons";

const Header: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <div className="flex flex-col md:px-5 px-2 py-2">
      <header className="flex flex-col sm:flex-row md:items-center justify-between gap-3 sm:gap-0 md:mb-4">
        <div className="flex justify-between items-center sm:hidden block px-2">
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold flex items-center gap-1"
          >
            <IoCodeSlashOutline /> RK
          </Link>
          <button
            aria-label="toggle theme"
            onClick={toggleTheme}
            className="p-2 rounded mt-2 sm:mt-0"
            title={
              theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
            }
          >
            {theme === "light" ? <Moon /> : <Sun />}
          </button>
        </div>
        <div className="hidden md:block">
          <Link
            to="/"
            className="text-lg sm:text-xl font-bold flex flex-row items-center gap-1"
          >
            <IoCodeSlashOutline /> RK
          </Link>
        </div>
        <nav className="bg-bg md:p-2 px-2 sm:p-4 rounded-lg w-full sm:w-auto overflow-x-auto">
          <div className="flex justify-start gap-4 whitespace-nowrap">
            {[
              { path: "/", label: "Home" },
              { path: "/projects", label: "Projects" },
              { path: "/about", label: "About" },
            ].map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `relative md:px-2 py-1 text-text font-medium transition
             ${
               isActive
                 ? "text-blue-500 after:block after:h-[2px] after:bg-blue-500 after:mt-1 after:w-[100%]"
                 : "hover:text-blue-500"
             }`
                }
              >
                {link.label}
              </NavLink>
            ))}
          </div>
        </nav>

        <button
          aria-label="toggle theme"
          onClick={toggleTheme}
          className="p-2 rounded mt-2 sm:mt-0 hidden md:block"
          title={
            theme === "light" ? "Switch to Dark Mode" : "Switch to Light Mode"
          }
        >
          {theme === "light" ? <Moon /> : <Sun />}
        </button>
      </header>
    </div>
  );
};

export default Header;
