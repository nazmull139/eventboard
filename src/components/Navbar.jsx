import { Bookmark, CalendarDays, Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useScheduleContext } from "../context/ScheduleContext";

export default function Navbar() {
  const { saved } = useScheduleContext();
  const [isOpen, setIsOpen] = useState(false);

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-white/90 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4">

        {/* Main Navbar */}
        <div className="flex items-center justify-between py-4">

          {/* Logo */}
          <Link
            to="/"
            onClick={closeMenu}
            className="flex items-center gap-2 text-xl font-black text-indigo-600"
          >
            <CalendarDays />
            EventBoard
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-2 md:flex">

            <NavLink
              to="/"
              className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-100"
            >
              Discover
            </NavLink>

            <NavLink
              to="/saved"
              className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-100"
            >
              <Bookmark className="mr-1 inline h-4 w-4" />
              My Schedule

              <span className="ml-1 rounded-full bg-indigo-600 px-1.5 py-0.5 text-xs text-white">
                {saved.length}
              </span>
            </NavLink>

            <NavLink
              to="/about"
              className="rounded-lg px-3 py-2 text-sm font-semibold hover:bg-slate-100"
            >
              About
            </NavLink>

          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="rounded-lg p-2 text-slate-700 hover:bg-slate-100 md:hidden"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isOpen && (
          <nav className="border-t py-3 md:hidden">

            <div className="flex flex-col gap-1">

              <NavLink
                to="/"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-slate-100"
              >
                Discover
              </NavLink>

              <NavLink
                to="/saved"
                onClick={closeMenu}
                className="flex items-center justify-between rounded-lg px-3 py-3 text-sm font-semibold hover:bg-slate-100"
              >
                <span className="flex items-center">
                  <Bookmark className="mr-2 h-4 w-4" />
                  My Schedule
                </span>

                <span className="rounded-full bg-indigo-600 px-2 py-0.5 text-xs text-white">
                  {saved.length}
                </span>
              </NavLink>

              <NavLink
                to="/about"
                onClick={closeMenu}
                className="rounded-lg px-3 py-3 text-sm font-semibold hover:bg-slate-100"
              >
                About
              </NavLink>

            </div>
          </nav>
        )}

      </div>
    </header>
  );
}