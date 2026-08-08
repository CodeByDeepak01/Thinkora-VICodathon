import { useEffect, useRef, useState } from "react";import {
  Code2,
  Menu,
  Moon,
  Sun,
  X,
} from "lucide-react";
import { NavLink } from "react-router-dom";
import { useTheme } from "../../context/ThemeContext";

function Layout({ children }) {
  const { darkMode, toggleTheme } = useTheme();

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const mobileMenuRef = useRef(null);

  const navLinkClass = ({ isActive }) => `
    flex
    min-h-[44px]
    items-center
    rounded-full
    px-3
    py-2
    text-sm
    font-medium
    transition-all
    duration-200
    sm:px-4

    ${
      isActive
        ? "bg-primary-600 text-white shadow-md shadow-primary-600/20"
        : `
          text-slate-600
          hover:bg-white
          hover:text-slate-900

          dark:text-slate-300
          dark:hover:bg-white/10
          dark:hover:text-white
        `
    }
  `;

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  useEffect(() => {
  const handleClickOutside = (event) => {
    if (
      mobileMenuRef.current &&
      !mobileMenuRef.current.contains(event.target)
    ) {
      closeMobileMenu();
    }
  };

  if (mobileMenuOpen) {
    document.addEventListener("mousedown", handleClickOutside);
  }

  return () => {
    document.removeEventListener("mousedown", handleClickOutside);
  };
}, [mobileMenuOpen]);

  return (
    <div
      className="
        min-h-screen
        bg-slate-50
        text-slate-900
        transition-colors
        duration-300
        dark:bg-[#020617]
        dark:text-slate-100
      "
    >
      {/* ================================================= */}
      {/* HEADER */}
      {/* ================================================= */}

      <header
        className="
          fixed
          inset-x-0
          top-0
          z-50
          border-b
          border-slate-200/80
          bg-white/90
          backdrop-blur-xl
          transition-colors
          duration-300
          dark:border-white/10
          dark:bg-[#020617]/85
        "
      >
        <div
          className="
            mx-auto
            flex
            h-[73px]
            max-w-6xl
            items-center
            justify-between
            gap-4
            px-3
            sm:px-6
            lg:px-8
          "
        >
          {/* ================================================= */}
{/* LOGO */}
{/* ================================================= */}

<NavLink
  to="/"
  onClick={closeMobileMenu}
  className="flex shrink-0 items-center gap-3"
>
  <div
    className="
      flex
      h-10
      w-10
      items-center
      justify-center
      rounded-full
      bg-primary-600
      text-white
      shadow-md
      shadow-primary-600/20
      transition-transform
      duration-200
      hover:scale-105
    "
  >
    <Code2 className="h-5 w-5" />
  </div>

  <div className="leading-tight">
    <h1 className="text-xl font-black tracking-tight">
      <span className="text-slate-900 dark:text-white">
        AB
      </span>

      <span className="text-primary-600">
        Talks
      </span>
    </h1>

    <p
      className="
        hidden
        text-[9px]
        font-semibold
        uppercase
        tracking-[0.25em]
        text-slate-500
        dark:text-slate-400
        sm:block
      "
    >
      Build • Ship • Grow
    </p>
  </div>
</NavLink>

          {/* ================================================= */}
          {/* DESKTOP NAVIGATION */}
          {/* ================================================= */}

          <nav
            className="
              hidden
              items-center
              gap-1
              rounded-full
              bg-slate-100
              p-1
              md:flex
              dark:bg-slate-800/80
            "
          >
            <NavLink to="/" className={navLinkClass}>
              Home
            </NavLink>

            <NavLink
              to="/dashboard"
              className={navLinkClass}
            >
              Dashboard
            </NavLink>

            <NavLink
              to="/day/12"
              className={navLinkClass}
            >
              Challenge
            </NavLink>

            <NavLink
              to="/leaderboard"
              className={navLinkClass}
            >
              Leaderboard
            </NavLink>

            <NavLink
              to="/profile"
              className={navLinkClass}
            >
              Profile
            </NavLink>
          </nav>

          {/* ================================================= */}
          {/* DESKTOP RIGHT ACTIONS */}
          {/* ================================================= */}

          <div className="hidden shrink-0 items-center gap-2 md:flex">
            {/* Login */}
            <NavLink
              to="/login"
              className="
                flex
                h-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                px-4
                text-sm
                font-semibold
                text-slate-700
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-primary-300
                hover:text-primary-600
                hover:shadow-md
                dark:border-white/10
                dark:bg-slate-900
                dark:text-slate-200
                dark:hover:border-primary-400
                dark:hover:text-primary-300
              "
            >
              Login
            </NavLink>

            {/* Theme */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="
                flex
                h-10
                w-10
                shrink-0
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-600
                shadow-sm
                transition-all
                duration-200
                hover:-translate-y-0.5
                hover:border-primary-300
                hover:text-primary-600
                hover:shadow-md
                dark:border-white/10
                dark:bg-slate-800
                dark:text-yellow-300
                dark:hover:border-primary-400
                dark:hover:text-yellow-200
              "
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>
          </div>

          {/* ================================================= */}
          {/* MOBILE ACTIONS */}
          {/* ================================================= */}

          <div className="flex items-center gap-2 md:hidden">
            {/* Theme Toggle */}
            <button
              type="button"
              onClick={toggleTheme}
              aria-label={
                darkMode
                  ? "Switch to light mode"
                  : "Switch to dark mode"
              }
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-600
                shadow-sm
                transition-all
                duration-200
                dark:border-white/10
                dark:bg-slate-800
                dark:text-yellow-300
              "
            >
              {darkMode ? (
                <Sun className="h-5 w-5" />
              ) : (
                <Moon className="h-5 w-5" />
              )}
            </button>

            {/* Menu Toggle */}
            <button
              type="button"
              onClick={() =>
                setMobileMenuOpen(
                  (current) => !current,
                )
              }
              aria-label={
                mobileMenuOpen
                  ? "Close menu"
                  : "Open menu"
              }
              aria-expanded={mobileMenuOpen}
              className="
                flex
                h-10
                w-10
                items-center
                justify-center
                rounded-full
                border
                border-slate-200
                bg-white
                text-slate-700
                shadow-sm
                transition-all
                duration-200
                hover:border-primary-300
                hover:text-primary-600
                dark:border-white/10
                dark:bg-slate-800
                dark:text-slate-200
                dark:hover:border-primary-400
              "
            >
              {mobileMenuOpen ? (
                <X className="h-5 w-5" />
              ) : (
                <Menu className="h-5 w-5" />
              )}
            </button>
          </div>
        </div>

        {/* ================================================= */}
{/* MOBILE MENU */}
{/* ================================================= */}

{mobileMenuOpen && (
  <div
    ref={mobileMenuRef}
    className="
      border-t
      border-slate-200
      bg-white
      px-3
      pb-4
      pt-3
      shadow-lg
      dark:border-white/10
      dark:bg-[#020617]
    "
  >
    <nav className="mx-auto max-w-6xl space-y-1">
      <NavLink
        to="/"
        onClick={closeMobileMenu}
        className={navLinkClass}
      >
        Home
      </NavLink>

      <NavLink
        to="/dashboard"
        onClick={closeMobileMenu}
        className={navLinkClass}
      >
        Dashboard
      </NavLink>

      <NavLink
        to="/day/12"
        onClick={closeMobileMenu}
        className={navLinkClass}
      >
        Challenge
      </NavLink>

      <NavLink
        to="/leaderboard"
        onClick={closeMobileMenu}
        className={navLinkClass}
      >
        Leaderboard
      </NavLink>

      <NavLink
        to="/profile"
        onClick={closeMobileMenu}
        className={navLinkClass}
      >
        Profile
      </NavLink>

      {/* Login */}
      <NavLink
        to="/login"
        onClick={closeMobileMenu}
        className="
          mt-2
          flex
          min-h-[44px]
          items-center
          justify-center
          rounded-full
          bg-primary-600
          px-4
          py-2
          text-sm
          font-semibold
          text-white
          shadow-md
          transition-all
          duration-200
          hover:bg-primary-700
        "
      >
        Login
      </NavLink>
    </nav>
  </div>
)}
      </header>

      {/* ================================================= */}
      {/* MAIN CONTENT */}
      {/* ================================================= */}

      <main
        className="
          mx-auto
          flex
          min-h-screen
          max-w-6xl
          flex-col
          px-3
          pb-8
          pt-[93px]
          transition-colors
          duration-300
          sm:px-6
          sm:pt-[97px]
          lg:px-8
        "
      >
        {children}
      </main>
    </div>
  );
}


export default Layout;